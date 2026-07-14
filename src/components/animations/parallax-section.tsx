"use client"

import { cn } from "@/lib/utils"

interface ParallaxSectionProps extends React.PropsWithChildren {
  speed?: number
  className?: string
}

function ParallaxSection({ children, className }: ParallaxSectionProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
}

export { ParallaxSection }
