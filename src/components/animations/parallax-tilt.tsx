"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef, type PointerEvent } from "react"

interface ParallaxTiltProps extends React.PropsWithChildren {
  className?: string
  maxRotate?: number
}

function ParallaxTilt({ children, className, maxRotate = 8 }: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxRotate, -maxRotate])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxRotate, maxRotate])

  const handlePointerMove = (e: PointerEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)
    x.set(Math.max(-1, Math.min(1, normalizedX)))
    y.set(Math.max(-1, Math.min(1, normalizedY)))
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  )
}

export { ParallaxTilt }
