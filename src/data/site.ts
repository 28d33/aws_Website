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
    "The AWS Student Builder Group at MARVEL, UVCE — a community of 400+ student builders learning cloud and building on AWS together.",
  url: "https://aws-sbg.example.edu",
  ogImage: "/images/og-image.jpg",
  stats: [
    { label: "Members", value: 400, suffix: "+" },
    { label: "Events", value: 5 },
    { label: "Core Team", value: 7 },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/company/aws-sbg", icon: "linkedin" },
  ],
}
