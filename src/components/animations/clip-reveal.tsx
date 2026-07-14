"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ClipRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "left" | "right" | "up" | "down"
}

const clipInitial: Record<string, string> = {
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
}

function ClipReveal({ children, className, delay = 0, direction = "up" }: ClipRevealProps) {
  const initialClip = clipInitial[direction]

  return (
    <motion.div
      className={cn("", className)}
      initial={{ clipPath: initialClip }}
      whileInView={{ clipPath: "inset(0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      <div style={{ clipPath: "inset(0)" }}>
        {children}
      </div>
    </motion.div>
  )
}

export { ClipReveal }
