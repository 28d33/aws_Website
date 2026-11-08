import Link from "next/link"
import { siteConfig } from "@/data/site"
import { LinkedInIcon } from "@/components/icons/linkedin"

/**
 * Join strip — the closing ask. Flat surface, hairline rule, nothing glowing.
 */
function JoinStrip() {
  const linkedin = siteConfig.socialLinks[0]

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 border-t border-border/70">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-foreground">
            Build with us.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Announcements, events, and everything the group ships — all on one channel.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-blue px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
          >
            <LinkedInIcon className="h-4 w-4" />
            Follow on LinkedIn
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-md border border-border px-6 text-sm text-muted transition-colors hover:border-blue hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}

export { JoinStrip }
