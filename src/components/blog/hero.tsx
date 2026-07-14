"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"

function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <TextReveal
          text="Blog"
          as="h1"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        />
        <ScaleReveal>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Tutorials, guides, event recaps, and stories from the AWS Student
            Builder Group community.
          </p>
        </ScaleReveal>
      </div>
    </section>
  )
}

export { BlogHero }
