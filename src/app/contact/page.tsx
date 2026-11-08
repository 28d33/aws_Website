import { siteConfig } from "@/data/site"
import { LinkedInIcon } from "@/components/icons/linkedin"

export default function ContactPage() {
  const linkedin = siteConfig.socialLinks[0]

  return (
    <div className="mx-auto max-w-6xl px-5 pt-36 sm:px-8 sm:pt-44 pb-28">
      <header>
        <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-foreground">
          Reach us.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          One channel, kept live: our LinkedIn page. Announcements, events, and answers to questions
          all happen there.
        </p>
      </header>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <a
          href={linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue text-slate-950">
            <LinkedInIcon className="h-5 w-5" />
          </span>
          <span className="mt-5 block font-serif text-xl font-medium text-foreground">Follow the group</span>
          <span className="mt-1 block text-sm text-muted">Daily-ish: events, recaps, and member builds.</span>
        </a>

        <div className="rounded-lg border border-border bg-card p-7">
          <span className="block font-mono text-xs text-muted">where</span>
          <span className="mt-3 block text-sm font-medium text-foreground">
            UVCE, Bengaluru — operating under MARVEL
          </span>
          <span className="mt-5 block font-mono text-xs text-muted">who</span>
          <span className="mt-3 block text-sm font-medium text-foreground">
            Any student at UVCE who wants to build on AWS
          </span>
        </div>
      </div>
    </div>
  )
}
