"use client"

import { useState, useMemo } from "react"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { FadeIn } from "@/components/animations/fade-in"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { Button } from "@/components/ui/button"
import { BlogCard } from "./blog-card"
import type { Blog } from "@/data/blogs"

const PER_PAGE = 6

interface BlogListProps {
  blogs: Blog[]
}

function BlogList({ blogs }: BlogListProps) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(blogs.length / PER_PAGE))
  const paginated = useMemo(() => {
    return blogs.slice(0, page * PER_PAGE)
  }, [blogs, page])

  const hasMore = paginated.length < blogs.length

  if (blogs.length === 0) {
    return (
      <FadeIn direction="up" className="py-16 text-center">
        <p className="text-muted">No blog posts found matching your filters.</p>
      </FadeIn>
    )
  }

  return (
    <div className="space-y-10">
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((blog) => (
          <StaggerItem key={blog.id}>
            <BlogCard blog={blog} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {hasMore && (
        <ScaleReveal className="text-center">
          <Button variant="outline" onClick={() => setPage((p) => p + 1)}>
            Load More Posts
          </Button>
        </ScaleReveal>
      )}
    </div>
  )
}

export { BlogList }
