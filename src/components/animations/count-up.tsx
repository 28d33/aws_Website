"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useCounter } from "@/hooks/use-counter"

interface CountUpProps {
  from?: number
  to: number
  suffix?: string
  duration?: number
  className?: string
}

function CountUp({ from = 0, to, suffix = "", duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)
  const count = useCounter(to - from, duration, inView)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={cn(className)}>
      {from + count}
      {suffix}
    </span>
  )
}

export { CountUp }
