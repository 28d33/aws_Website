import { ImageReveal } from "@/components/animations/image-reveal"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { partners, type Partner } from "@/data/partners"
import { Handshake, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const typeLabels: Record<Partner["type"], string> = {
  aws: "AWS Partner",
  college: "College Partner",
  sponsor: "Sponsor",
  organization: "Organization",
}

const typeVariants: Record<Partner["type"], "default" | "secondary" | "outline" | "success"> = {
  aws: "default",
  college: "secondary",
  sponsor: "outline",
  organization: "success",
}

const groupedPartners = partners.reduce(
  (acc, p) => {
    if (!acc[p.type]) acc[p.type] = []
    acc[p.type].push(p)
    return acc
  },
  {} as Record<Partner["type"], Partner[]>,
)

const typeOrder: Partner["type"][] = ["aws", "college", "sponsor", "organization"]

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Partners" }]} className="mb-6" />
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="h-8 w-8 text-blue" />
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                Our Partners
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-muted">
              We collaborate with industry leaders, academic institutions, and community organizations to provide the
              best resources and opportunities for our members.
            </p>
          </FadeIn>
        </div>
      </section>

      {typeOrder.map((type) => {
        const items = groupedPartners[type]
        if (!items) return null

        return (
          <section key={type} className="px-4 py-16 border-b border-border last:border-b-0">
            <div className="mx-auto max-w-6xl">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={typeVariants[type]} className="text-sm px-3 py-1">
                    {typeLabels[type]}
                  </Badge>
                </div>
              </FadeIn>
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((partner) => (
                  <StaggerItem key={partner.name}>
                    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-3 h-16 w-16 overflow-hidden rounded-xl border border-border">
                          <ImageReveal src={partner.logo} alt={partner.name} className="h-full w-full" />
                        </div>
                        <CardTitle>{partner.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {partner.link && (
                          <Link
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-blue hover:underline"
                          >
                            Visit website
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        )
      })}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn direction="up">
            <Card className="overflow-hidden border-blue/20 bg-gradient-to-br from-blue to-blue-dark p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Interested in supporting our mission? Partner with us to empower the next generation of cloud
                professionals and gain visibility among passionate student builders.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
