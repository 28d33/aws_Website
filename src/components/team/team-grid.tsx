"use client"

import { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { ImageReveal } from "@/components/animations/image-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Link, Code, MessageCircle, ArrowUpRight } from "lucide-react"
import { teamGroups } from "@/data/team"

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Link className="h-4 w-4" />,
  github: <Code className="h-4 w-4" />,
  twitter: <MessageCircle className="h-4 w-4" />,
}

function TeamGrid() {
  const tabNames = teamGroups.map((g) => g.name)
  const [activeTab, setActiveTab] = useState(tabNames[0])

  const activeGroup = teamGroups.find((g) => g.name === activeTab) ?? teamGroups[0]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
              Select a team to see the dedicated individuals making it all happen.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12">
          <Tabs defaultValue={tabNames[0]} value={activeTab} onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex h-auto flex-nowrap gap-1 rounded-lg bg-card p-1.5">
                {tabNames.map((name) => (
                  <TabsTrigger
                    key={name}
                    value={name}
                    className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
                  >
                    {name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {teamGroups.map((group) => (
              <TabsContent key={group.name} value={group.name}>
                <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.members.map((member) => (
                    <StaggerItem key={member.name}>
                      <MagneticCard>
                        <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          <CardContent className="flex flex-col items-center p-6 text-center">
                            <ImageReveal
                              src={member.image}
                              alt={member.name}
                              className="w-24 h-24 rounded-full border-2 border-border transition-colors duration-200 group-hover:border-blue"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
                          <Badge
                            variant="secondary"
                            className="mt-2"
                          >
                            {member.role}
                          </Badge>
                          <p className="mt-3 text-sm leading-6 text-muted line-clamp-3">
                            {member.bio}
                          </p>
                          {member.socials && (
                            <div className="mt-4 flex items-center gap-3">
                              {member.socials.linkedin && (
                                <a
                                  href={member.socials.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted transition-colors duration-200 hover:text-blue"
                                  aria-label={`${member.name} LinkedIn`}
                                >
                                  {socialIcons.linkedin}
                                </a>
                              )}
                              {member.socials.github && (
                                <a
                                  href={member.socials.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted transition-colors duration-200 hover:text-blue"
                                  aria-label={`${member.name} GitHub`}
                                >
                                  {socialIcons.github}
                                </a>
                              )}
                              {member.socials.twitter && (
                                <a
                                  href={member.socials.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted transition-colors duration-200 hover:text-blue"
                                  aria-label={`${member.name} Twitter`}
                                >
                                  {socialIcons.twitter}
                                </a>
                              )}
                              <a
                                href={member.socials.linkedin ?? member.socials.github ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted transition-colors duration-200 hover:text-blue"
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export { TeamGrid }
