import { notFound } from "next/navigation"
import { events } from "@/data/events"
import { EventDetail } from "@/components/events/event-detail"

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)

  if (!event) notFound()

  return (
    <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-36 pb-24">
      <EventDetail event={event} />
    </div>
  )
}
