"use client"

import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"

function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-card/20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ClipReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="h-5 w-5 text-blue-light" />
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground tracking-tight">Stay Updated</h2>
          </div>
          <p className="text-muted font-light mb-10 text-sm sm:text-base leading-relaxed">
            Subscribe to our newsletter for the latest events, resources, and community updates delivered straight to your inbox.
          </p>
        </ClipReveal>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-stretch"
          onSubmit={(e) => e.preventDefault()}
        >
          <ScaleReveal delay={0.2} className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full px-6 bg-background border-border/60 focus:border-blue/60 focus:ring-blue/10 h-12 w-full text-sm"
              required
            />
          </ScaleReveal>
          <ScaleReveal delay={0.3} className="shrink-0">
            <Button type="submit" variant="primary" className="rounded-full gap-2 px-8 h-12 shadow-sm w-full sm:w-auto">
              Subscribe <ArrowRight className="h-4 w-4" />
            </Button>
          </ScaleReveal>
        </form>
        <ScaleReveal delay={0.4}>
          <p className="mt-6 text-xs text-muted font-light">
            We value your privacy. Unsubscribe at any time.
          </p>
        </ScaleReveal>
      </div>
    </section>
  )
}

export { Newsletter }
