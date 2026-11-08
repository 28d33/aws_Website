import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import { eventTypeLabels, formatShortDate } from "@/lib/format"
import type { Event } from "@/data/events"

interface EventDetailProps {
  event: Event
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
      <div>
        <Link
          href="/events"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-blue"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All events
        </Link>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          className="mt-8 aspect-[16/9] w-full rounded-lg border border-border object-cover"
        />

        <p className="mt-8 flex items-baseline gap-5 font-mono text-xs">
          <span className="text-muted">{formatShortDate(event.date)}</span>
          <span className="text-orange">{eventTypeLabels[event.type]}</span>
        </p>

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-light tracking-tight text-foreground text-balance">
          {event.title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{event.longDescription}</p>
      </div>

      <aside className="rounded-lg border border-border bg-card p-7 lg:sticky lg:top-24">
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="text-xs text-muted">Date</dt>
            <dd className="mt-1 font-medium text-foreground">{formatShortDate(event.date)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Time</dt>
            <dd className="mt-1 flex items-center gap-2 font-medium text-foreground">
              <Clock className="h-3.5 w-3.5 text-blue" />
              {event.time}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Venue</dt>
            <dd className="mt-1 flex items-center gap-2 font-medium text-foreground">
              <MapPin className="h-3.5 w-3.5 text-blue" />
              {event.location}
            </dd>
          </div>
        </dl>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted">
            Recordings and announcements go out on the group&apos;s LinkedIn page.
          </p>
          <a
            href="https://linkedin.com/company/aws-sbg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-light"
          >
            Follow the group
          </a>
        </div>
      </aside>
    </div>
  )
}

export { EventDetail }
