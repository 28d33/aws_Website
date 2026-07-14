"use client"

import { useState, useMemo } from "react"
import { events } from "@/data/events"
import { EventsHero } from "@/components/events/hero"
import { EventFilters } from "@/components/events/event-filters"
import { EventList } from "@/components/events/event-list"
import { EventCalendar } from "@/components/events/event-calendar"

export default function EventsPage() {
  const [tab, setTab] = useState("upcoming")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const upcoming = useMemo(() => events.filter((e) => e.isUpcoming), [])
  const past = useMemo(() => events.filter((e) => !e.isUpcoming), [])

  const sourceEvents = tab === "upcoming" ? upcoming : past

  const filtered = useMemo(() => {
    return sourceEvents.filter((e) => {
      if (typeFilter !== "all" && e.type !== typeFilter) return false
      if (searchQuery && !e.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [sourceEvents, typeFilter, searchQuery])

  return (
    <div>
      <EventsHero />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <EventFilters
              tab={tab}
              onTabChange={setTab}
              typeFilter={typeFilter}
              onTypeFilterChange={setTypeFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className="mt-6">
              <EventList events={filtered} />
            </div>
          </div>
          <div className="lg:col-span-1">
            <EventCalendar events={events} />
          </div>
        </div>
      </section>
    </div>
  )
}
