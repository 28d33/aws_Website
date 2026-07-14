import { Hero, GalleryGrid } from "@/components/gallery"

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <GalleryGrid />
    </div>
  )
}
