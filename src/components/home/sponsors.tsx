"use client"

import { partners } from "@/data/partners"
import { Handshake } from "lucide-react"

function Sponsors() {
  if (partners.length === 0) return null

  const logos = [...partners, ...partners, ...partners]

  return (
    <section className="bg-background border-y border-border/40 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="h-5 w-5 text-blue-light" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-muted">Partnership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-foreground tracking-tight">
            Our <span className="italic text-blue-light font-normal">Sponsors & Partners</span>
          </h2>
          <p className="mt-3 text-base text-muted font-light sm:text-lg">Supported by leading organizations dedicated to student innovation.</p>
        </div>

        <div className="relative mt-12">
          {/* Elegant horizontal gradient mask overlay */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {logos.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex items-center justify-center shrink-0"
                >
                  <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-card border border-border/20 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue text-sm font-bold font-mono">
                      {partner.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Sponsors }
