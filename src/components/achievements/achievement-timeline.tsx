"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { Award, Trophy, Medal, Star, Flag, Calendar } from "lucide-react"
import { achievements } from "@/data/achievements"

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="h-5 w-5 text-blue" />,
  hackathon_win: <Trophy className="h-5 w-5 text-blue" />,
  competition: <Medal className="h-5 w-5 text-blue" />,
  certification: <Star className="h-5 w-5 text-blue" />,
  milestone: <Flag className="h-5 w-5 text-blue" />,
}

function AchievementTimeline() {
  const sorted = [...achievements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border" />
          {sorted.map((item, i) => (
            <ClipReveal
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
              className="relative pb-12 pl-16 last:pb-0"
            >
              <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 border-white bg-blue shadow-sm" />
              <div className="absolute left-6 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue/10">
                {iconMap[item.type]}
              </div>
              <div className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AchievementTimeline }
