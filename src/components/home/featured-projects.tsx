"use client"

import { ImageReveal } from "@/components/animations/image-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { ArrowRight, ExternalLink, Code2 } from "lucide-react"

function FeaturedProjects() {
  const featured = projects.filter((p) => p.type === "featured").slice(0, 4)

  if (featured.length === 0) return null

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-foreground tracking-tight">
            Featured <span className="italic text-blue-light font-normal">Projects</span>
          </h2>
          <p className="mt-3 text-base text-muted font-light sm:text-lg">Showcasing the best community-built cloud solutions.</p>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featured.map((project) => (
            <StaggerItem key={project.title}>
              <MagneticCard>
                <Card className="flex flex-col h-full border-0 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <ImageReveal src={project.image} alt={project.title} className="aspect-video" />
                  <CardHeader className="p-6">
                    <CardTitle className="font-serif text-xl font-light text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-6 pb-6 space-y-4">
                    <p className="text-sm text-muted font-light line-clamp-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="border-blue/15 text-blue/80 bg-blue/5 text-[9px] font-mono uppercase tracking-wider rounded-full px-2.5 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="border-blue/15 text-blue/80 bg-blue/5 text-[9px] font-mono uppercase tracking-wider rounded-full px-2.5 py-0.5">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 gap-3 border-t border-border/20 mt-auto pt-4">
                    {project.link && (
                      <Button variant="outline" size="sm" className="gap-1.5 rounded-full border-blue/20 text-blue hover:bg-blue/5 text-xs" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-muted hover:text-foreground text-xs" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Code2 className="h-3 w-3" /> Source
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn direction="up" className="mt-16 text-center">
          <Button variant="outline" className="rounded-full gap-2 px-8 border-blue/30 text-blue hover:bg-blue/5" asChild>
            <a href="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export { FeaturedProjects }
