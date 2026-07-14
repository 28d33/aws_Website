"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Heart, Users, Lightbulb, Globe } from "lucide-react"

const objectives = [
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Build hands-on expertise in AWS cloud services from foundational to advanced levels through structured learning paths.",
  },
  {
    icon: Lightbulb,
    title: "Hands-on Learning",
    description: "Learn by doing with labs, workshops, hackathons, and real-world cloud projects guided by experienced mentors.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Foster a supportive network where students collaborate, share knowledge, and grow together as cloud practitioners.",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Prepare for AWS certifications, build portfolio projects, and connect with industry professionals and internship opportunities.",
  },
  {
    icon: Heart,
    title: "Innovation",
    description: "Encourage creative problem-solving and experimentation with emerging cloud technologies like AI/ML and serverless.",
  },
  {
    icon: Globe,
    title: "Industry Connect",
    description: "Bridge the gap between academia and industry through guest sessions, mentorship programs, and corporate partnerships.",
  },
]

function Objectives() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <TextReveal text="Our Objectives" as="h2" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" />
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            We focus on six key pillars to create a holistic learning experience for every member.
          </p>
        </div>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj) => (
            <StaggerItem key={obj.title}>
              <ScaleReveal>
                <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                    <obj.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{obj.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{obj.description}                  </p>
                </CardContent>
              </Card>
              </ScaleReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export { Objectives }
