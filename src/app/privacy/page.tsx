import { FadeIn } from "@/components/animations/fade-in"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-6" />
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue" />
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                Privacy Policy
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
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Information We Collect</h2>
                <p className="text-muted leading-relaxed">
                  When you sign up for membership, register for events, or interact with our website, we may collect
                  personal information such as your name, email address, college enrollment details, and any other
                  information you voluntarily provide. We also collect non-personal data such as browser type, pages
                  visited, and time spent on our site through cookies and analytics tools.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">How We Use Your Information</h2>
                <p className="text-muted leading-relaxed">
                  We use the information we collect to manage your membership, communicate club updates and event
                  invitations, provide access to resources and benefits, improve our website and services, and comply
                  with legal obligations. We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Data Protection</h2>
                <p className="text-muted leading-relaxed">
                  We implement appropriate security measures to protect your personal data from unauthorized access,
                  alteration, disclosure, or destruction. These measures include encryption, access controls, and
                  regular security assessments. However, no method of transmission over the internet is completely
                  secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Third-Party Services</h2>
                <p className="text-muted leading-relaxed">
                  We may use third-party services such as Discord, Google Analytics, and email communication platforms
                  to facilitate club operations. These services have their own privacy policies governing the use of
                  your data. We encourage you to review their policies when using these platforms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Your Rights</h2>
                <p className="text-muted leading-relaxed">
                  You have the right to access, correct, or delete your personal data held by us. You may also
                  withdraw consent for data processing at any time. To exercise these rights, please contact us at
                  aws-sbg@example.edu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Cookies</h2>
                <p className="text-muted leading-relaxed">
                  Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize
                  content. You can control cookie preferences through your browser settings. Disabling cookies may
                  affect certain features of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Changes to This Policy</h2>
                <p className="text-muted leading-relaxed">
                  We may update this privacy policy from time to time. We will notify members of any significant
                  changes through our communication channels. Continued use of the website after changes constitutes
                  acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contact</h2>
                <p className="text-muted leading-relaxed">
                  If you have questions about this privacy policy or how we handle your data, please reach out to us
                  at aws-sbg@example.edu.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
