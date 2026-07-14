"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { ParallaxTilt } from "@/components/animations/parallax-tilt"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

function Faculty() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Faculty Advisor
            </h2>
            <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
              Guided by experienced faculty who bring academic rigor and industry perspective to our community.
            </p>
          </div>
        </FadeIn>
        <ScaleReveal delay={0.2}>
          <Card className="mt-12 p-8 text-center">
            <CardContent className="p-0">
              <ParallaxTilt>
                <Avatar
                  src="/images/team/placeholder-1.jpg"
                  alt="Dr. Arvind Sharma"
                  size="xl"
                  fallback="Dr. Arvind Sharma"
                  className="mx-auto"
                />
              </ParallaxTilt>
              <h3 className="mt-4 text-xl font-bold text-foreground">Dr. Arvind Sharma</h3>
              <p className="mt-1 text-sm text-muted">Faculty Advisor &bull; Professor of Computer Science</p>
              <div className="relative mt-6 mx-auto max-w-lg">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-blue/20" />
                <p className="text-base leading-7 text-muted italic pl-6">
                  The AWS Student Builder Group represents everything I love about teaching
                  &mdash; students taking initiative, collaborating across disciplines, and building
                  skills that will serve them for a lifetime. I am proud to guide this incredible
                  community on its journey.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScaleReveal>
      </div>
    </section>
  )
}

export { Faculty }
