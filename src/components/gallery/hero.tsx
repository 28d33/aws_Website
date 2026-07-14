"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <Breadcrumbs items={[{ label: "Gallery" }]} className="mb-8" />
        <TextReveal
          text="Gallery"
          as="h1"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        />
        <ScaleReveal delay={0.3}>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Moments captured from our events and activities
          </p>
        </ScaleReveal>
      </div>
    </section>
  )
}

export { Hero }
