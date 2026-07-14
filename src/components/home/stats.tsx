"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { CountUp } from "@/components/animations/count-up"
import { siteConfig } from "@/data/site"

function Stats() {
  return (
    <section className="border-y border-border/40 bg-card/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <ClipReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12">
            {siteConfig.stats.map((stat, i) => (
              <ScaleReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="font-mono text-5xl font-bold text-blue md:text-6xl lg:text-7xl transition-transform duration-300 group-hover:scale-105">
                    <CountUp from={0} to={stat.value} suffix={stat.suffix ?? ""} duration={2} />
                  </div>
                  <div className="mt-4 text-[10px] font-mono font-semibold text-muted uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </ClipReveal>
      </div>
    </section>
  )
}

export { Stats }
