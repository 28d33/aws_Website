"use client"

import Link from "next/link"
import { User, Calendar, BookOpen, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { ImageReveal } from "@/components/animations/image-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import type { Blog, BlogCategory } from "@/data/blogs"

const categoryLabels: Record<BlogCategory, string> = {
  tutorial: "Tutorial",
  event_recap: "Event Recap",
  certification_guide: "Certification Guide",
  cloud: "Cloud",
  ai: "AI",
  devops: "DevOps",
  cybersecurity: "Cybersecurity",
  member_story: "Member Story",
}

interface BlogCardProps {
  blog: Blog
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <MagneticCard>
      <Card className="flex h-full flex-col overflow-hidden">
        <ImageReveal
          src={blog.image}
          alt={blog.title}
          className="aspect-video bg-gradient-to-br from-blue/20 to-blue-dark/20"
        />
        <CardContent className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <Badge variant="default">
              {categoryLabels[blog.category]}
            </Badge>
          </div>
          <ScaleReveal>
            <h3 className="text-lg font-semibold leading-snug text-foreground line-clamp-2">
              {blog.title}
            </h3>
          </ScaleReveal>
          <p className="text-sm text-muted line-clamp-3">
            {blog.excerpt}
          </p>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-3 p-5 pt-0">
          <div className="flex items-center justify-between text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{blog.readTime} min read</span>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 px-0 text-blue hover:text-blue-dark" asChild>
              <Link href={`/blog/${blog.slug}`}>
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </MagneticCard>
  )
}

export { BlogCard }
