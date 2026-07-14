"use client"

import { useState, useMemo } from "react"
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Calendar,
} from "lucide-react"
import { galleryItems } from "@/data/gallery"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ClipReveal } from "@/components/animations/clip-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { ImageReveal } from "@/components/animations/image-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Photos",
  "Videos",
  "Workshop",
  "Hackathon",
  "Community",
] as const

const categoryMap: Record<string, string> = {
  All: "all",
  Photos: "photos",
  Videos: "videos",
  Workshop: "workshop",
  Hackathon: "hackathon",
  Community: "community",
}

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems
    return galleryItems.filter((item) => item.category === categoryMap[activeCategory])
  }, [activeCategory])

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ClipReveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setLightboxIndex(null)
                }}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-blue text-white shadow-sm"
                    : "border border-border bg-card text-muted hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ClipReveal>

        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => {
            if (!open) setLightboxIndex(null)
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item, i) => (
              <ScaleReveal key={item.id} delay={i * 0.05} className="aspect-[4/3]">
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative h-full w-full overflow-hidden rounded-xl border border-border bg-card text-left"
                >
                  <ImageReveal src={item.image} alt={item.title} className="absolute inset-0 h-full w-full" />
                  {item.category === "videos" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue/80 shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-5 w-5 fill-white text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-sm font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-300">{item.date}</p>
                  </div>
                  <span className="absolute left-2 top-2 z-10">
                    <Badge
                      variant={
                        item.category === "videos"
                          ? "default"
                          : item.category === "workshop"
                            ? "success"
                            : "secondary"
                      }
                    >
                      {item.category}
                    </Badge>
                  </span>
                </button>
              </ScaleReveal>
            ))}
          </div>

          {lightboxItem && (
            <DialogContent className="max-w-4xl p-0" showCloseButton>
              <div className="relative">
                <div className="relative aspect-video overflow-hidden">
                  <ImageReveal src={lightboxItem.image} alt={lightboxItem.title} className="absolute inset-0 h-full w-full" />
                  {lightboxItem.category === "videos" && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue/80 shadow-lg">
                        <Play className="h-6 w-6 fill-white text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <DialogTitle>{lightboxItem.title}</DialogTitle>
                  <div className="mt-2 flex items-center gap-3">
                    <Badge
                      variant={
                        lightboxItem.category === "videos"
                          ? "default"
                          : lightboxItem.category === "workshop"
                            ? "success"
                            : "secondary"
                      }
                    >
                      {lightboxItem.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      {lightboxItem.date}
                    </span>
                  </div>
                </div>
                {filtered.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxIndex((prev) =>
                          prev !== null
                            ? prev === 0
                              ? filtered.length - 1
                              : prev - 1
                            : null,
                        )
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow-md transition-colors hover:bg-background"
                    >
                      <ChevronLeft className="h-5 w-5 text-foreground" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxIndex((prev) =>
                          prev !== null
                            ? prev === filtered.length - 1
                              ? 0
                              : prev + 1
                            : null,
                        )
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow-md transition-colors hover:bg-background"
                    >
                      <ChevronRight className="h-5 w-5 text-foreground" />
                    </button>
                  </>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>

        {filtered.length === 0 && (
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ImageIcon className="h-12 w-12 text-muted" />
              <p className="mt-4 text-lg text-muted">No items match this category.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export { GalleryGrid }
