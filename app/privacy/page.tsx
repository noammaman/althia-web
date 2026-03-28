import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Althia Privacy Policy — how we handle your data across Mythia and other Althia apps.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFCFA' }}>
      <NavLight />

      <section className="py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="text-sm text-[#666666] mb-8 inline-block hover:text-[#111111] transition-colors"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            ← Back to Althia
          </Link>

          <h1
            className="text-[2rem] md:text-[2.75rem] text-[#111111] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Privacy Policy
          </h1>

          <p
            className="text-sm text-[#999999] mb-12"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Last updated: March 28, 2026
          </p>

          <div
            className="space-y-8 text-base text-[#444444] leading-[1.8]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Who we are
              </h2>
              <p>
                Althia (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the Althia website (althia.org) and the Mythia mobile application. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Information we collect
              </h2>
              <p className="mb-3">
                <strong className="text-[#111111]">Account information:</strong> When you create an account, we collect your email address and display name. If you subscribe, payment processing is handled by Apple (via the App Store) or our payment processor — we do not store your credit card details.
              </p>
              <p className="mb-3">
                <strong className="text-[#111111]">Usage data:</strong> We collect anonymized data about how you use the app, including which stories you listen to, listening duration, and feature usage. This helps us improve the experience and decide what to build next.
              </p>
              <p>
                <strong className="text-[#111111]">Device information:</strong> We may collect basic device information (device type, operating system version, app version) for troubleshooting and compatibility purposes.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How we use your information
              </h2>
              <p>
                We use your information to provide and improve our services, process subscriptions, send important account notifications, personalize your experience (such as remembering your listening progress), and analyze aggregate usage patterns to guide product development. We do not sell your personal data to third parties, and we do not serve advertisements in our apps.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Third-party services
              </h2>
              <p>
                We use third-party services for authentication, data storage, analytics, and subscription management. These services have their own privacy policies. We may also use anonymized, aggregated analytics to understand usage patterns — this data cannot identify individual users.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Data retention and deletion
              </h2>
              <p>
                We retain your account data for as long as your account is active. You can request deletion of your account and all associated data at any time by emailing support@althia.org. We will process deletion requests within 30 days.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Children&apos;s privacy
              </h2>
              <p>
                Our services are not directed at children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Your rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, object to processing, request data portability, or withdraw consent. To exercise any of these rights, contact us at support@althia.org.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or an in-app notification. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Contact us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, contact us at <a href="mailto:support@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">support@althia.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
