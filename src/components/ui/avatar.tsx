"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
  xl: "h-24 w-24 text-2xl",
} as const

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: keyof typeof sizes
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function Avatar({ className, src, alt = "", fallback, size = "md", ...props }: AvatarProps) {
  const [error, setError] = useState(false)
  const showImage = src && !error

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-card text-muted overflow-hidden",
        sizes[size],
        className,
      )}
      {...props}
    >
      {showImage && (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {(error || !src) && fallback && (
        <span className="font-medium leading-none">{getInitials(fallback)}</span>
      )}
    </div>
  )
}
Avatar.displayName = "Avatar"

export { Avatar }
export type { AvatarProps }
