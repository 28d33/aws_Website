import { Hero } from "@/components/team/hero"
import { TeamGrid } from "@/components/team/team-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team",
}

export default function TeamPage() {
  return (
    <>
      <Hero />
      <TeamGrid />
    </>
  )
}
