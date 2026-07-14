export interface Partner {
  name: string
  logo: string
  type: "aws" | "college" | "sponsor" | "organization"
  link?: string
}

export const partners: Partner[] = [
  {
    name: "AWS Educate",
    logo: "/images/partners/aws-educate.png",
    type: "aws",
    link: "https://aws.amazon.com/education/awseducate/",
  },
  {
    name: "AWS Academy",
    logo: "/images/partners/aws-academy.png",
    type: "aws",
    link: "https://aws.amazon.com/training/awsacademy/",
  },
  {
    name: "University Cloud Computing Lab",
    logo: "/images/partners/university-lab.png",
    type: "college",
    link: "https://www.example.edu/cloud-lab",
  },
  {
    name: "TechCorp India",
    logo: "/images/partners/techcorp.png",
    type: "sponsor",
    link: "https://www.techcorp.example.com",
  },
  {
    name: "CloudSkills Foundation",
    logo: "/images/partners/cloudskills.png",
    type: "organization",
    link: "https://www.cloudskills.example.org",
  },
  {
    name: "DevOps Community Forum",
    logo: "/images/partners/devops-forum.png",
    type: "organization",
    link: "https://www.devopscommunity.example",
  },
  {
    name: "CodeForAll Initiative",
    logo: "/images/partners/codeforall.png",
    type: "organization",
    link: "https://www.codeforall.example.org",
  },
  {
    name: "Campus Tech Foundation",
    logo: "/images/partners/campus-tech.png",
    type: "sponsor",
    link: "https://www.campustech.example.com",
  },
]
