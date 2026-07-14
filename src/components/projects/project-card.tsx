"use client"

import { ExternalLink, GitFork } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { ImageReveal } from "@/components/animations/image-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import type { Project } from "@/data/projects"

const typeLabels: Record<string, string> = {
  featured: "Featured",
  open_source: "Open Source",
  community: "Community",
  hackathon: "Hackathon",
  research: "Research",
}

const typeVariants: Record<string, "default" | "secondary" | "outline" | "success"> = {
  featured: "default",
  open_source: "success",
  community: "secondary",
  hackathon: "outline",
  research: "secondary",
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <MagneticCard>
      <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <ImageReveal src={project.image} alt={project.title} className="h-full w-full" />
          <span className="absolute right-3 top-3 z-20">
            <Badge variant={typeVariants[project.type]}>{typeLabels[project.type]}</Badge>
          </span>
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <ScaleReveal key={tag}>
                <Badge variant="outline" className="text-xs">
                  {tag}
                </Badge>
              </ScaleReveal>
            ))}
          </div>
        {project.team && project.team.length > 0 && (
          <p className="mb-4 text-xs text-muted">Team: {project.team.join(", ")}</p>
        )}
        <div className="flex gap-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </Button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-1.5">
                <GitFork className="h-3.5 w-3.5" /> Code
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
    </MagneticCard>
  )
}

export { ProjectCard }
