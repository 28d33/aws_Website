"use client"

import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { ImageReveal } from "@/components/animations/image-reveal"
import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import type { Event, EventType } from "@/data/events"

const eventTypeLabels: Record<EventType, string> = {
  workshop: "Workshop",
  bootcamp: "Bootcamp",
  hackathon: "Hackathon",
  webinar: "Webinar",
  meetup: "Meetup",
  speaker_session: "Speaker Session",
  ctf: "CTF Challenge",
  gameday: "Gameday",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

interface EventDetailProps {
  event: Event
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <FadeIn direction="up">
        <Link
          href="/events"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>
      </FadeIn>

      <ImageReveal
        src={event.image}
        alt={event.title}
        className="mb-8 rounded-2xl bg-gradient-to-br from-blue to-blue-dark"
      />

      <FadeIn direction="up" delay={0.1}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default" className="text-sm">
            {eventTypeLabels[event.type]}
          </Badge>
          {event.isUpcoming ? (
            <Badge variant="success">Upcoming</Badge>
          ) : (
            <Badge variant="secondary">Past Event</Badge>
          )}
        </div>
      </FadeIn>

      <TextReveal
        text={event.title}
        as="h1"
        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      />

      <FadeIn direction="up" delay={0.2}>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue" />
            <span>{event.location}</span>
          </div>
        </div>
      </FadeIn>

      <ClipReveal>
        <div className="mt-8">
          <p className="text-lg leading-relaxed text-foreground">{event.longDescription}</p>
        </div>
      </ClipReveal>

      {event.registrationLink && (
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                Register for this Event
              </a>
            </Button>
          </div>
        </FadeIn>
      )}

      {event.gallery && event.gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Gallery</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {event.gallery.map((img, i) => (
              <ScaleReveal key={i} delay={i * 0.1}>
                <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-card to-border">
                  <span className="text-xs text-muted">Photo {i + 1}</span>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { EventDetail }
