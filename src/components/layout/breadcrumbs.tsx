"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/animations/fade-in"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <FadeIn direction="left" duration={0.4} className={cn("flex items-center gap-2 text-sm", className)}>
      <Link href="/" className="text-muted transition-colors hover:text-blue">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.span
            className="text-muted"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.span>
          {item.href ? (
            <Link
              href={item.href}
              className="text-muted transition-colors hover:text-blue"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </FadeIn>
  )
}
