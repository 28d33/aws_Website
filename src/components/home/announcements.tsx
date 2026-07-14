"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { Badge } from "@/components/ui/badge"
import { announcements } from "@/data/announcements"

const accentColors: Record<string, string> = {
  info: "bg-blue",
  warning: "bg-blue-light",
  success: "bg-emerald-600",
}

const typeLabels: Record<string, string> = {
  info: "General",
  warning: "Important",
  success: "New Milestone",
}

function Announcements() {
  if (announcements.length === 0) return null

  const sorted = [...announcements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <section className="border-y border-border/40 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <ClipReveal>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-foreground tracking-tight">
              Latest <span className="italic text-blue-light font-normal">Announcements</span>
            </h2>
            <p className="mt-3 text-base text-muted font-light sm:text-lg">Key updates and announcements from the core team.</p>
          </ClipReveal>
        </div>
        <div className="space-y-6">
          {sorted.map((item, i) => (
            <ScaleReveal key={item.title} delay={i * 0.1}>
              <div className="rounded-xl bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif text-xl font-light text-foreground">{item.title}</h3>
                      <Badge variant="outline" className="border-blue-light/35 text-blue-light bg-blue-light/5 text-[9px] font-mono uppercase tracking-wider rounded-full px-3">
                        {typeLabels[item.type] ?? item.type}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-muted font-light leading-relaxed max-w-4xl">{item.content}</p>
                  </div>
                  <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end gap-2">
                    {/* Small colored indicator dot instead of thick bar */}
                    <span className={`h-2.5 w-2.5 rounded-full ${accentColors[item.type] ?? "bg-blue"}`} />
                    <time className="text-xs font-mono text-muted whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Announcements }
