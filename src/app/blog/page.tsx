"use client"

import { useState, useMemo } from "react"
import { blogs } from "@/data/blogs"
import { BlogHero } from "@/components/blog/hero"
import { BlogFilters } from "@/components/blog/blog-filters"
import { BlogList } from "@/components/blog/blog-list"

export default function BlogPage() {
  const [category, setCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const sorted = useMemo(
    () => [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  )

  const filtered = useMemo(() => {
    return sorted.filter((b) => {
      if (category !== "all" && b.category !== category) return false
      if (searchQuery && !b.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [sorted, category, searchQuery])

  return (
    <div>
      <BlogHero />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <BlogFilters
          category={category}
          onCategoryChange={setCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <div className="mt-6">
          <BlogList blogs={filtered} />
        </div>
      </section>
    </div>
  )
}
