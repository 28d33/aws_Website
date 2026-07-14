"use client"

import { useState, useMemo } from "react"
import {
  Search,
  ExternalLink,
  Cloud,
  Server,
  Code,
  Shield,
  Brain,
  Terminal,
  BookOpen,
} from "lucide-react"
import { resourceCategories } from "@/data/resources"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { FadeIn } from "@/components/animations/fade-in"

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="h-4 w-4 text-blue" />,
  server: <Server className="h-4 w-4 text-blue" />,
  code: <Code className="h-4 w-4 text-blue" />,
  shield: <Shield className="h-4 w-4 text-blue" />,
  brain: <Brain className="h-4 w-4 text-blue" />,
  terminal: <Terminal className="h-4 w-4 text-blue" />,
}

const badgeVariant: Record<string, "default" | "secondary" | "outline" | "success"> = {
  guide: "default",
  video: "secondary",
  article: "outline",
  course: "success",
  tool: "default",
}

function ResourceAccordion() {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    if (!search.trim()) return resourceCategories
    const q = search.toLowerCase()
    return resourceCategories
      .map((cat) => ({
        ...cat,
        resources: cat.resources.filter(
          (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.resources.length > 0)
  }, [search])

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <FadeIn direction="up">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </FadeIn>

          <Accordion type="multiple" defaultValue={filtered.map((c) => c.name)}>
            {filtered.map((cat, i) => (
              <ScaleReveal key={cat.name} delay={i * 0.1}>
                <AccordionItem value={cat.name}>
                <AccordionTrigger value={cat.name} className="text-base font-medium">
                  <span className="flex items-center gap-2">
                    {iconMap[cat.icon] ?? null}
                    {cat.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent value={cat.name}>
                  <div className="space-y-3 pt-2">
                    {cat.resources.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-card"
                      >
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-medium text-foreground">{r.title}</h4>
                          <p className="mt-1 text-sm text-muted">{r.description}</p>
                          <Badge variant={badgeVariant[r.type]} className="mt-2">
                            {r.type}
                          </Badge>
                        </div>
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0"
                        >
                          <Button variant="outline" size="sm" className="gap-1.5">
                            Open <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </ScaleReveal>
          ))}
          </Accordion>

        {filtered.length === 0 && (
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <BookOpen className="h-12 w-12 text-muted" />
              <p className="mt-4 text-lg text-muted">
                No resources found. Try a different search term.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export { ResourceAccordion }
