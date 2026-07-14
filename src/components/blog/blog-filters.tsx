"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"
import type { BlogCategory } from "@/data/blogs"

const categories: { value: BlogCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "tutorial", label: "Tutorials" },
  { value: "event_recap", label: "Event Recaps" },
  { value: "certification_guide", label: "Certification Guides" },
  { value: "cloud", label: "Cloud" },
  { value: "ai", label: "AI" },
  { value: "devops", label: "DevOps" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "member_story", label: "Member Stories" },
]

interface BlogFiltersProps {
  category: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

function BlogFilters({ category, onCategoryChange, searchQuery, onSearchChange }: BlogFiltersProps) {
  return (
    <div className="space-y-6">
      <FadeIn direction="up" delay={0.1}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Badge
                key={c.value}
                variant={category === c.value ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer transition-all",
                  category !== c.value && "hover:border-blue/30 hover:text-blue",
                )}
                onClick={() => onCategoryChange(c.value)}
              >
                {c.label}
              </Badge>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export { BlogFilters }
