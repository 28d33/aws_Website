"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { siteConfig } from "@/data/site"

function Tagline() {
  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Giant gold quote mark */}
        <span className="font-serif text-8xl md:text-9xl text-blue-light/10 absolute -top-6 left-1/2 -translate-x-1/2 select-none">
          &ldquo;
        </span>
        
        <TextReveal
          text={siteConfig.description}
          as="div"
          className="font-serif text-2xl leading-relaxed text-foreground sm:text-3xl md:text-4xl font-light italic relative z-10"
        />
        
        <div className="mt-8 h-1 w-12 bg-blue-light/40 mx-auto rounded-full" />
      </div>
    </section>
  )
}

export { Tagline }
