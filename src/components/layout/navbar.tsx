"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./mobile-menu"

const PRIMARY_LINKS = siteConfig.navLinks.slice(0, 6)
const MORE_LINKS = siteConfig.navLinks.slice(6)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const pathname = usePathname()
  const moreRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkBase = cn(
    "group relative text-sm font-medium transition-colors duration-300",
  )
  const activeLinkColor = "text-blue"
  const inactiveLinkColor = "text-muted hover:text-foreground"
  const logoColor = "text-blue hover:text-blue-dark"

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 flex items-center",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-sm h-16"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/images/logo.png" alt="AWS SBG Logo" className="h-8 w-8 object-contain rounded-md" />
            <span className={cn("text-xl font-serif font-bold tracking-tight transition-colors duration-300", logoColor)}>
              AWS SBG
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {PRIMARY_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    linkBase,
                    isActive ? activeLinkColor : inactiveLinkColor,
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-blue transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              )
            })}

            {/* More dropdown */}
            {MORE_LINKS.length > 0 && (
              <div ref={moreRef} className="relative">
                <button
                  onClick={() => setIsMoreOpen((o) => !o)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors duration-300",
                    MORE_LINKS.some((l) => l.href === pathname)
                      ? activeLinkColor
                      : inactiveLinkColor,
                  )}
                >
                  More
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isMoreOpen && "rotate-180",
                    )}
                  />
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card shadow-xl overflow-hidden z-50">
                    {MORE_LINKS.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMoreOpen(false)}
                          className={cn(
                            "block px-4 py-3 text-sm transition-colors hover:bg-background",
                            isActive ? "text-blue font-semibold" : "text-muted hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border bg-card/40 hover:bg-card text-foreground transition-all hover:border-blue/40 flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-orange" />
              ) : (
                <Moon className="h-4 w-4 text-blue" />
              )}
            </button>
            <Button
              variant="primary"
              size="md"
              className="hidden sm:inline-flex rounded-full px-6 shadow-sm"
              asChild
            >
              <Link href="/membership">Join Us</Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 transition-colors md:hidden text-foreground hover:text-blue"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
