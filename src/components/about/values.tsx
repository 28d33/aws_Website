"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, BookOpen, Shield, Heart, Star } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and exploration of emerging technologies to build solutions that make a difference.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, peer learning, and cross-disciplinary collaboration to achieve more together.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Continuous learning is at our core, from cloud fundamentals to advanced specializations and certifications.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold academic honesty, ethical practices, and respect for intellectual property in all our activities.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We foster an inclusive, supportive environment where every member feels welcomed, valued, and empowered.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for high standards in everything we do, from technical execution to event organization and mentorship.",
  },
]

function Values() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <TextReveal text="Core Values" as="h2" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" />
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            The principles that guide everything we do as a community.
          </p>
        </div>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((val) => (
            <StaggerItem key={val.title}>
              <MagneticCard>
                <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                    <val.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{val.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{val.description}                  </p>
                </CardContent>
              </Card>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export { Values }
