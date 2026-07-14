"use client"

import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ClipReveal } from "@/components/animations/clip-reveal"
import type { Event } from "@/data/events"

interface EventCalendarProps {
  events: Event[]
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function EventCalendar({ events }: EventCalendarProps) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const eventDates = useMemo(() => {
    const map = new Map<string, Event[]>()
    events.forEach((e) => {
      const d = e.date
      if (!map.has(d)) map.set(d, [])
      map.get(d)!.push(e)
    })
    return map
  }, [events])

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()

  const days = useMemo(() => {
    const cells: (number | null)[] = []
    for (let i = 0; i < firstDayOfWeek; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(d)
    return cells
  }, [firstDayOfWeek, daysInMonth])

  const dateKey = (day: number) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear((y) => y - 1); setViewMonth(11) }
    else setViewMonth((m) => m - 1)
    setSelectedDate(null)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear((y) => y + 1); setViewMonth(0) }
    else setViewMonth((m) => m + 1)
    setSelectedDate(null)
  }

  const eventsOnSelected = selectedDate ? eventDates.get(selectedDate) ?? [] : []

  return (
    <ClipReveal>
      <div className="rounded-xl border border-border bg-background p-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={prevMonth}
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-foreground">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button
            onClick={nextMonth}
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-xs font-medium text-muted">
          {DAYS.map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 text-center text-sm">
          {days.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} />
            const key = dateKey(day)
            const hasEvent = eventDates.has(key)
            const isSelected = selectedDate === key
            const isToday =
              day === today.getDate() &&
              viewMonth === today.getMonth() &&
              viewYear === today.getFullYear()

            return (
              <button
                key={key}
                onClick={() => setSelectedDate(isSelected ? null : key)}
                className={cn(
                  "relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                  isSelected && "bg-blue text-white",
                  !isSelected && isToday && "border border-blue text-blue",
                  !isSelected && !isToday && "text-foreground hover:bg-card",
                )}
              >
                {day}
                {hasEvent && (
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                      isSelected ? "bg-white" : "bg-blue",
                    )}
                  />
                )}
              </button>
            )
          })}
        </div>

        {selectedDate && (
          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <p className="text-xs font-medium text-muted">
              Events on {selectedDate}
            </p>
            {eventsOnSelected.length === 0 ? (
              <p className="text-xs text-muted">No events this day</p>
            ) : (
              eventsOnSelected.map((e) => (
                <a
                  key={e.id}
                  href={`/events/${e.slug}`}
                  className="block rounded-md bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-blue/10"
                >
                  {e.title}
                </a>
              ))
            )}
          </div>
        )}
      </div>
    </ClipReveal>
  )
}

export { EventCalendar }
