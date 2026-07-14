"use client"

import { ImageReveal } from "@/components/animations/image-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogs } from "@/data/blogs"
import { ArrowRight, Calendar, User } from "lucide-react"

const categoryLabels: Record<string, string> = {
  tutorial: "Tutorial",
  event_recap: "Event Recap",
  certification_guide: "Certification Guide",
  cloud: "Cloud",
  ai: "AI",
  devops: "DevOps",
  cybersecurity: "Cybersecurity",
  member_story: "Member Story",
}

function LatestBlogs() {
  const latest = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4)

  if (latest.length === 0) return null

  return (
    <section className="border-y border-border/40 bg-card/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-foreground tracking-tight">
            Latest <span className="italic text-blue-light font-normal">Stories & Insights</span>
          </h2>
          <p className="mt-3 text-base text-muted font-light sm:text-lg">Insights, tutorials, and stories from our student builders.</p>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latest.map((post) => (
            <StaggerItem key={post.id}>
              <MagneticCard>
                <Card className="flex flex-col h-full border-0 bg-background shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <ImageReveal src={post.image} alt={post.title} className="aspect-video" />
                  <CardHeader className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="border-blue-light/35 text-blue-light bg-blue-light/5 text-[9px] font-mono uppercase tracking-wider rounded-full px-2.5">
                        {categoryLabels[post.category] ?? post.category}
                      </Badge>
                    </div>
                    <CardTitle className="font-serif text-lg font-light text-foreground line-clamp-2 leading-snug">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-6 pb-6 pt-0">
                    <p className="text-sm text-muted font-light line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-4 border-t border-border/20 mt-auto pt-4">
                    <div className="flex items-center justify-between w-full text-[11px] font-mono text-muted">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-blue-light" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-blue-light" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 justify-start px-0 text-blue hover:text-blue-dark font-medium w-full" asChild>
                      <a href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn direction="up" className="mt-16 text-center">
          <Button variant="outline" className="rounded-full gap-2 px-8 border-blue/30 text-blue hover:bg-blue/5" asChild>
            <a href="/blog">
              View All Posts <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export { LatestBlogs }
