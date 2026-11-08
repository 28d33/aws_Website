import { Hero } from "@/components/home/hero"
import { EventLog } from "@/components/events/event-log"
import { TeamStrip } from "@/components/home/team-strip"
import { JoinStrip } from "@/components/home/join-strip"
import { events } from "@/data/events"

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 border-t border-border/70">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
            Five events, one log.
          </h2>
          <p className="font-mono text-xs text-muted">builds so far — newest last</p>
        </div>
        <div className="mt-10">
          <EventLog events={events} />
        </div>
      </section>
      <TeamStrip />
      <JoinStrip />
    </>
  )
}
