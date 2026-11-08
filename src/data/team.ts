export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  socials?: { linkedin?: string }
}

export interface TeamGroup {
  name: string
  members: TeamMember[]
}

const coreTeam: TeamGroup = {
  name: "Core Team",
  members: [
    {
      name: "Krishna Prasad",
      role: "Student Builder Group Leader",
      image: "/images/team/placeholder-1.jpg",
      bio: "Leads the group — direction, community, and everything AWS at MARVEL UVCE.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Varsha Shubhashri",
      role: "Tech Lead",
      image: "/images/team/placeholder-2.jpg",
      bio: "Drives the technical side — sessions, study groups, and builder projects.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Deekshith Anand",
      role: "Tech Lead",
      image: "/images/team/placeholder-3.jpg",
      bio: "Guides hands-on cloud builds and mentors members along the way.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Jitha Jayesh",
      role: "Design & Content Lead",
      image: "/images/team/placeholder-4.jpg",
      bio: "Shapes the group's voice and visuals across events and socials.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Ananya Ramesh",
      role: "Outreach Lead",
      image: "/images/team/placeholder-5.jpg",
      bio: "Grows the community and keeps 400+ members connected.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Gourav P D",
      role: "Design and Content team member",
      image: "/images/team/placeholder-6.jpg",
      bio: "Designs posters and content for every event.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
    {
      name: "Mohammad Ayaan Khan",
      role: "Outreach team member",
      image: "/images/team/placeholder-7.jpg",
      bio: "Runs outreach — bringing new builders into the community.",
      socials: { linkedin: "https://linkedin.com/company/aws-sbg" },
    },
  ],
}

export const teamGroups: TeamGroup[] = [coreTeam]
