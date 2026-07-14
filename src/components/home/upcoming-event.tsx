"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { events } from "@/data/events"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

function UpcomingEvent() {
  const event = events.find((e) => e.isUpcoming)

  if (!event) return null

  const eventTypeLabels: Record<string, string> = {
    workshop: "Workshop",
    bootcamp: "Bootcamp",
    hackathon: "Hackathon",
    webinar: "Webinar",
    meetup: "Meetup",
    speaker_session: "Speaker Session",
    ctf: "CTF Challenge",
    gameday: "Gameday",
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <ClipReveal>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-foreground tracking-tight">
              Upcoming <span className="italic text-orange font-normal">Event</span>
            </h2>
            <p className="mt-3 text-base text-muted font-light sm:text-lg">Don&apos;t miss out on our next big workshop or community gathering.</p>
          </ClipReveal>
        </div>
        <div>
          <ClipReveal delay={0.2}>
            <MagneticCard>
              <Card className="overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 relative min-h-[260px] bg-slate-950 flex flex-col items-center justify-center p-8 text-center border-b md:border-b-0 md:border-r border-border/40">
                    {/* Elegant mono date */}
                    <div className="font-mono text-7xl md:text-8xl font-bold text-blue leading-none">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted mt-4">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </div>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-between p-6 sm:p-8 md:p-10">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="border-orange/30 text-orange bg-orange/5 font-mono font-semibold uppercase text-[10px] tracking-wider rounded-full px-3 py-1">
                          {eventTypeLabels[event.type] ?? event.type}
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
                        {event.title}
                      </CardTitle>
                      <p className="text-muted font-light text-sm sm:text-base leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <div className="space-y-3 border-t border-border/40 pt-6 text-sm text-muted font-light">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-blue" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-blue" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-blue" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button variant="primary" size="lg" className="rounded-full gap-2 px-8 shadow-sm" asChild>
                        <a href={event.registrationLink ?? "#"} target="_blank" rel="noopener noreferrer">
                          Register Now <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </MagneticCard>
          </ClipReveal>
        </div>
      </div>
    </section>
  )
}

export { UpcomingEvent }
