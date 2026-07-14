"use client"

import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

function MissionVision() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <StaggerItem>
            <MagneticCard>
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Target className="h-6 w-6 text-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    Empowering students with cloud computing skills through hands-on learning,
                    mentorship, and real-world projects.
                  </p>
                </CardContent>
              </Card>
            </MagneticCard>
          </StaggerItem>
          <StaggerItem>
            <MagneticCard>
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Eye className="h-6 w-6 text-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    To build a vibrant cloud community that nurtures the next generation of AWS
                    builders and innovators.
                  </p>
                </CardContent>
              </Card>
            </MagneticCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

export { MissionVision }
