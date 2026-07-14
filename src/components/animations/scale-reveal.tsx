"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScaleRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  scale?: number
}

function ScaleReveal({ children, className, delay = 0, scale = 0.92 }: ScaleRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ scale, opacity: 0, filter: "blur(4px)" }}
      whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export { ScaleReveal }
