"use client"

import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award, BookOpen, Target, CheckCircle, ExternalLink, Users } from "lucide-react"
import Link from "next/link"

interface Certification {
  icon: React.ReactNode
  name: string
  level: string
  levelVariant: "default" | "secondary" | "outline" | "success"
  description: string
  resources: string[]
}

const certifications: Certification[] = [
  {
    icon: <Award className="h-8 w-8 text-blue" />,
    name: "Cloud Practitioner",
    level: "Foundational",
    levelVariant: "secondary",
    description: "The entry-level certification covering fundamental AWS Cloud concepts, services, pricing models, and cloud security best practices. Perfect starting point for beginners.",
    resources: ["AWS Cloud Practitioner Essentials", "AWS Skill Builder Digital Training", "AWS Whitepapers & FAQs", "Tutorials Dojo Practice Exams"],
  },
  {
    icon: <Target className="h-8 w-8 text-blue" />,
    name: "Solutions Architect",
    level: "Associate",
    levelVariant: "outline",
    description: "Learn to design distributed systems, architect solutions, and implement AWS services following the Well-Architected Framework. The most popular AWS certification.",
    resources: ["AWS Solutions Architect Official Course", "A Cloud Guru / Pluralsight", "AWS Well-Architected Framework", "Jon Bonso Practice Tests"],
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue" />,
    name: "Developer",
    level: "Associate",
    levelVariant: "outline",
    description: "Focuses on developing and maintaining AWS-based applications, including CI/CD pipelines, AWS SDK usage, and serverless application development.",
    resources: ["AWS Developer Official Training", "AWS SDK Documentation & Samples", "Serverless Developer Guide", "Practice Exams & Hands-on Labs"],
  },
  {
    icon: <Award className="h-8 w-8 text-blue" />,
    name: "SysOps Administrator",
    level: "Associate",
    levelVariant: "outline",
    description: "Covers deployment, management, and operations on AWS including monitoring, networking, security, and automation of AWS environments.",
    resources: ["AWS SysOps Official Course", "AWS Management & Governance Tools", "CloudWatch & CloudTrail Deep Dive", "Hands-on with AWS CLI & SDKs"],
  },
  {
    icon: <Target className="h-8 w-8 text-blue" />,
    name: "DevOps Engineer",
    level: "Professional",
    levelVariant: "default",
    description: "Advanced certification for CI/CD pipeline management, automation, infrastructure as code, monitoring, and incident response on AWS.",
    resources: ["AWS DevOps Engineer Official Course", "Terraform & AWS CDK Documentation", "CI/CD Pipeline Workshops", "Advanced Monitoring & Logging Guides"],
  },
  {
    icon: <Award className="h-8 w-8 text-blue" />,
    name: "Security",
    level: "Specialty",
    levelVariant: "default",
    description: "Deep dive into AWS security services, identity and access management, data protection, incident response, and compliance on the AWS platform.",
    resources: ["AWS Security Official Training", "IAM Deep Dive Documentation", "AWS Security Best Practices", "Security & Compliance Whitepapers"],
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue" />,
    name: "AI Practitioner",
    level: "Foundational",
    levelVariant: "secondary",
    description: "Introduction to AWS AI/ML services including SageMaker, Rekognition, Comprehend, and building intelligent applications without deep ML expertise.",
    resources: ["AWS AI Practitioner Essentials", "AWS SageMaker Documentation", "AI/ML Service Workshops", "Practical Hands-on Labs & Tutorials"],
  },
]

const studyMaterials = [
  {
    name: "AWS Skill Builder",
    description: "Official AWS digital training with free and paid courses, learning plans, and exam readiness materials.",
    link: "https://skillbuilder.aws/",
  },
  {
    name: "Tutorials Dojo",
    description: "High-quality practice exams and review guides for all AWS certification levels with detailed explanations.",
    link: "https://tutorialsdojo.com/",
  },
  {
    name: "AWS re:Post",
    description: "Community-driven Q&A platform with verified AWS experts answering certification-related questions.",
    link: "https://repost.aws/",
  },
  {
    name: "AWS Documentation",
    description: "Comprehensive official documentation covering all AWS services, architectures, and best practices.",
    link: "https://docs.aws.amazon.com/",
  },
]

const achievements = [
  {
    count: "100+",
    label: "Certifications Earned",
  },
  {
    count: "7",
    label: "AWS Certified Members",
  },
  {
    count: "3",
    label: "Professional Level Certified",
  },
  {
    count: "5",
    label: "Specialty Certified",
  },
]

export default function CertificationsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Certifications" }]} className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-blue" />
            <TextReveal
              text="Certifications"
              as="h1"
              className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl"
            />
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="max-w-2xl text-lg text-muted">
              Accelerate your cloud career with AWS certifications. Our club provides study groups, resources, and
              voucher opportunities to help you earn industry-recognized credentials.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Certification Paths</h2>
            <p className="text-muted mb-12 max-w-2xl">
              Choose your certification path based on your role, experience level, and career goals. Each path includes
              recommended resources to help you prepare.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <MagneticCard>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3">{cert.icon}</div>
                    <CardTitle>{cert.name}</CardTitle>
                    <Badge variant={cert.levelVariant}>{cert.level}</Badge>
                    <CardDescription className="mt-2">{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white mb-3">
                      <CheckCircle className="h-4 w-4 text-blue" />
                      Recommended Resources
                    </h4>
                    <ul className="space-y-2">
                      {cert.resources.map((resource) => (
                        <li key={resource} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  </Card>
                </MagneticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Study Materials</h2>
            <p className="text-muted mb-12 max-w-2xl">
              Leverage these top-tier resources to prepare for your AWS certification exams. Our members get exclusive
              access to curated study guides and practice tests.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {studyMaterials.map((material) => (
              <StaggerItem key={material.name}>
                <Link
                  href={material.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="group-hover:text-blue transition-colors">
                          {material.name}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-blue" />
                      </div>
                      <CardDescription className="mt-1">{material.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Voucher Information</h2>
            <p className="text-muted mb-12 max-w-2xl">
              We help members access discounted and free certification vouchers through our partnerships and programs.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Award className="h-6 w-6 text-blue" />
                  </div>
                  <CardTitle>AWS Academy Vouchers</CardTitle>
                  <CardDescription className="mt-1">
                    AWS Academy provides free certification exam vouchers for active students enrolled in AWS Academy
                    courses. As a club, we coordinate with the college to offer these vouchers to eligible members who
                    complete the required curriculum.
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Users className="h-6 w-6 text-blue" />
                  </div>
                  <CardTitle>AWS Educate Benefits</CardTitle>
                  <CardDescription className="mt-1">
                    AWS Educate provides students with free access to AWS credits, training content, and certification
                    preparation resources. Members can also apply for exam vouchers through the AWS Educate program
                    based on participation and performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-border bg-blue px-4 py-20 dark:bg-blue">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Certified Members</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our community has achieved remarkable certification milestones. Join us and add your credentials to
                this growing list.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.label}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{achievement.count}</div>
                  <div className="text-blue-100 text-sm">{achievement.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
