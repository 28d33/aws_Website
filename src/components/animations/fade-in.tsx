"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Direction = "up" | "down" | "left" | "right"

interface FadeInProps extends React.PropsWithChildren {
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
}

const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, direction = "up", delay = 0, duration = 0.6, className }, ref) => {
    const offset = directionOffset[direction]

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    )
  },
)

FadeIn.displayName = "FadeIn"

export { FadeIn }
