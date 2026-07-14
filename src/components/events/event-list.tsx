"use client"

import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { FadeIn } from "@/components/animations/fade-in"
import { EventCard } from "./event-card"
import type { Event } from "@/data/events"

interface EventListProps {
  events: Event[]
}

function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <FadeIn direction="up" className="py-16 text-center">
        <p className="text-muted">No events found matching your filters.</p>
      </FadeIn>
    )
  }

  return (
    <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <StaggerItem key={event.id}>
          <EventCard event={event} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

export { EventList }
