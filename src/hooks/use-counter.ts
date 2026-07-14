"use client"
import { useEffect, useState } from "react"

export function useCounter(target: number, duration = 2, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const animate = (now: number) => {
      if (!startTime) startTime = now
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, start])
  return count
}
