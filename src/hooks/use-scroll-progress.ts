"use client"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v))
  return progress
}
