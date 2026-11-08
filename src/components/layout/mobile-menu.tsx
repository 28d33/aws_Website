"use client"

import { motion, AnimatePresence } from "framer-motion"
import NextLink from "next/link"
import { X } from "lucide-react"
import { siteConfig } from "@/data/site"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0px at 96% 3%)" }}
          animate={{ clipPath: "circle(150% at 96% 3%)" }}
          exit={{ clipPath: "circle(0px at 96% 3%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-black text-white"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute left-6 top-6">
            <span className="text-blue text-lg font-bold">AWS SBG</span>
          </div>

          <nav className="flex h-full flex-col items-center justify-center gap-6">
            {siteConfig.navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <NextLink
                  href={link.href}
                  onClick={onClose}
                  className="text-4xl md:text-6xl font-light tracking-tight text-white/80 hover:text-blue transition-colors block border-b border-white/20 pb-2"
                >
                  {link.label}
                </NextLink>
              </motion.div>
            ))}
          </nav>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
            {siteConfig.socialLinks.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-blue text-xs tracking-widest uppercase transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
