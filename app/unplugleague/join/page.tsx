import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'
import ReadingNav from '@/components/ReadingNav'
import reading from '@/components/reading.module.css'
import styles from '@/components/product.module.css'

export const metadata: Metadata = {
  title: 'Unplug League — Win your week back',
  description:
    'Train your attention like a muscle, with your friends. Earn League Points for using your phone on purpose. No shame, no blockers — just a league.',
  alternates: { canonical: '/unplugleague/join' },
  robots: 'index, follow',
  openGraph: {
    title: 'Unplug League — Win your week back',
    description:
      'A social fitness league for your attention. Beat your own baseline, not other people’s.',
    url: 'https://althia.org/unplugleague/join',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Althia — stories for the ancient mind' }],
  },
}

const features = [
  ['Beat your own baseline', 'Points come from improving on your own normal. A heavy scroller and a light user can compete fairly in the same league.'],
  ['Win the week', 'Protected evenings, feed-free mornings, and focused work hours earn League Points. The week resets every Sunday. A fresh race, every week.'],
  ['Come back tomorrow', 'A bad day is a comeback day, not a broken streak. The league shows you the points still on the table.'],
  ['A small squad', 'Play with 3 to 6 friends using an invite code. Follow standings, weekly recaps, and awards where everyone gets a storyline.'],
  ['Challenges that score themselves', 'Evening Bonus, Strong Start, Scroll Balance, Offline Wins. Progress computes from your day, with no manual tracking.'],
  ['A coach with your tone', 'Supportive, competitive, spicy, or savage. Choose how the league talks to you.'],
  ['Private by design', 'Screen Time data is processed on your iPhone using Apple’s Screen Time framework and is never uploaded. Your squad sees your scores, not your apps.'],
]

export default function UnplugLeagueJoinPage() {
  return <main className={reading.page}>
    <NavLight />
    <ReadingNav product="Unplug League" />
    <article>
      <p className={styles.eyebrow}>In development · An Althia project</p>
      <h1>Unplug League</h1>
      <p className={reading.lede}>Your attention is worth training.</p>
      <p>Screen-time reduction as a sport you play with friends. Earn League Points for using your phone on purpose. Win the week. No blockers, no guilt.</p>
      <div className={styles.actions}><a className={styles.button} href="mailto:althiastudios@gmail.com?subject=Unplug%20League%20beta" style={{ color: 'white' }}>Ask for a beta invite ↗</a></div>
      <p className={styles.small}>For iPhone. Not yet available on the App Store.</p>
      <h2>Built for people, not willpower.</h2>
      {features.map(([title, detail]) => <section key={title}><h2>{title}</h2><p>{detail}</p></section>)}
      <h2>Win a little of your week back.</h2>
      <p>Grab your friends. Set your baselines. Play for the week.</p>
      <div className={styles.actions}><a className={styles.textLink} href="mailto:althiastudios@gmail.com?subject=Unplug%20League%20beta">Ask about the beta →</a><Link className={styles.textLink} href="/unplugleague">More about Unplug League →</Link></div>
    </article>
    <Footer variant="light" privacyHref="/unplugleague/privacy" />
  </main>
}
