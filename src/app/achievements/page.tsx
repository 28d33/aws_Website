import { Hero, AchievementGrid, AchievementTimeline } from "@/components/achievements"

export default function AchievementsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <AchievementGrid />
      <AchievementTimeline />
    </div>
  )
}
