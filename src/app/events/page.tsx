"use client"

import { events } from "@/data/events"
import { EventLog } from "@/components/events/event-log"

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-36 sm:px-8 sm:pt-44 pb-24">
      <header>
        <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-foreground">
          Events.
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          Workshops, talks, and a hackathon — every build recorded, newest last.
        </p>
      </header>

      <div className="mt-12">
        <EventLog events={events} />
      </div>
    </div>
  )
}
