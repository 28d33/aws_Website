"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  delay?: number
}

function ImageReveal({ src, alt, className, delay = 0 }: ImageRevealProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 z-10 bg-background"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, delay, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="block w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  )
}

export { ImageReveal }
