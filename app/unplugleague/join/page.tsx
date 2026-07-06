import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unplug League — Win your week back',
  description:
    'Train your attention like a muscle, with your friends. Earn League Points for using your phone on purpose. No shame, no blockers — just a league.',
  robots: 'index, follow',
  openGraph: {
    title: 'Unplug League — Win your week back',
    description:
      'A social fitness league for your attention. Beat your own baseline, not other people’s.',
    url: 'https://althia.org/unplugleague/join',
    type: 'website',
  },
}

const sans = { fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }

const MINT = '#69FAC2'
const ORANGE = '#FFAB52'

function FeatureCard({ emoji, title, detail }: { emoji: string; title: string; detail: string }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="text-2xl mb-3">{emoji}</div>
      <h3 className="text-white font-bold mb-2" style={sans}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ ...sans, color: 'rgba(255,255,255,0.62)' }}>
        {detail}
      </p>
    </div>
  )
}

export default function UnplugLeagueJoinPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#080C10' }}>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-6"
            style={{ ...sans, color: MINT }}
          >
            Unplug League
          </p>

          <h1
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            style={sans}
          >
            Your attention is worth training.
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10"
            style={{ ...sans, color: 'rgba(255,255,255,0.62)' }}
          >
            Unplug League turns screen-time reduction into a sport you play with friends. Earn League Points for using your phone on purpose. Win the week. No blockers, no guilt.
          </p>

          <a
            href="mailto:hello@althia.org?subject=Unplug%20League%20beta"
            className="inline-block font-bold text-black px-8 py-4 rounded-2xl transition-transform hover:scale-105"
            style={{ ...sans, backgroundColor: MINT }}
          >
            Ask for a beta invite
          </a>

          <p className="text-xs mt-4" style={{ ...sans, color: 'rgba(255,255,255,0.35)' }}>
            Coming soon to the App Store · iPhone
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[880px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center" style={sans}>
            How the league works
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard
              emoji="📉"
              title="Beat your own baseline"
              detail="You set your normal. Points come from improving on it — so a heavy scroller and a light user compete fairly in the same league."
            />
            <FeatureCard
              emoji="🏆"
              title="Win the week"
              detail="Protected evenings, feed-free mornings, and focused work hours all earn League Points. The week resets every Sunday. Fresh race, every week."
            />
            <FeatureCard
              emoji="🔄"
              title="No shame spiral"
              detail="A bad day is a comeback day, not a broken streak. The league never guilts you — it just shows you the points still on the table."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-[880px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center" style={sans}>
            Built for people, not willpower
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <FeatureCard
              emoji="👥"
              title="Squads"
              detail="A tiny league of friends — 3 to 6 people with an invite code. Live standings, weekly recaps, and awards where everyone gets a storyline."
            />
            <FeatureCard
              emoji="⚡"
              title="Challenges that score themselves"
              detail="Evening Bonus, Strong Start, Scroll Balance, Offline Wins. Progress computes from your day — no manual tracking, no homework."
            />
            <FeatureCard
              emoji="🎙️"
              title="A coach with your tone"
              detail="Supportive, competitive, spicy, or savage. You pick how the league talks to you. It roasts with love or cheers quietly — your call."
            />
            <FeatureCard
              emoji="🔒"
              title="Private by design"
              detail="Screen Time data is processed on your iPhone with Apple's Screen Time framework and never uploaded. Your squad sees your scores — never your apps."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6" style={sans}>
            Become the person your phone can&apos;t hold onto.
          </h2>
          <p className="text-base mb-10" style={{ ...sans, color: 'rgba(255,255,255,0.62)' }}>
            Grab your friends. Set your baselines. Play for the week.
          </p>
          <a
            href="mailto:hello@althia.org?subject=Unplug%20League%20beta"
            className="inline-block font-bold text-black px-8 py-4 rounded-2xl transition-transform hover:scale-105"
            style={{ ...sans, backgroundColor: ORANGE }}
          >
            Get on the beta list
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-10 px-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
          style={{ ...sans, color: 'rgba(255,255,255,0.45)' }}
        >
          <Link href="/unplugleague" className="hover:text-white transition-colors">
            Unplug League home
          </Link>
          <Link href="/unplugleague/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/unplugleague/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            An Althia project
          </Link>
        </div>
      </footer>
    </main>
  )
}
