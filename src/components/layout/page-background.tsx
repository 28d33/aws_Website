import { siteConfig } from "@/data/site"
import { PixelGrid } from "./pixel-grid"

function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true">
      {/* Pixel-grid field (our own WebGL shader, no third-party embed) */}
      <PixelGrid />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.30] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Brand rules */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, var(--orange), transparent 40%)" }}
      />
      <p className="absolute right-4 top-3 text-[10px] font-mono tracking-widest text-muted/70">
        {siteConfig.name.toUpperCase()}
      </p>
    </div>
  )
}

export { PageBackground }
