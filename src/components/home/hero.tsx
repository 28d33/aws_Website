"use client"

import { motion } from "framer-motion"
import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      {/* Decorative clean radial glows */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, var(--blue) 0%, transparent 60%), radial-gradient(circle at 85% 80%, var(--orange) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center py-20">
        <FadeIn direction="up" delay={0.2}>
          <span className="inline-flex items-center rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider text-blue mb-8">
            Student Builder Community
          </span>
        </FadeIn>

        <motion.h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-foreground font-light leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="italic text-blue font-normal">AWS Student</span>
          <br />
          <span className="text-orange font-medium animate-pulse">Builder Group</span>
        </motion.h1>

        <TextReveal
          text="Empowering the Next Generation of Cloud Innovators"
          as="div"
          delay={0.4}
          className="text-lg leading-relaxed text-muted max-w-2xl mx-auto font-light sm:text-xl md:text-2xl"
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <ScaleReveal delay={0.5}>
            <MagneticButton>
              <Button variant="primary" size="lg" className="rounded-full gap-2 px-8 shadow-sm">
                Join Us <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticButton>
          </ScaleReveal>
          <ScaleReveal delay={0.6}>
            <Button variant="outline" size="lg" className="rounded-full gap-2 px-8 border-blue/30 text-blue hover:bg-blue/5">
              Explore Events
            </Button>
          </ScaleReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70">
        <ChevronDown className="h-6 w-6 text-muted" />
      </div>
    </section>
  )
}

export { Hero }
