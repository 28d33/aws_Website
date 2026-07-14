"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { TextReveal } from "@/components/animations/text-reveal"
import { Calendar, MapPin } from "lucide-react"

const milestones = [
  {
    year: "2022",
    title: "Founded",
    description:
      "A group of cloud enthusiasts came together to establish the AWS Student Builder Group, laying the foundation for a thriving community.",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "First Workshop",
    description:
      "Hosted our first AWS workshop with 50+ attendees, introducing students to cloud computing fundamentals and EC2 hands-on labs.",
    icon: MapPin,
  },
  {
    year: "2023",
    title: "Community Day",
    description:
      "Organized our first Community Day with 200+ participants, featuring tech talks, hands-on sessions, and networking opportunities.",
    icon: Calendar,
  },
  {
    year: "2024",
    title: "Certification Milestone",
    description:
      "Celebrated 100+ AWS certifications earned by club members, from Cloud Practitioner to Specialty certifications.",
    icon: Calendar,
  },
  {
    year: "2025",
    title: "Building the Future",
    description:
      "Launched multiple project initiatives, hackathons, and expanded to new focus areas including AI/ML, DevOps, and security.",
    icon: MapPin,
  },
]

function History() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <TextReveal
            text="Our Journey"
            as="h2"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          />
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            From a small group of enthusiasts to a thriving community of cloud builders.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line — desktop: centered, mobile: left-offset */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          <div className="absolute left-5 top-0 h-full w-px bg-border md:hidden" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              const Icon = milestone.icon
              return (
                <ClipReveal
                  key={milestone.title}
                  direction={isLeft ? "left" : "right"}
                  delay={index * 0.1}
                >
                  {/* ── Desktop layout ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                    {/* Left column */}
                    <div className={isLeft ? "text-right" : "invisible"}>
                      <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-sm font-semibold text-blue">
                        {milestone.year}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{milestone.description}</p>
                    </div>

                    {/* Center icon */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-background shadow-sm">
                      <Icon className="h-4 w-4 text-blue" />
                    </div>

                    {/* Right column */}
                    <div className={!isLeft ? "text-left" : "invisible"}>
                      <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-sm font-semibold text-blue">
                        {milestone.year}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{milestone.description}</p>
                    </div>
                  </div>

                  {/* ── Mobile layout ── */}
                  <div className="flex items-start gap-4 md:hidden pl-2">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-background shadow-sm">
                      <Icon className="h-4 w-4 text-blue" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-sm font-semibold text-blue">
                        {milestone.year}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{milestone.description}</p>
                    </div>
                  </div>
                </ClipReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export { History }
