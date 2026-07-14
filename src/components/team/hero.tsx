"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"

function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <FadeIn direction="up" delay={0.2}>
          <span className="inline-flex items-center rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-sm font-medium text-blue-light mb-6">
            Our Team
          </span>
        </FadeIn>
        <TextReveal
          text="Our Team"
          as="h1"
          delay={0.3}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        />
        <ScaleReveal delay={0.4}>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl max-w-3xl mx-auto">
            Meet the passionate individuals who drive our community forward, from faculty
            coordinators to team leads and dedicated members.
          </p>
        </ScaleReveal>
      </div>
    </section>
  )
}

export { Hero }
