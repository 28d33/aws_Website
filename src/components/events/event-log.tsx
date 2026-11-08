"use client"

import Link from "next/link"
import type { Event } from "@/data/events"
import { eventTypeLabels, formatShortDate } from "@/lib/format"

/**
 * The event log — one chronology of builds, not a card grid.
 * Columns are real data: date, type, title, location.
 */
function EventLog({ events }: { events: Event[] }) {
  return (
    <ul className="border-t border-border/70">
      {events.map((event) => (
        <li key={event.id} className="border-b border-border/70">
          <Link
            href={`/events/${event.slug}`}
            className="group relative block px-2 py-5 transition-colors hover:bg-card sm:px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
          >
            {/* hover signal — the orange bar, the only animation */}
            <span
              className="absolute left-0 top-1/2 h-[calc(100%-1.6rem)] w-[3px] -translate-y-1/2 origin-center scale-y-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-y-100"
              aria-hidden="true"
            />

            {/* desktop: aligned columns */}
            <span className="hidden sm:grid sm:grid-cols-[6.5rem_8rem_1fr_auto] sm:items-baseline sm:gap-x-6">
              <span className="font-mono text-xs text-muted">{formatShortDate(event.date)}</span>
              <span className="font-mono text-xs text-orange">{eventTypeLabels[event.type]}</span>
              <span className="font-serif text-xl font-medium text-foreground transition-colors group-hover:text-blue">
                {event.title}
              </span>
              <span className="text-right font-mono text-xs text-muted">{event.location}</span>
            </span>

            {/* mobile: stacked lines */}
            <span className="block sm:hidden">
              <span className="flex flex-wrap items-baseline gap-x-4">
                <span className="font-mono text-xs text-muted">{formatShortDate(event.date)}</span>
                <span className="font-mono text-xs text-orange">{eventTypeLabels[event.type]}</span>
              </span>
              <span className="mt-1 block font-serif text-lg font-medium text-foreground transition-colors group-hover:text-blue">
                {event.title}
              </span>
              <span className="mt-0.5 block font-mono text-xs text-muted">{event.location}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { EventLog }
