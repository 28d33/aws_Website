"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className="rounded-3xl border border-blue/20 bg-card p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, var(--blue) 0%, transparent 60%), radial-gradient(circle at 70% 50%, var(--orange) 0%, transparent 60%)"
            }}
          />
          <ClipReveal>
            <ScaleReveal delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
                Ready to Start Your <span className="italic text-orange font-normal">Cloud Journey</span>?
              </h2>
              <p className="mt-6 text-base text-muted max-w-2xl mx-auto font-light sm:text-lg">
                Join our community of student builders and take the first step toward becoming an AWS-certified professional.
              </p>
              <div className="mt-10">
                <Button variant="primary" size="lg" className="rounded-full gap-2 px-8 shadow-lg">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </ScaleReveal>
          </ClipReveal>
        </div>
      </div>
    </section>
  )
}

export { CTA }
