import { FadeIn } from "@/components/animations/fade-in"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-6" />
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue" />
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                Terms of Service
              </h1>
            </div>
            <p className="text-muted">Last updated: January 1, 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn direction="up">
            <div className="prose prose-gray max-w-none dark:prose-invert space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Acceptance of Terms</h2>
                <p className="text-muted leading-relaxed">
                  By accessing or using the AWS Student Builder Group website and services, you agree to be bound by
                  these Terms of Service. If you do not agree with any part of these terms, you may not use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Membership Eligibility</h2>
                <p className="text-muted leading-relaxed">
                  Membership is open to current students of our college. By registering, you confirm that you are a
                  currently enrolled student. The club reserves the right to verify enrollment status and deny or
                  revoke membership for non-compliance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Code of Conduct</h2>
                <p className="text-muted leading-relaxed">
                  All members must adhere to our code of conduct, which promotes a respectful, inclusive, and
                  harassment-free environment. The club reserves the right to remove any member who violates these
                  standards, including engaging in discriminatory behavior, harassment, or unauthorized use of
                  club resources.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Use of Resources</h2>
                <p className="text-muted leading-relaxed">
                  Members may access club resources including AWS credits, training materials, and certification
                  vouchers for educational purposes only. Misuse of resources, including unauthorized commercial use
                  or violation of AWS terms of service, will result in immediate revocation of access privileges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Intellectual Property</h2>
                <p className="text-muted leading-relaxed">
                  All content created by the club, including website design, documentation, and educational
                  materials, is owned by AWS Student Builder Group unless otherwise noted. Members retain ownership
                  of their personal projects but grant the club a license to display and promote their work for
                  educational and promotional purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Limitation of Liability</h2>
                <p className="text-muted leading-relaxed">
                  AWS Student Builder Group is a student-run organization and is not liable for any damages arising
                  from the use of our services, resources, or participation in club activities. Members participate
                  in events and use AWS services at their own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Termination</h2>
                <p className="text-muted leading-relaxed">
                  We reserve the right to terminate or suspend membership at any time for violation of these terms
                  or conduct detrimental to the club community. Members may also voluntarily withdraw from the club
                  at any time by contacting the leadership team.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Changes to Terms</h2>
                <p className="text-muted leading-relaxed">
                  We may modify these terms at any time. Members will be notified of significant changes via our
                  communication channels. Continued membership after changes constitutes acceptance of the updated
                  terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contact</h2>
                <p className="text-muted leading-relaxed">
                  For questions about these terms, please contact us at aws-sbg@example.edu.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
