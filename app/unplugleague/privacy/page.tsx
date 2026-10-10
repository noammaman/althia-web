import type { Metadata } from 'next'
import ReadingNav from '@/components/ReadingNav'
import reading from '@/components/reading.module.css'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Unplug League — Privacy Policy',
  description: 'Unplug League Privacy Policy — how we handle your data.',
  alternates: { canonical: '/unplugleague/privacy' },
  robots: {
    index: false,
    follow: true,
  },
}

const serif = { fontFamily: '"Playfair Display", Georgia, serif' }
const sans = { fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }

export default function UnplugLeaguePrivacyPage() {
  return (
    <main className={reading.page}>
      <NavLight />
      <ReadingNav product="Unplug League" />

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
            Unplug League Privacy Policy
          </h1>

          <p className="text-sm text-[#999999] mb-12" style={sans}>
            Last updated: October 10, 2026
          </p>

          <div className="space-y-8 text-base text-[#444444] leading-[1.8]" style={sans}>
            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Who we are
              </h2>
              <p>
                Unplug League is operated by Althia (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), the studio behind althia.org. This Privacy Policy explains how we collect, use, and protect your information when you use the Unplug League iOS application (&ldquo;the App&rdquo;).
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Selected apps stay on your device
              </h2>
              <p>
                Unplug League uses Apple&apos;s Screen Time framework (Family Controls) to help you understand and improve your phone use. Your Screen Time authorization and selected app, category, and website tokens are processed on your device. We do not upload those tokens, app names, or browsing history. If you join a synced squad, we upload daily usage totals in minutes, personal baselines, measurement readiness and time zone, and derived league scores so the squad can compare progress.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Information we collect
              </h2>
              <p className="mb-3">
                <strong className="text-[#111111]">Profile information:</strong> Your display name and bio are shared with your synced squad. Your avatar color is shared; a profile photo you choose stays on your device. Your sign-in provider may also store your account display name.
              </p>
              <p className="mb-3">
                <strong className="text-[#111111]">Squad and score data:</strong> If you create or join a squad, we sync your display name, bio, avatar color, personal baselines, streaks, and weekly League Point scores so your squad can see the standings. This includes daily usage totals in minutes and dated scores, but not app names, selected-app tokens, or browsing history.
              </p>
              <p className="mb-3">
                <strong className="text-[#111111]">Account identifiers:</strong> Squad sync uses an anonymous account created automatically by Firebase Authentication. If you sign in with Apple or Google, we receive your name and email address from that provider.
              </p>
              <p>
                <strong className="text-[#111111]">Everything else stays local:</strong> Your goals, coach tone, coaching check-in history, time windows, and locally added friends stay on your device. Synced squads include challenge counts and streak totals, but not coaching conversations. Blocking preferences stay on the device. If you report a player, we receive your account identifier, the reported player and squad identifiers, report category, and submission time to investigate abuse.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                How we use your information
              </h2>
              <p>
                We use the information above to run squads and leaderboards, keep your scores in sync across your squad, and provide account continuity across devices. We do not sell your personal data, we do not serve advertisements, and we do not use your data for advertising or tracking across apps or websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Third-party services
              </h2>
              <p>
                We use Google Firebase (Authentication and Cloud Firestore) for accounts and squad data, and Apple services for sign-in and app distribution. These providers process data on our behalf under their own privacy policies. We do not use third-party advertising or cross-app tracking SDKs.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Data retention and deletion
              </h2>
              <p className="mb-3">
                Squad data is retained while your account is active. You can delete your account and all associated server data at any time directly in the App: <strong className="text-[#111111]">Profile &rarr; Edit &rarr; Account &amp; data &rarr; Delete account &amp; data</strong>. This removes your squad memberships, synced scores, and account. If you host a squad with other members, hosting passes to another member. Safety reports may be retained for approximately 90 days for abuse investigation, then automatically deleted.
              </p>
              <p>
                You can also email <a href="mailto:althiastudios@gmail.com" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">althiastudios@gmail.com</a> and we will process your deletion request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Children&apos;s privacy
              </h2>
              <p>
                Unplug League is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Your rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, object to processing, request data portability, or withdraw consent. To exercise any of these rights, contact us at althiastudios@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes via the App or by other appropriate means. Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-[#111111] mb-3" style={serif}>
                Contact us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, contact us at <a href="mailto:althiastudios@gmail.com" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">althiastudios@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
