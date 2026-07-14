import { TextReveal } from "@/components/animations/text-reveal"
import { ScaleReveal } from "@/components/animations/scale-reveal"
import { MagneticCard } from "@/components/animations/magnetic-card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { faqs } from "@/data/faq"
import { UserPlus, FileText, CreditCard, Shield, Heart, Globe } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: <CreditCard className="h-6 w-6 text-blue" />,
    title: "Free AWS Credits",
    description: "Access to AWS credits through AWS Educate and AWS Academy for hands-on practice and project development.",
  },
  {
    icon: <FileText className="h-6 w-6 text-blue" />,
    title: "Certification Vouchers",
    description: "Discount and free exam vouchers for AWS certifications through our partnership with AWS Academy.",
  },
  {
    icon: <UserPlus className="h-6 w-6 text-blue" />,
    title: "Mentorship",
    description: "One-on-one mentoring from senior members, alumni, and industry professionals working at top tech companies.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue" />,
    title: "Hands-on Workshops",
    description: "Regular workshops covering AWS services, cloud architecture, DevOps, AI/ML, and cybersecurity.",
  },
  {
    icon: <Heart className="h-6 w-6 text-blue" />,
    title: "Networking",
    description: "Connect with like-minded peers, AWS community leaders, and potential employers at our events.",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue" />,
    title: "Career Opportunities",
    description: "Exclusive job postings, internship opportunities, and resume-building through club projects and leadership roles.",
  },
]

const responsibilities = [
  "Attend at least 2 events per semester to maintain active membership status",
  "Respect fellow members and maintain a welcoming, inclusive environment",
  "Contribute to club activities, discussions, and knowledge sharing",
  "Follow the AWS Acceptable Use Policy and club code of conduct",
  "Provide feedback to help improve the club experience for everyone",
  "Represent the club positively in all interactions within and outside the college",
]

export default function MembershipPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Membership" }]} className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <UserPlus className="h-8 w-8 text-blue" />
            <TextReveal
              text="Join Our Community"
              as="h1"
              className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl"
            />
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="max-w-2xl text-lg text-muted">
              Become part of a vibrant community of cloud enthusiasts, builders, and innovators. Whether you are a
              beginner or an experienced developer, there is a place for you here.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Eligibility</h2>
            <p className="text-muted mb-12 max-w-2xl">
              We believe in making cloud computing accessible to everyone. Here is what you need to join:
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <UserPlus className="h-6 w-6 text-blue" />
                  </div>
                  <CardTitle>Current Student</CardTitle>
                  <CardDescription className="mt-1">
                    You must be enrolled at our college. Students from all departments, years, and programs are welcome.
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Heart className="h-6 w-6 text-blue" />
                  </div>
                  <CardTitle>Interest in Cloud</CardTitle>
                  <CardDescription className="mt-1">
                    A genuine curiosity about cloud computing and technology. No prior experience or technical background
                    is needed.
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                    <Shield className="h-6 w-6 text-blue" />
                  </div>
                  <CardTitle>No Experience Needed</CardTitle>
                  <CardDescription className="mt-1">
                    We welcome absolute beginners. Our beginner-friendly workshops and mentorship program will help you
                    get started from scratch.
                  </CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Member Benefits</h2>
            <p className="text-muted mb-12 max-w-2xl">
              When you join, you unlock access to resources, opportunities, and a supportive community.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <MagneticCard>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 transition-colors group-hover:bg-blue/20">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="mt-1">{benefit.description}</CardDescription>
                  </CardHeader>
                  </Card>
                </MagneticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Member Responsibilities</h2>
            <p className="text-muted mb-12 max-w-2xl">
              By joining, you agree to uphold these responsibilities to maintain a positive and productive community.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Card className="p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue/10">
                      <span className="h-2 w-2 rounded-full bg-blue" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-muted mb-12 max-w-2xl">
              Have questions? Find answers to common inquiries about our membership.
            </p>
          </FadeIn>
            <Card className="p-6">
              <Accordion type="multiple" defaultValue={[faqs[0].question]}>
                {faqs.map((faq, i) => (
                  <ScaleReveal key={faq.question} delay={i * 0.1}>
                    <AccordionItem value={faq.question}>
                      <AccordionTrigger value={faq.question}>{faq.question}</AccordionTrigger>
                      <AccordionContent value={faq.question}>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </ScaleReveal>
                ))}
              </Accordion>
            </Card>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Card className="overflow-hidden border-blue/20 bg-gradient-to-br from-blue to-blue-dark p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Take the first step towards building your cloud career. Join our community and start your journey today.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Apply Now
                    <UserPlus className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/community">
                  <Button variant="outline" size="lg">
                    Join Our Community
                    <Globe className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
