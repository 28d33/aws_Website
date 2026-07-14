import { notFound } from "next/navigation"
import { events } from "@/data/events"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
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
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />
      <div className="mt-8">
        <EventDetail event={event} />
      </div>
    </div>
  )
}
