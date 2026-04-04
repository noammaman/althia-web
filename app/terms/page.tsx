import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Althia Terms of Use — the terms governing your use of Mythia and other Althia apps.',
  robots: 'index, follow',
}

export default function TermsPage() {
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
            &larr; Back to Althia
          </Link>

          <h1
            className="text-[2rem] md:text-[2.75rem] text-[#111111] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Terms of Use
          </h1>

          <p
            className="text-sm text-[#999999] mb-12"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Last updated: March 30, 2026
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
                Agreement to Terms
              </h2>
              <p>
                By downloading, installing, or using the Mythia application (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App. The App is operated by Althia (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Description of Service
              </h2>
              <p>
                Mythia is a mythology-based audio storytelling application designed for relaxation and sleep. The App provides narrated mythology stories across multiple traditions, with various listening modes and accompanying artwork.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Use of the App
              </h2>
              <p>
                You may use the App for personal, non-commercial purposes only. You agree not to reproduce, distribute, modify, create derivative works from, publicly display, or in any way exploit any of the content, audio, artwork, or other materials available through the App, except as expressly permitted by these Terms.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                User Accounts and Data
              </h2>
              <p>
                The App does not require account creation. Any personal information you provide (such as your name during onboarding) is stored locally on your device. For details on data collection and usage, please refer to our <a href="https://althia.org/privacy" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                In-App Purchases
              </h2>
              <p className="mb-3">
                The App offers optional in-app purchases (&ldquo;Mythology Packs&rdquo;) that unlock additional content. All purchases are processed through Apple&apos;s App Store. By making a purchase, you agree to Apple&apos;s terms and conditions for in-app purchases.
              </p>
              <p className="mb-3">
                Mythology Packs are non-consumable, one-time purchases. Once purchased, a Pack remains available to you on any device signed into the same Apple ID, including after reinstallation.
              </p>
              <p className="mb-3">
                All sales are final. Refund requests are handled by Apple in accordance with their refund policy. We do not process refunds directly.
              </p>
              <p>
                Prices are displayed in your local currency and may include applicable taxes as determined by Apple.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Intellectual Property
              </h2>
              <p className="mb-3">
                All content in the App &mdash; including but not limited to story texts, audio narrations, artwork, music, sound design, and the Mythia and Althia brand names and logos &mdash; is the property of Althia or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not copy, record, redistribute, or commercially use any content from the App without our express written permission.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Content Disclaimer
              </h2>
              <p>
                The stories presented in Mythia are creative retellings of mythology from various cultural traditions. They are intended for entertainment and relaxation purposes. While we strive for cultural respect and accuracy, these are artistic interpretations, not scholarly or religious texts.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Availability and Changes
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the App at any time without prior notice. We may add or remove content, features, or functionality. We are not liable to you for any modification, suspension, or discontinuation of the App.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Disclaimer of Warranties
              </h2>
              <p className="mb-3">
                The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components.
              </p>
              <p>
                The App is designed to promote relaxation and sleep but is not a medical device or treatment. It is not intended to diagnose, treat, cure, or prevent any medical condition, including sleep disorders. Consult a healthcare professional for medical advice.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Althia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Israel, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you of significant changes via the App or by other appropriate means. Your continued use of the App after any changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2
                className="text-xl text-[#111111] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, contact us at <a href="mailto:support@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">support@althia.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
