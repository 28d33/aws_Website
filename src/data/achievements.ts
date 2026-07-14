export interface Achievement {
  title: string
  description: string
  date: string
  type: "award" | "hackathon_win" | "competition" | "certification" | "milestone"
  icon?: string
}

export const achievements: Achievement[] = [
  {
    title: "Best Student Club of the Year",
    description: "Awarded Best Technical Student Club by the University for exceptional contributions to student skill development and community building.",
    date: "2026-04-15",
    type: "award",
    icon: "trophy",
  },
  {
    title: "First Place - National Cloud Hackathon",
    description: "Team CloudForge won first place at the National Cloud Hackathon, beating 50+ teams from across the country with their serverless healthcare solution.",
    date: "2026-02-20",
    type: "hackathon_win",
    icon: "award",
  },
  {
    title: "100 AWS Certifications Milestone",
    description: "Our club members collectively achieved 100 AWS certifications, including Cloud Practitioner, Solutions Architect, Developer, and Security Specialty.",
    date: "2026-05-01",
    type: "milestone",
    icon: "certificate",
  },
  {
    title: "AWS Community Hero Recognition",
    description: "Our club president Priya Patel was recognized as an AWS Community Hero for her contributions to cloud education and community leadership.",
    date: "2026-03-10",
    type: "award",
    icon: "star",
  },
  {
    title: "First Place - Smart India Hackathon",
    description: "Team from our club won first place at Smart India Hackathon 2026 for building an AI-powered disaster response system on AWS.",
    date: "2026-04-05",
    type: "competition",
    icon: "trophy",
  },
  {
    title: "Best Paper Award - Cloud Computing Conference",
    description: "Research paper on 'Efficient Serverless Workflow Orchestration' authored by club members was awarded Best Paper at the International Cloud Computing Conference.",
    date: "2026-01-25",
    type: "award",
    icon: "file-text",
  },
  {
    title: "500 Members Milestone",
    description: "The club reached 500 active members, making it the largest technical student club on campus.",
    date: "2026-06-01",
    type: "milestone",
    icon: "users",
  },
  {
    title: "Second Place - AWS DeepRacer League",
    description: "Club team secured second place in the regional AWS DeepRacer League with a reinforcement learning model achieving a lap time of 8.2 seconds.",
    date: "2025-12-15",
    type: "competition",
    icon: "zap",
  },
  {
    title: "Top Performer - AWS Certification Challenge",
    description: "Five club members were among the top 50 performers nationally in the AWS Certification Challenge, earning free exam vouchers and AWS swag.",
    date: "2026-02-28",
    type: "certification",
    icon: "check-circle",
  },
  {
    title: "Organized 50+ Events Milestone",
    description: "The club successfully organized over 50 events including workshops, hackathons, speaker sessions, and community meetups.",
    date: "2026-06-15",
    type: "milestone",
    icon: "calendar",
  },
]
