"use client"

import { useState, useMemo } from "react"
import { projects } from "@/data/projects"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"
import { ProjectGrid } from "./project-grid"

const filters = ["All", "Featured", "Open Source", "Community", "Hackathon", "Research"] as const

const filterMap: Record<string, string> = {
  All: "all",
  Featured: "featured",
  "Open Source": "open_source",
  Community: "community",
  Hackathon: "hackathon",
  Research: "research",
}

function ProjectFilters() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    if (active === "All") return projects
    return projects.filter((p) => p.type === filterMap[active])
  }, [active])

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn direction="up">
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  active === f
                    ? "bg-blue text-white shadow-sm"
                    : "border border-border bg-card text-muted hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>
        <ProjectGrid projects={filtered} />
      </div>
    </section>
  )
}

export { ProjectFilters }
