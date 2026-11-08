"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sun, Moon, Menu } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

const NAV_LINKS = siteConfig.navLinks.filter((l) => l.href !== "/")

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > 320 && y > lastY.current)
      lastY.current = y
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const el = document.documentElement
    if (el.classList.contains("dark")) {
      el.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      el.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  const linkedin = siteConfig.socialLinks[0]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur border-border -translate-y-0"
            : "bg-transparent border-transparent",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-serif text-lg font-bold tracking-tight text-foreground transition-colors hover:text-blue">
            AWS SBG
          </Link>

          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hidden text-sm transition-colors sm:block",
                  pathname === link.href ? "text-blue" : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-blue cursor-pointer"
                aria-label="Toggle theme"
              >
                <Sun className="theme-icon-sun h-4 w-4 text-orange" />
                <Moon className="theme-icon-moon h-4 w-4 text-blue" />
              </button>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-9 items-center rounded-md bg-blue px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-light sm:flex"
              >
                Join
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-blue sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
