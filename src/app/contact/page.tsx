import { TextReveal } from "@/components/animations/text-reveal"
import { ClipReveal } from "@/components/animations/clip-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MapPin, MessageCircle, Link as LinkIcon, Code2, Video, Camera, Send } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-blue" />,
    title: "Email",
    value: "aws-sbg@example.edu",
    link: "mailto:aws-sbg@example.edu",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue" />,
    title: "Location",
    value: "College Campus, Computer Science Department, Room 401",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-blue" />,
    title: "Discord",
    value: "Join our Discord server",
    link: "https://discord.gg/aws-sbg",
  },
]

const socialLinks = [
  { icon: <LinkIcon className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/company/aws-sbg" },
  { icon: <Code2 className="h-5 w-5" />, label: "GitHub", href: "https://github.com/aws-sbg" },
  { icon: <Video className="h-5 w-5" />, label: "YouTube", href: "https://youtube.com/@aws-sbg" },
  { icon: <Camera className="h-5 w-5" />, label: "Instagram", href: "https://instagram.com/aws_sbg" },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Send className="h-8 w-8 text-blue" />
            <TextReveal
              text="Get in Touch"
              as="h1"
              className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl"
            />
          </div>
          <FadeIn direction="up" delay={0.2}>
            <p className="max-w-2xl text-lg text-muted">
              Have a question, want to collaborate, or just want to say hi? We would love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <ClipReveal direction="up" className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-black placeholder:text-muted transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/20 focus-visible:ring-offset-2 dark:bg-black dark:text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-black placeholder:text-muted transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/20 focus-visible:ring-offset-2 dark:bg-black dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-black dark:text-white">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this about?"
                    className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-black placeholder:text-muted transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/20 focus-visible:ring-offset-2 dark:bg-black dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-black placeholder:text-muted transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/20 focus-visible:ring-offset-2 resize-y dark:bg-black dark:text-white"
                  />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </ClipReveal>

            <div className="order-1 lg:order-2">
              <StaggerContainer className="space-y-6">
                {contactInfo.map((info) => (
                  <StaggerItem key={info.title}>
                    <Card className="transition-all duration-200 hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
                            {info.icon}
                          </div>
                          <div>
                            <CardTitle className="text-base">{info.title}</CardTitle>
                            <CardDescription className="mt-0.5">
                              {info.link ? (
                                <Link
                                  href={info.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue hover:underline"
                                >
                                  {info.value}
                                </Link>
                              ) : (
                                info.value
                              )}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </StaggerItem>
                ))}

                <StaggerItem>
                  <Card className="transition-all duration-200 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-base mb-3">Follow Us</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social) => (
                          <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue/5"
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-base mb-3">Our Location</CardTitle>
                      <CardDescription>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                          <span>
                            College Campus, Computer Science Department
                            <br />
                            Room 401, Main Building
                            <br />
                            City, State - 123456
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <div className="h-48 bg-card dark:bg-black border-t border-border flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-muted mx-auto mb-2" />
                        <p className="text-sm text-muted">Map placeholder</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
