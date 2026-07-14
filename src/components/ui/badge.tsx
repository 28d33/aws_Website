"use client"

import { cn } from "@/lib/utils"

const variants = {
  default: "bg-blue text-white",
  secondary: "bg-card text-foreground border border-border",
  outline: "bg-transparent text-blue border border-blue",
  success: "bg-green-100 text-green-800",
} as const

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
Badge.displayName = "Badge"

export { Badge }
export type { BadgeProps }
