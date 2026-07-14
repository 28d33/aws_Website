"use client"

import { Search } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"
import type { EventType } from "@/data/events"

const eventTypes: { value: EventType | "all"; label: string }[] = [
  { value: "all", label: "All Types" },
  { value: "workshop", label: "Workshop" },
  { value: "bootcamp", label: "Bootcamp" },
  { value: "hackathon", label: "Hackathon" },
  { value: "webinar", label: "Webinar" },
  { value: "meetup", label: "Meetup" },
  { value: "speaker_session", label: "Speaker" },
  { value: "ctf", label: "CTF" },
  { value: "gameday", label: "Gameday" },
]

interface EventFiltersProps {
  tab: string
  onTabChange: (tab: string) => void
  typeFilter: string
  onTypeFilterChange: (type: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

function EventFilters({
  tab,
  onTabChange,
  typeFilter,
  onTypeFilterChange,
  searchQuery,
  onSearchChange,
}: EventFiltersProps) {
  return (
    <div className="space-y-6">
      <FadeIn direction="up" delay={0.1}>
        <Tabs defaultValue="upcoming" value={tab} onValueChange={onTabChange} className="w-full">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
        </Tabs>
      </FadeIn>

      <FadeIn direction="up" delay={0.15}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((t) => (
              <Badge
                key={t.value}
                variant={typeFilter === t.value ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer transition-all",
                  typeFilter !== t.value && "hover:border-blue/30 hover:text-blue",
                )}
                onClick={() => onTypeFilterChange(t.value)}
              >
                {t.label}
              </Badge>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export { EventFilters }
