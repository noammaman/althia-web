import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Unplug League',
  description:
    'Unplug League is a social screen-time app: train your attention like a muscle, compete with friends, and win the week by using your phone on purpose.',
  robots: 'index, follow',
  openGraph: {
    title: 'Unplug League',
    description:
      'A social fitness league for your attention. Compete with friends to use your phone on purpose.',
    url: 'https://althia.org/unplugleague',
    type: 'website',
  },
}

export default function UnplugLeaguePage() {
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
            Unplug League
          </h1>

          <p
            className="text-lg text-[#666666] mb-12"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            A social fitness league for your attention.
          </p>

          <div
            className="space-y-6 text-base text-[#444444] leading-[1.8]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            <p>
              Unplug League is an iPhone app that turns screen-time reduction into a sport. Instead of blocking apps or guilting you about minutes, it scores you against your own baseline — earning you League Points for protected evenings, intentional mornings, and time won back from the feed.
            </p>

            <p>
              You play in a small squad of friends. Everyone competes against their own normal, so a heavy scroller and a light user can be in the same league — the winner is whoever improves the most, not whoever uses their phone least. Slip days become comeback days, never broken streaks.
            </p>

            <p>
              Your Screen Time data is processed on your device using Apple&apos;s Screen Time framework and is never uploaded to our servers. Only the scores you choose to share with your squad are synced.
            </p>

            <p>
              Unplug League is currently in development and heading toward beta. Curious?{' '}
              <Link
                href="/unplugleague/join"
                className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors"
              >
                See what it&apos;s about
              </Link>
              .
            </p>
          </div>

          <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E5E5E5' }}>
            <h2
              className="text-xl text-[#111111] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Links
            </h2>
            <div
              className="space-y-3 text-base text-[#444444]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              <p>
                <Link href="/unplugleague/join" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">
                  About the app
                </Link>
              </p>
              <p>
                <Link href="/unplugleague/privacy" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link href="/unplugleague/terms" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">
                  Terms of Use
                </Link>
              </p>
              <p>
                Support:{' '}
                <a href="mailto:support@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">
                  support@althia.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
