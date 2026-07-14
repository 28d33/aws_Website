"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "div" | "span"
  delay?: number
  stagger?: number
}

const motionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  div: motion.div,
  span: motion.span,
}

function TextReveal({ text, className, as = "div", delay = 0, stagger = 0.12 }: TextRevealProps) {
  const lines = text.split("\n")
  const MotionTag = motionComponents[as]

  return (
    <MotionTag className={cn(className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

export { TextReveal }
