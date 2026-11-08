"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef, type PointerEvent } from "react"

interface MagneticCardProps extends React.PropsWithChildren {
  className?: string
  onClick?: () => void
}

function MagneticCard({ children, className, onClick }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 })

  const handlePointerMove = (e: PointerEvent) => {
    if (e.pointerType === "touch") return // no magnet on touch — keeps scroll clean
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const maxDist = Math.min(rect.width, rect.height) / 2
    const dist = Math.sqrt(dx * dx + dy * dy)
    const strength = Math.min(dist / maxDist, 1)
    const maxDisplacement = 3
    const maxRotate = 2

    x.set((dx / maxDist) * maxDisplacement * strength)
    y.set((dy / maxDist) * maxDisplacement * strength)
    rotateX.set(-(dy / maxDist) * maxRotate * strength)
    rotateY.set((dx / maxDist) * maxRotate * strength)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn("relative cursor-pointer", className)}
      style={{
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
    >
      {children}
    </motion.div>
  )
}

export { MagneticCard }
