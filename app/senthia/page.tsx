import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from './senthia.module.css'

const APP_STORE_URL = 'https://apps.apple.com/il/app/senthia/id6814469115'

export const metadata: Metadata = {
  title: 'Senthia — A Little Room for You | Guided Imagination',
  description: 'Narrated journeys into vivid, imagined places. Explore ten guided-imagination journeys in English and Spanish, with five free journeys to choose.',
  alternates: { canonical: 'https://althia.org/senthia' },
  openGraph: {
    title: 'Senthia — A little room for you.',
    description: 'One voice. One vivid place. A little space to settle and unwind.',
    url: 'https://althia.org/senthia', type: 'website',
    images: [{ url: '/senthia/meadow.jpg', alt: 'A sunlit summer meadow, illustrated for Senthia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Senthia — A little room for you.', images: ['/senthia/meadow.jpg'] },
}

const journeys = [
  { image: 'meadow', title: 'Summer Meadow', text: 'Tall grasses, warm sunlight, and room to linger.', alt: 'A winding path through a sunlit meadow' },
  { image: 'cenote', title: 'Hidden Cenote', text: 'A quiet pool, jungle shade, and leaves on still water.', alt: 'A secluded cenote surrounded by lush greenery' },
  { image: 'cabin', title: 'Snow Cabin', text: 'A fire inside. A world of snow beyond the window.', alt: 'A warm cabin in a snowy mountain landscape' },
]

export default function SenthiaPage() {
  return <main className={styles.page}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        '@id': 'https://althia.org/senthia#app',
        name: 'Senthia',
        operatingSystem: 'iOS',
        applicationCategory: 'HealthApplication',
        description: 'Guided-imagination journeys for relaxation in English and Spanish.',
        url: 'https://althia.org/senthia',
        downloadUrl: APP_STORE_URL,
        installUrl: APP_STORE_URL,
        inLanguage: ['en', 'es'],
        image: 'https://althia.org/logos/senthia-logo.png',
        publisher: { '@id': 'https://althia.org/#organization' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free download with optional in-app subscription.' },
      }) }}
    />
    <nav className={styles.nav} aria-label="Senthia navigation">
      <Link href="/senthia" className={styles.brand}>senthia</Link>
      <div><Link href="/">Althia</Link><Link href="/senthia/support">Support</Link></div>
    </nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>GUIDED IMAGINATION FOR RELAXATION</p>
        <h1>Senthia</h1>
        <p className={styles.lead}>A little room for you.</p>
        <p className={styles.body}>A meadow in the sunlight. A hidden pool in the jungle. A cabin with a fire burning. Senthia takes you into vivid, imagined places and gives you time to simply be there.</p>
        <a className={styles.button} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store <span aria-hidden="true">↗</span></a>
        <p className={styles.launch}>Now available on iOS · English &amp; Spanish</p>
      </div>
      <div className={styles.heroArt}><Image src="/senthia/cenote.jpg" alt="" fill priority sizes="100vw" /></div>
    </section>
    <div className={styles.facts}><span>10 founding journeys</span><span>About 10–18 minutes</span><span>Narrated by Eve</span><span>No ads</span></div>
    <section className={styles.intro}>
      <p className={styles.eyebrow}>ONE VOICE. ONE PLACE.</p>
      <h2>Somewhere to go.<br />Nothing to get right.</h2>
      <p>Settle in, turn your attention inward, and arrive somewhere vivid. A gentle narration guides what you notice: the warmth, the light, the sound of water. You don’t need to plan a route or know how to begin.</p>
      <p>The journeys draw on practices such as savoring, loving-kindness, gentle body awareness, and mental noting. Each gives you a different way to spend a little time with yourself.</p>
    </section>
    <section id="journeys" className={styles.journeys}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>PLACES IN YOUR IMAGINATION</p><h2>Where will you go?</h2></div><p>Ten places to begin.<br />Return whenever you need a pause.</p></div>
      <div className={styles.cards}>{journeys.map(j => <article key={j.image}><div className={styles.cardArt}><Image src={`/senthia/${j.image}.jpg`} alt={j.alt} fill sizes="(max-width: 700px) 85vw, 330px" /></div><h3>{j.title}</h3><p>{j.text}</p></article>)}</div>
      <p className={styles.otherPlaces}>Also explore a shaded courtyard, cool water basin, candlelit library, midnight sun, wildflower field, Moroccan market, and vineyard.</p>
    </section>
    <section className={styles.listening}>
      <p className={styles.eyebrow}>MAKE THE MOMENT YOURS</p><h2>A quieter kind of listening.</h2>
      <div className={styles.features}>
        <article><h3>Choose your language.</h3><p>Listen to Eve in English or Spanish, with the app’s interface in your chosen language too.</p></article>
        <article><h3>Find your atmosphere.</h3><p>Choose voice-only narration or the Alpha Waves version with a soft background track. Available modes are shown for each journey.</p></article>
        <article><h3>Keep a thought.</h3><p>After listening, leave yourself a reflection if you wish. Your words stay on your device.</p></article>
      </div>
    </section>
    <section className={styles.free}>
      <p className={styles.eyebrow}>YOUR FIRST FIVE PLACES</p><h2>Begin with five journeys.<br />Make them yours.</h2>
      <p>The first five distinct journeys you start become your free collection. Return to them as often as you like. Your choices can’t be swapped later.</p>
      <p>A monthly or annual subscription opens the rest of the collection while active. No email address or password is needed to get started.</p>
      <Link className={styles.textLink} href="/senthia/terms">How free journeys and subscriptions work →</Link>
    </section>
    <section className={styles.faq}>
      <h2>A few things to know.</h2>
      <details><summary>What is guided imagination?</summary><p>A voice guides your attention through an imagined setting, inviting you to notice sensory details and settle into the experience. Senthia is designed for relaxation; you don’t need previous experience.</p></details>
      <details><summary>Do I need to create an account?</summary><p>You don’t need to enter an email or choose a password. Senthia creates an anonymous account in the background to remember your five free-journey selections.</p></details>
      <details><summary>What stays private?</summary><p>Your reflections, preferences, and listening progress are stored on your device. Free-journey selections are stored under an anonymous Firebase identifier, and content downloads involve network requests. Senthia has no ads or behavioral analytics. <Link href="/senthia/privacy">Read the full Privacy Policy.</Link></p></details>
      <details><summary>Is Senthia a medical treatment?</summary><p>No. Senthia offers guided imagination for relaxation. It does not diagnose or treat health conditions, and individual experiences vary.</p></details>
      <details><summary>How can I get help?</summary><p>Visit <Link href="/senthia/support">Senthia Support</Link> for listening, subscription, and account help, or email <a href="mailto:althiastudios@gmail.com">althiastudios@gmail.com</a>.</p></details>
    </section>
    <div className={styles.legal}><Link href="/senthia/support">Support</Link><Link href="/senthia/terms">Senthia Terms of Use</Link><Link href="/senthia/privacy">Privacy Policy</Link><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a></div>
    <Footer variant="light" privacyHref="/senthia/privacy" />
  </main>
}
