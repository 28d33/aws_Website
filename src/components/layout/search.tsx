"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, FileText, Calendar, BookOpen, FolderOpen } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const sections = [
  {
    title: "Pages",
    icon: FileText,
    items: [
      { label: "About Us", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Events",
    icon: Calendar,
    items: [
      { label: "Upcoming Events", href: "/events" },
      { label: "Past Events", href: "/events/past" },
    ],
  },
  {
    title: "Blog Posts",
    icon: BookOpen,
    items: [{ label: "Latest Posts", href: "/blog" }],
  },
  {
    title: "Resources",
    icon: FolderOpen,
    items: [
      { label: "Documentation", href: "/resources" },
      { label: "Tutorials", href: "/resources" },
    ],
  },
]

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setQuery("")
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-overlay backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-2xl rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 border-b border-border px-6 py-4">
              <Search className="h-5 w-5 shrink-0 text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted"
              />
              <button
                onClick={onClose}
                className="p-1 text-muted hover:text-foreground transition-colors"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {query.length === 0 ? (
                <p className="px-2 py-8 text-center text-sm text-muted">
                  Type to search for pages, events, blog posts, and resources...
                </p>
              ) : (
                <div className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <div className="mb-2 flex items-center gap-2 px-2">
                        <section.icon className="h-4 w-4 text-muted" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                          {section.title}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-card"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
