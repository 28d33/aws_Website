import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MessageCircle, Globe, Link as LinkIcon, Code2, Video, Camera, Send, ExternalLink } from "lucide-react"
import Link from "next/link"

const platforms = [
  {
    icon: <MessageCircle className="h-8 w-8 text-blue" />,
    name: "Discord",
    description: "Our primary communication hub with dedicated channels for each team, project, and interest group. Get real-time help, collaborate on projects, and stay updated with club announcements.",
    link: "https://discord.gg/aws-sbg",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    icon: <Send className="h-8 w-8 text-blue" />,
    name: "WhatsApp",
    description: "Quick announcements, event reminders, and instant updates. Our WhatsApp broadcast channel ensures you never miss important club communications.",
    link: "https://wa.me/1234567890",
    color: "bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue" />,
    name: "Telegram",
    description: "Technical discussions, resource sharing, and in-depth conversations about cloud computing, certifications, and industry trends.",
    link: "https://t.me/aws-sbg",
    color: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    icon: <LinkIcon className="h-8 w-8 text-blue" />,
    name: "LinkedIn",
    description: "Professional networking, job postings, internship opportunities, and showcasing member achievements. Connect with alumni and industry professionals.",
    link: "https://linkedin.com/company/aws-sbg",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: <Code2 className="h-8 w-8 text-blue" />,
    name: "GitHub",
    description: "Open source projects, code repositories, and collaborative development. Contribute to club projects and build your portfolio with real-world code.",
    link: "https://github.com/aws-sbg",
    color: "bg-gray-200 dark:bg-gray-800",
  },
  {
    icon: <Camera className="h-8 w-8 text-blue" />,
    name: "Instagram",
    description: "Event highlights, behind-the-scenes content, member spotlights, and visual updates about club activities and achievements.",
    link: "https://instagram.com/aws_sbg",
    color: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    icon: <Video className="h-8 w-8 text-blue" />,
    name: "YouTube",
    description: "Workshop recordings, tutorial videos, guest speaker sessions, and certification preparation content available on demand.",
    link: "https://youtube.com/@aws-sbg",
    color: "bg-red-100 dark:bg-red-900/30",
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Community" }]} className="mb-6" />
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-blue" />
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                Join Our Community
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-muted">
              Connect with us across multiple platforms. Whether you prefer real-time chat, professional networking, or
              video content, find your space in our community.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <StaggerItem key={platform.name}>
                <MagneticCard>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-xl ${platform.color} transition-transform duration-300 group-hover:scale-110`}>
                      {platform.icon}
                    </div>
                    <CardTitle>{platform.name}</CardTitle>
                    <CardDescription className="mt-2">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Join
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                  </Card>
                </MagneticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
