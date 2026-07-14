"use client"

import NextLink from "next/link"
import { Code2, Link as LinkIcon, Hash, Video, Camera, MessageCircle, Heart } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Separator } from "@/components/ui/separator"

const socialIcons: Record<string, React.ElementType> = {
  github: Code2,
  linkedin: LinkIcon,
  twitter: Hash,
  youtube: Video,
  instagram: Camera,
  discord: MessageCircle,
}

const resourceLinks = siteConfig.navLinks.filter((link) =>
  ["Resources", "Blog", "Projects", "Certifications"].includes(link.label),
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-border/20">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground">{siteConfig.name}</h3>
            <p className="text-sm leading-relaxed text-muted font-light max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-blue">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-blue">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-blue">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {siteConfig.socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                if (!Icon) return null
                return (
                  <NextLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-blue transition-all duration-200 p-2 bg-card border border-border/40 rounded-full hover:scale-105 transform hover:border-blue/30"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </NextLink>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/20" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-muted font-light">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted font-light">
            Built with <Heart className="h-3.5 w-3.5 fill-blue text-blue" /> on AWS
          </p>
        </div>
      </div>
    </footer>
  )
}
