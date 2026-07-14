export interface GalleryItem {
  id: string
  title: string
  image: string
  category: "photos" | "videos" | "workshop" | "hackathon" | "community"
  date: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "AWS Community Day 2026 Group Photo",
    image: "/images/gallery/community-day-group.jpg",
    category: "photos",
    date: "2026-03-20",
  },
  {
    id: "2",
    title: "Cloud Practitioner Bootcamp Session",
    image: "/images/gallery/bootcamp-session.jpg",
    category: "workshop",
    date: "2026-01-15",
  },
  {
    id: "3",
    title: "Serverless Hackathon Coding Sprint",
    image: "/images/gallery/hackathon-coding.jpg",
    category: "hackathon",
    date: "2025-09-05",
  },
  {
    id: "4",
    title: "Career Talk with AWS Leaders",
    image: "/images/gallery/career-talk-panel.jpg",
    category: "photos",
    date: "2026-02-10",
  },
  {
    id: "5",
    title: "DeepRacer Gameday Highlights",
    image: "/images/gallery/deepracer-race.jpg",
    category: "videos",
    date: "2025-08-22",
  },
  {
    id: "6",
    title: "CTF Competition Winners",
    image: "/images/gallery/ctf-winners.jpg",
    category: "photos",
    date: "2026-04-05",
  },
  {
    id: "7",
    title: "GenAI Workshop Hands-On Lab",
    image: "/images/gallery/genai-workshop.jpg",
    category: "workshop",
    date: "2025-07-25",
  },
  {
    id: "8",
    title: "Club Orientation Day",
    image: "/images/gallery/orientation-day.jpg",
    category: "community",
    date: "2025-09-10",
  },
  {
    id: "9",
    title: "DevOps Bootcamp Live Coding",
    image: "/images/gallery/devops-livecode.jpg",
    category: "workshop",
    date: "2026-04-18",
  },
  {
    id: "10",
    title: "Women in Cloud Panel Discussion",
    image: "/images/gallery/women-in-cloud.jpg",
    category: "community",
    date: "2026-03-08",
  },
  {
    id: "11",
    title: "Hackathon Project Demo",
    image: "/images/gallery/hackathon-demo.jpg",
    category: "hackathon",
    date: "2025-09-06",
  },
  {
    id: "12",
    title: "AWS Certification Celebration",
    image: "/images/gallery/certification-party.jpg",
    category: "community",
    date: "2026-05-10",
  },
  {
    id: "13",
    title: "Workshop on S3 and Lambda",
    image: "/images/gallery/s3-lambda-workshop.jpg",
    category: "workshop",
    date: "2026-06-10",
  },
  {
    id: "14",
    title: "Team Outing and Bonding",
    image: "/images/gallery/team-outing.jpg",
    category: "photos",
    date: "2026-04-25",
  },
  {
    id: "15",
    title: "Cloud Summit Keynote Recording",
    image: "/images/gallery/cloud-summit-keynote.jpg",
    category: "videos",
    date: "2026-03-20",
  },
  {
    id: "16",
    title: "Freshers Welcome Event",
    image: "/images/gallery/freshers-welcome.jpg",
    category: "community",
    date: "2025-08-15",
  },
]
