import { notFound } from "next/navigation"
import { blogs } from "@/data/blogs"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { BlogDetail } from "@/components/blog/blog-detail"

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) notFound()

  const relatedPosts = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />
      <div className="mt-8">
        <BlogDetail blog={blog} relatedPosts={relatedPosts} />
      </div>
    </div>
  )
}
