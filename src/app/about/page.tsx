import { Hero } from "@/components/about/hero"
import { Introduction } from "@/components/about/introduction"
import { MissionVision } from "@/components/about/mission-vision"
import { Objectives } from "@/components/about/objectives"
import { History } from "@/components/about/history"
import { Faculty } from "@/components/about/faculty"
import { Values } from "@/components/about/values"
import { Guidelines } from "@/components/about/guidelines"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Introduction />
      <MissionVision />
      <Objectives />
      <History />
      <Faculty />
      <Values />
      <Guidelines />
    </>
  )
}
