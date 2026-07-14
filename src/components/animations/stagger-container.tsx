"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface StaggerContainerProps extends React.PropsWithChildren {
  staggerDelay?: number
  className?: string
}

interface StaggerItemProps extends React.PropsWithChildren {
  delay?: number
  className?: string
}

const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, staggerDelay = 0.1, className }, ref) => {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    )
  },
)

StaggerContainer.displayName = "StaggerContainer"

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, delay = 0, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={itemVariants}
        custom={delay}
      >
        {children}
      </motion.div>
    )
  },
)

StaggerItem.displayName = "StaggerItem"

export { StaggerContainer, StaggerItem }
