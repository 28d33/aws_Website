"use client"

import { Calendar, User, BookOpen, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { ImageReveal } from "@/components/animations/image-reveal"
import { ClipReveal } from "@/components/animations/clip-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
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

const categoryColors: Record<BlogCategory, string> = {
  tutorial: "from-blue/30 to-blue-dark/30",
  event_recap: "from-blue/30 to-blue-dark/30",
  certification_guide: "from-blue/30 to-blue-dark/30",
  cloud: "from-blue/30 to-blue-dark/30",
  ai: "from-blue/30 to-blue-dark/30",
  devops: "from-blue/30 to-blue-dark/30",
  cybersecurity: "from-blue/30 to-blue-dark/30",
  member_story: "from-blue/30 to-blue-dark/30",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

interface BlogDetailProps {
  blog: Blog
  relatedPosts: Blog[]
}

function BlogDetail({ blog, relatedPosts }: BlogDetailProps) {
  const paragraphs = blog.content.split("\n").filter(Boolean)

  return (
    <div className="mx-auto max-w-4xl">
      <FadeIn direction="up">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </FadeIn>

      <ImageReveal
        src={blog.image}
        alt={blog.title}
        className={`mb-8 rounded-2xl bg-gradient-to-br ${categoryColors[blog.category]}`}
      />

      <FadeIn direction="up" delay={0.1}>
        <Badge variant="default">{categoryLabels[blog.category]}</Badge>
      </FadeIn>

      <TextReveal
        text={blog.title}
        as="h1"
        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      />

      <FadeIn direction="up" delay={0.2}>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-blue" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-blue" />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-blue" />
            <span>{blog.readTime} min read</span>
          </div>
        </div>
      </FadeIn>

      <article className="mt-8 space-y-5">
        {paragraphs.map((p, i) => (
          <ClipReveal key={i}>
            <p className="text-base leading-relaxed text-foreground">
              {p}
            </p>
          </ClipReveal>
        ))}
      </article>

      {relatedPosts.length > 0 && (
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Related Posts
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedPosts.map((rp) => (
                <MagneticCard key={rp.id}>
                  <Link
                    href={`/blog/${rp.slug}`}
                    className="group rounded-xl border border-border bg-background p-4 transition-all hover:shadow-md"
                  >
                    <Badge variant="secondary" className="mb-2">
                      {categoryLabels[rp.category]}
                    </Badge>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-blue transition-colors">
                      {rp.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </Link>
                </MagneticCard>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  )
}

export { BlogDetail }
