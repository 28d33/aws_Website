
"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { ImageReveal } from "@/components/animations/image-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link, Code, MessageCircle, ArrowUpRight } from "lucide-react"
import { teamGroups } from "@/data/team"

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Link className="h-4 w-4" />,
  github: <Code className="h-4 w-4" />,
  twitter: <MessageCircle className="h-4 w-4" />,
}

function TeamGrid() {
  const coreTeam = teamGroups[0]

  if (!coreTeam) return null

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">

        <FadeIn direction="up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Core Team
            </h2>
            <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
              The people behind AWS Student Builder Group.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreTeam.members.map((member) => (
              <StaggerItem key={member.name}>
                <MagneticCard>
                  <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6 text-center">

                      <ImageReveal
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full border-2 border-border transition-colors duration-200 group-hover:border-blue"
                      />

                      <h3 className="mt-4 text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>

                      <Badge variant="secondary" className="mt-2">
                        {member.role}
                      </Badge>

                      <p className="mt-3 text-sm leading-6 text-muted line-clamp-3">
                        {member.bio}
                      </p>

                      {member.socials && (
                        <div className="mt-4 flex items-center gap-3">

                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                              className="text-muted hover:text-blue"
                              aria-label={`${member.name} LinkedIn`}>
                              {socialIcons.linkedin}
                            </a>
                          )}

                          {member.socials.github && (
                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                              className="text-muted hover:text-blue"
                              aria-label={`${member.name} GitHub`}>
                              {socialIcons.github}
                            </a>
                          )}

                          {member.socials.twitter && (
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                              className="text-muted hover:text-blue"
                              aria-label={`${member.name} Twitter`}>
                              {socialIcons.twitter}
                            </a>
                          )}

                          <a
                            href={member.socials.linkedin ?? member.socials.github ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-blue"
                            aria-label={`${member.name} profile`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>

                        </div>
                      )}

                    </CardContent>
                  </Card>
                </MagneticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  )
}

export { TeamGrid }
