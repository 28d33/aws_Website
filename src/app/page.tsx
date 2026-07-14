import { Hero } from "@/components/home/hero"
import { Tagline } from "@/components/home/tagline"
import { Stats } from "@/components/home/stats"
import { UpcomingEvent } from "@/components/home/upcoming-event"
import { Announcements } from "@/components/home/announcements"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { LatestBlogs } from "@/components/home/latest-blogs"
import { CTA } from "@/components/home/cta"
import { Sponsors } from "@/components/home/sponsors"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tagline />
      <Stats />
      <UpcomingEvent />
      <Announcements />
      <FeaturedProjects />
      <LatestBlogs />
      <CTA />
      <Sponsors />
      <Newsletter />
    </>
  )
}
