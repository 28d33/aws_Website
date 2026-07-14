"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const guidelines = [
  "Be respectful and inclusive of all members regardless of background, experience level, or identity.",
  "Share knowledge freely and help fellow members grow through mentorship and collaboration.",
  "Adhere to academic integrity and properly attribute sources in all projects and content.",
  "Maintain a safe and harassment-free environment in all club activities and communication channels.",
  "Respect intellectual property rights and follow AWS Acceptable Use Policy in all cloud projects.",
  "Give constructive feedback and receive it with an open mind to foster continuous improvement.",
  "Act as an ambassador for the club and uphold its reputation in the wider community.",
]

function Guidelines() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <TextReveal text="Community Guidelines" as="h2" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" />
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            Our commitment to creating a positive and productive environment for all members.
          </p>
        </div>
        <StaggerContainer className="mt-12 space-y-4">
          {guidelines.map((guide, index) => (
            <StaggerItem key={index}>
              <ScaleReveal>
                <Card className="transition-shadow duration-200 hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-5">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <p className="text-base leading-7 text-muted">{guide}</p>
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

export { Guidelines }
