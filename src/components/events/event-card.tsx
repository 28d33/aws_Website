"use client"

import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { ImageReveal } from "@/components/animations/image-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { cn } from "@/lib/utils"
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
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

interface EventCardProps {
  event: Event
}

function EventCard({ event }: EventCardProps) {
  return (
    <MagneticCard>
      <Card className="flex h-full flex-col overflow-hidden">
        <ImageReveal
          src={event.image}
          alt={event.title}
          className={cn(
            "aspect-video bg-gradient-to-br",
            event.isUpcoming ? "from-blue to-blue-dark" : "from-blue/20 to-blue-dark/20",
          )}
        />
        <CardContent className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Badge variant={event.isUpcoming ? "default" : "secondary"}>
              {eventTypeLabels[event.type]}
            </Badge>
            {event.isUpcoming && (
              <Badge variant="success">Upcoming</Badge>
            )}
          </div>
          <ScaleReveal>
            <h3 className="text-lg font-semibold leading-snug text-foreground line-clamp-2">
              {event.title}
            </h3>
          </ScaleReveal>
          <p className="text-sm text-muted line-clamp-2">
            {event.description}
          </p>
          <div className="mt-auto space-y-1.5 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-blue" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-blue" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-blue" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button variant="ghost" size="sm" className="gap-1 px-0 text-blue hover:text-blue-dark" asChild>
            <Link href={`/events/${event.slug}`}>
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </MagneticCard>
  )
}

export { EventCard }
