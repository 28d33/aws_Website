"use client"

import { useState, useMemo } from "react"
import { Award, Trophy, Medal, Star, Flag, Calendar } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { achievements } from "@/data/achievements"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { cn } from "@/lib/utils"

const filters = [
  "All",
  "Awards",
  "Hackathon Wins",
  "Competitions",
  "Certifications",
  "Milestones",
] as const

const filterMap: Record<string, string> = {
  All: "all",
  Awards: "award",
  "Hackathon Wins": "hackathon_win",
  Competitions: "competition",
  Certifications: "certification",
  Milestones: "milestone",
}

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="h-6 w-6 text-blue" />,
  hackathon_win: <Trophy className="h-6 w-6 text-blue" />,
  competition: <Medal className="h-6 w-6 text-blue" />,
  certification: <Star className="h-6 w-6 text-blue" />,
  milestone: <Flag className="h-6 w-6 text-blue" />,
}

function AchievementGrid() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    if (active === "All") return achievements
    return achievements.filter((a) => a.type === filterMap[active])
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

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <StaggerItem key={i} delay={i * 0.05}>
              <MagneticCard>
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10">
                    {iconMap[item.type]}
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardHeader>
              </Card>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Award className="h-12 w-12 text-muted" />
              <p className="mt-4 text-lg text-muted">No achievements match this filter.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export { AchievementGrid }
