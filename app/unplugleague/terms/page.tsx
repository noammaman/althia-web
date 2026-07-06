import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Unplug League — Terms of Use',
  description: 'Unplug League Terms of Use — the terms governing your use of the Unplug League app.',
  robots: 'index, follow',
}

const serif = { fontFamily: '"Playfair Display", Georgia, serif' }
const sans = { fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }

export default function UnplugLeagueTermsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFCFA' }}>
      <NavLight />

      <section className="py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/unplugleague"
            className="text-sm text-[#666666] mb-8 inline-block hover:text-[#111111] transition-colors"
            style={sans}
          >
            &larr; Back to Unplug League
          </Link>

          <h1 className="text-[2rem] md:text-[2.75rem] text-[#111111] mb-4 leading-tight" style={serif}>
            Unplug League Terms of Use
          </h1>

          <p className="text-sm text-[#999999] mb-12" style={sans}>
            Last updated: July 6, 2026
          </p>

          <div className="space-y-8 text-base text-[#444444] leading-[1.8]" style={sans}>
            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Agreement to Terms
              </h2>
              <p>
                By downloading, installing, or using the Unplug League application (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App. The App is operated by Althia (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Description of Service
              </h2>
              <p>
                Unplug League is a social screen-time application designed to help you use your phone more intentionally. The App scores your phone use against personal baselines, offers challenges, and lets you compete in small squads with friends. Scores, streaks, and standings are motivational game mechanics — they are estimates, and we make no guarantee of their precision.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Accounts and Squads
              </h2>
              <p className="mb-3">
                The App works without registration. Joining or creating a synced squad creates an anonymous account automatically; you may optionally sign in with Apple or Google to keep your account across devices. You are responsible for the accuracy of the information you share in a squad.
              </p>
              <p>
                For details on what data is collected and how it is handled, see our{' '}
                <Link
                  href="/unplugleague/privacy"
                  className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors"
                >
                  Privacy Policy
                </Link>
                . You can delete your account and synced data at any time from within the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                User Conduct
              </h2>
              <p>
                Squad names, display names, bios, and avatars are visible to other members of your squad. You agree not to use names or content that are unlawful, hateful, harassing, sexually explicit, or impersonate another person. We may remove content or suspend accounts that violate these rules.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Use of the App
              </h2>
              <p>
                You may use the App for personal, non-commercial purposes only. You agree not to reproduce, distribute, modify, create derivative works from, publicly display, or in any way exploit the App&apos;s content, design, or other materials except as expressly permitted by these Terms, and not to interfere with or disrupt the App&apos;s services or servers.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Intellectual Property
              </h2>
              <p>
                All content in the App — including but not limited to text, design, scoring systems, artwork, and the Unplug League and Althia brand names and logos — is the property of Althia or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Not Medical Advice
              </h2>
              <p>
                The App is designed to support healthier phone habits. It is not a medical device or treatment, and it is not intended to diagnose, treat, cure, or prevent any condition, including behavioral addiction or sleep disorders. If you have concerns about compulsive technology use or related health issues, consult a qualified professional.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Availability and Changes
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the App at any time without prior notice, including squad sync features, scoring rules, and challenges. We are not liable to you for any modification, suspension, or discontinuation of the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Disclaimer of Warranties
              </h2>
              <p>
                The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or that using it will reduce your screen time or produce any particular outcome.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Althia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Israel, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you of significant changes via the App or by other appropriate means. Your continued use of the App after any changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, contact us at{' '}
                <a href="mailto:support@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">
                  support@althia.org
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
