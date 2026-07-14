"use client"

import { FolderOpen } from "lucide-react"
import type { Project } from "@/data/projects"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { ProjectCard } from "./project-card"

function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <FolderOpen className="h-12 w-12 text-muted" />
        <p className="mt-4 text-lg text-muted">No projects match this filter.</p>
      </div>
    )
  }

  return (
    <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <StaggerItem key={i} delay={i * 0.05}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

export { ProjectGrid }
