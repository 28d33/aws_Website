export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  stats: { label: string; value: number; suffix?: string }[]
  navLinks: { label: string; href: string }[]
  socialLinks: { label: string; href: string; icon: string }[]
}

export const siteConfig: SiteConfig = {
  name: "AWS Student Builder Group",
  description:
    "A community of cloud enthusiasts, builders, and innovators at our college. We empower students with AWS cloud skills through hands-on workshops, hackathons, and real-world projects.",
  url: "https://aws-sbg.example.edu",
  ogImage: "/images/og-image.jpg",
  stats: [
    { label: "Members", value: 500, suffix: "+" },
    { label: "Events", value: 50, suffix: "+" },
    { label: "Projects", value: 30, suffix: "+" },
    { label: "Certifications", value: 100, suffix: "+" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Certifications", href: "/certifications" },
    { label: "Gallery", href: "/gallery" },
    { label: "Achievements", href: "/achievements" },
    { label: "Membership", href: "/membership" },
    { label: "Community", href: "/community" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/aws-sbg", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/company/aws-sbg", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/aws_sbg", icon: "twitter" },
    { label: "YouTube", href: "https://youtube.com/@aws-sbg", icon: "youtube" },
    { label: "Instagram", href: "https://instagram.com/aws_sbg", icon: "instagram" },
    { label: "Discord", href: "https://discord.gg/aws-sbg", icon: "discord" },
  ],
}
