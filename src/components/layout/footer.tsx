"use client"

import NextLink from "next/link"
import { siteConfig } from "@/data/site"
import { LinkedInIcon } from "@/components/icons/linkedin"

export function Footer() {
  const year = new Date().getFullYear()
  const linkedin = siteConfig.socialLinks[0]

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg font-bold tracking-tight text-foreground">AWS SBG</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              AWS Student Builder Group — a community under MARVEL at UVCE, Bengaluru.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {siteConfig.navLinks
              .filter((l) => l.href !== "/")
              .map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-blue"
                >
                  {link.label}
                </NextLink>
              ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-blue px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-light"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">&copy; {year} AWS Student Builder Group</p>
          <p className="text-xs font-mono text-muted">400 builders and counting</p>
        </div>
      </div>
    </footer>
  )
}
