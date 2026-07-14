"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { ClipReveal } from "@/components/animations/clip-reveal"
import { TextReveal } from "@/components/animations/text-reveal"
import { siteConfig } from "@/data/site"
import { Users, Award, Calendar } from "lucide-react"

function Introduction() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <ClipReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Are
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-blue" />
              <TextReveal text={siteConfig.description} as="div" className="mt-6 text-base leading-7 text-muted" />
              <TextReveal
                text="We bring together students from diverse backgrounds — computer science, engineering, business, and design — to learn, build, and grow together. Whether you are taking your first steps into the cloud or preparing for advanced AWS certifications, our community provides the resources, mentorship, and hands-on experience you need to succeed."
                as="div"
                className="mt-4 text-base leading-7 text-muted"
              />
              <TextReveal
                text="Through workshops, hackathons, certification study groups, and industry talks, we create an environment where every member can develop practical skills and build a professional network that lasts beyond graduation."
                as="div"
                className="mt-4 text-base leading-7 text-muted"
              />
            </div>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-blue" />
                <div className="mt-3 text-3xl font-bold text-foreground">500+</div>
                <div className="mt-1 text-sm text-muted">Active Members</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Award className="mx-auto h-8 w-8 text-blue" />
                <div className="mt-3 text-3xl font-bold text-foreground">50+</div>
                <div className="mt-1 text-sm text-muted">Events Organized</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Calendar className="mx-auto h-8 w-8 text-blue" />
                <div className="mt-3 text-3xl font-bold text-foreground">100+</div>
                <div className="mt-1 text-sm text-muted">Certifications</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-blue" />
                <div className="mt-3 text-3xl font-bold text-foreground">30+</div>
                <div className="mt-1 text-sm text-muted">Projects Built</div>
              </div>
            </div>
          </FadeIn>
        </ClipReveal>
      </div>
    </section>
  )
}

export { Introduction }
