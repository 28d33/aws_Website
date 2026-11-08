import type { EventType } from "@/data/events"

export const eventTypeLabels: Record<EventType, string> = {
  workshop: "workshop",
  bootcamp: "bootcamp",
  hackathon: "hackathon",
  webinar: "webinar",
  meetup: "meetup",
  speaker_session: "talk",
  ctf: "ctf",
  gameday: "gameday",
}

export function formatShortDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}
