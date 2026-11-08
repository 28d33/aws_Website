"use client"

import { useEffect, useRef } from "react"

/**
 * Pixel Grid — a WebGL cell field rendered by our own shader:
 * flat-tinted cells stepping through an intensity staircase from the page
 * tone toward a brand-blue ramp, with a slow flowing field, gently
 * breathing cells, and rare accent pops. Replaced the third-party
 * embed, so nothing external loads and no badge is injected.
 */

type Palette = { bg: string; inks: string[]; pop: string }

const DARK: Palette = {
  bg: "#0C1220",
  inks: ["#141F36", "#1D2F52", "#29487A", "#36619E"],
  pop: "#FF9900", // Smile Orange pops — same accent language as the foreground
}
const LIGHT: Palette = {
  bg: "#F5F8FD",
  inks: ["#E4EEF8", "#CFE1F1", "#B0CBE6", "#93B9DF"],
  pop: "#C2570C",
}

/* Field tuning */
const CELL_CSS = 64 // cell edge in CSS px
const SPEED = 0.2
const LEVELS = 6
const SCALE = 1.2
const DRIFT_ANGLE = 30
const GLINT = 0.1
const CONTRAST = 0.95
const DPR_CAP = 1.5

const VERT = `attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`

const FRAG = `precision highp float;
varying vec2 v_uv;
uniform vec2 u_res;
uniform float u_time, u_cell, u_levels, u_scale, u_angle, u_glint, u_contrast, u_speed;
uniform vec3 u_bg, u_ink0, u_ink1, u_ink2, u_ink3, u_pop;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int j = 0; j < 3; j++) {
    v += a * noise(p);
    p = p * 2.13 + vec2(11.3, 7.7);
    a *= 0.5;
  }
  return v;
}

vec3 ink(float idx) {
  if (idx < 0.5) return u_ink0;
  if (idx < 1.5) return u_ink1;
  if (idx < 2.5) return u_ink2;
  return u_ink3;
}

/* intensity 0..1 -> page tone, then up the ink ramp. Whole cells step. */
vec3 ramp(float x) {
  float f = clamp(x, 0.0, 1.0) * 4.0;
  float i = floor(min(f, 3.999));
  float fr = f - i;
  vec3 lo;
  if (i < 0.5) lo = u_bg; else lo = ink(i - 1.0);
  return sqrt(mix(lo * lo, ink(i) * ink(i), fr));
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy / u_cell);
  vec2 cc = (cell + 0.5) * u_cell / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 ca = vec2(cc.x * aspect, cc.y);
  float t = u_time * u_speed;

  /* slow macro gradient sweeping along the drift axis */
  float dirr = radians(u_angle);
  vec2 dv = vec2(cos(dirr), sin(dirr));
  float along = dot(ca - vec2(aspect * 0.5, 0.5), dv);
  float macro = smoothstep(-0.55, 0.75, along + 0.16 * sin(t * 0.20));

  /* flowing noise field for organic variation */
  float fl = fbm(ca * 1.7 * u_scale + dv * t * 0.16);
  float v = macro * 0.78 + (fl - 0.45) * 0.55;
  v = (v - 0.5) * u_contrast + 0.52;

  /* gentle per-cell breathing, phase-offset so waves ripple */
  v += 0.05 * sin(t * 0.9 + hash(cell) * 6.2831 + cell.y * 0.35 + cell.x * 0.21);
  v = clamp(v, 0.0, 1.0);

  /* quantize into discrete intensity steps */
  float L = max(u_levels, 2.0) - 1.0;
  float vq = floor(v * L + 0.5) / L;

  /* rare accent pops that blink in and hand off */
  float seed = hash(cell + vec2(31.7 * floor(t * 0.45), 17.3));
  float acc = smoothstep(1.0 - 0.025 * u_glint, 1.0, seed);
  float pulse = 0.5 + 0.5 * sin(t * 2.2 + seed * 40.0);
  vq = max(vq, acc * (0.85 + 0.15 * pulse));

  vec3 col = ramp(vq);
  col = mix(col, u_pop, acc * 0.9);
  gl_FragColor = vec4(col, vq);
}`

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h
  const int = parseInt(full, 16)
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255]
}

function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl =
      (canvas.getContext("webgl", {
        alpha: true,
        antialias: false,
        premultipliedAlpha: false,
      }) as WebGLRenderingContext | null) ??
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (!gl) return

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
    }

    const vShader = compile(gl.VERTEX_SHADER, VERT)
    const fShader = compile(gl.FRAGMENT_SHADER, FRAG)
    const program = gl.createProgram()
    if (!vShader || !fShader || !program) return
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, "a_pos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const cache = new Map<string, WebGLUniformLocation | null>()
    const uni = (name: string) => {
      if (!cache.has(name)) cache.set(name, gl.getUniformLocation(program, name))
      return cache.get(name)
    }
    const setVec3 = (name: string, hex: string) => {
      const loc = uni(name)
      if (loc) gl.uniform3f(loc, ...hexToRgb(hex))
    }

    /* Theme-reactive palette: track the .dark class like every toggle. */
    let dark = false
    const applyTheme = () => {
      dark = document.documentElement.classList.contains("dark")
      const p = dark ? DARK : LIGHT
      setVec3("u_bg", p.bg)
      p.inks.forEach((ink, i) => setVec3(`u_ink${i}`, ink))
      setVec3("u_pop", p.pop)
    }
    const themeObserver = new MutationObserver(applyTheme)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    applyTheme()

    const f1 = uni("u_levels")
    const f2 = uni("u_scale")
    const f3 = uni("u_angle")
    const f4 = uni("u_glint")
    const f5 = uni("u_contrast")
    const f6 = uni("u_speed")
    if (f1) gl.uniform1f(f1, LEVELS)
    if (f2) gl.uniform1f(f2, SCALE)
    if (f3) gl.uniform1f(f3, DRIFT_ANGLE)
    if (f4) gl.uniform1f(f4, GLINT)
    if (f5) gl.uniform1f(f5, CONTRAST)
    if (f6) gl.uniform1f(f6, SPEED)

    let dpr = 1
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP)
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
        const res = uni("u_res")
        if (res) gl.uniform2f(res, w, h)
        const cell = uni("u_cell")
        if (cell) gl.uniform1f(cell, CELL_CSS * dpr)
      }
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()

    /* Reduced motion: one calm static frame, no loop. */
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let raf = 0
    let running = false
    let frame = 0
    const draw = (now: number) => {
      const t = uni("u_time")
      if (t) gl.uniform1f(t, now / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const loop = (now: number) => {
      if (!running) return
      draw(now)
      frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running) return
      running = true
      if (reduceMotion) draw(1600)
      else frame = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener("visibilitychange", onVisibility)
    start()

    return () => {
      stop()
      document.removeEventListener("visibilitychange", onVisibility)
      themeObserver.disconnect()
      resizeObserver.disconnect()
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
}

export { PixelGrid }
