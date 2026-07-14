"use client"

import { forwardRef, Children, isValidElement, cloneElement } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-blue text-slate-950 font-semibold hover:bg-blue-light focus-visible:ring-2 focus-visible:ring-blue/20",
  secondary:
    "bg-card text-foreground border border-border hover:bg-accent focus-visible:ring-2 focus-visible:ring-blue/20",
  ghost:
    "bg-transparent text-foreground hover:bg-card focus-visible:ring-2 focus-visible:ring-blue/20",
  outline:
    "bg-transparent text-blue border border-blue hover:bg-blue hover:text-slate-950 font-semibold focus-visible:ring-2 focus-visible:ring-blue/20",
} as const

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
} as const

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  asChild?: boolean
}

type MotionButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof motion.button>,
  keyof React.ButtonHTMLAttributes<HTMLButtonElement>
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, disabled, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-offset-2",
      disabled && "opacity-50 pointer-events-none",
      variants[variant],
      sizes[size],
      className,
    )

    if (asChild && Children.count(children) === 1) {
      const child = Children.only(children)
      if (isValidElement<{ className?: string }>(child)) {
        return cloneElement(child, { className: cn(classes, child.props.className) })
      }
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        disabled={disabled}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    )
  },
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
