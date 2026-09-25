import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'
import styles from './home.module.css'

const MYTHIA = 'https://apps.apple.com/us/app/mythia-stories/id6760155082'
const SENTHIA = 'https://apps.apple.com/il/app/senthia/id6814469115'
const questions = [
  ['What is Althia?', 'Althia is an independent studio making audio apps for sleep, relaxation, and reflection. Mythia brings ancient mythology to bedtime. Senthia guides you through vivid, imagined places.'],
  ['Which app should I start with?', 'Choose Mythia if you enjoy following a story at bedtime. Choose Senthia if you would like a narrated journey through an imagined place, with room to notice, settle, and reflect.'],
  ['Are the apps free to try?', 'Both apps are free to download on iOS, with paid options inside the apps. Mythia includes select free stories. In Senthia, the first five distinct journeys you start become your free collection; those choices cannot be swapped later.'],
  ['Which languages can I listen in?', 'Mythia offers stories in English. Senthia offers guided-imagination journeys in English and Spanish.'],
  ['How are the stories and journeys made?', 'We use AI in writing, adaptation, and narration, guided by human creative direction and review. For Mythia, that includes attention to the source traditions. For Senthia, it means shaping a clear, gentle experience of an imagined place.'],
] as const

export const metadata: Metadata = {
  title: { absolute: 'Althia | Audio Apps for Sleep, Relaxation & Reflection' },
  description: 'Meet Mythia and Senthia by Althia. Discover hundreds of mythology bedtime stories and guided-imagination journeys. Free to download on iOS.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: 'https://althia.org', title: 'Althia | A little more room for your mind', description: 'Mythology for bedtime. Guided imagination for a quiet moment. Discover Mythia and Senthia.' },
  twitter: { card: 'summary_large_image', title: 'Althia | Audio Apps for Sleep & Reflection', description: 'Discover Mythia and Senthia. Stories to rest with. Places to escape into.' },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': 'https://althia.org/#page',
    url: 'https://althia.org/', name: 'Althia audio apps for sleep, relaxation, and reflection',
    isPartOf: { '@id': 'https://althia.org/#website' }, about: { '@id': 'https://althia.org/#organization' },
    mainEntity: { '@type': 'ItemList', itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@id': 'https://althia.org/mythia#app', name: 'Mythia', url: 'https://althia.org/mythia' } },
      { '@type': 'ListItem', position: 2, item: { '@id': 'https://althia.org/senthia#app', name: 'Senthia', url: 'https://althia.org/senthia' } },
    ] },
  }
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavLight />
      <section className={styles.hero} aria-labelledby="home-title">
        <Image className={styles.heroImage} src="/senthia/meadow.jpg" alt="" fill priority sizes="100vw" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>An independent audio studio</p>
          <h1 id="home-title">Althia</h1>
          <p className={styles.heroLine}>A little more room<br />for your mind.</p>
          <p className={styles.heroDescription}>Stories to rest with. Places to escape into.<br />Audio apps for sleep, relaxation, and reflection.</p>
          <Link className={styles.button} href="#apps">Find your quiet <span aria-hidden="true">↓</span></Link>
        </div>
        <p className={styles.artCredit}>A glimpse of Summer Meadow, from Senthia</p>
      </section>
      <section id="apps" className={styles.apps} aria-labelledby="apps-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Made for your quieter moments</p><h2 id="apps-title">Two ways to wander.</h2></div><p>Choose a story.<br />Or simply somewhere to be.</p></div>
        <div className={styles.appGrid}>
          <article className={`${styles.app} ${styles.mythia}`}>
            <div className={styles.appTop}><Image src="/logos/mythia-logo.png" alt="" width={64} height={64} /><span>Available on iOS</span></div>
            <p className={styles.eyebrow}>Mythology · Sleep</p><h3>Mythia</h3><p className={styles.appTagline}>Sleep inside a myth.</p>
            <p className={styles.appDescription}>Ancient worlds, gently told. Settle into hundreds of bedtime stories drawn from ten world mythologies, from the heights of Olympus to the forests of the north.</p>
            <ul className={styles.appFacts}><li>10–15 minute stories</li><li>English</li><li>No ads</li></ul>
            <div className={styles.actions}><a className={styles.button} href={MYTHIA} target="_blank" rel="noopener noreferrer">Download Mythia <span aria-hidden="true">↗</span></a><Link className={styles.textLink} href="/mythia">Explore Mythia <span aria-hidden="true">→</span></Link></div>
          </article>
          <article className={`${styles.app} ${styles.senthia}`}>
            <div className={styles.appTop}><Image src="/logos/senthia-logo.png" alt="" width={64} height={64} /><span>Available on iOS</span></div>
            <p className={styles.eyebrow}>Guided imagination · Relaxation</p><h3>Senthia</h3><p className={styles.appTagline}>A little room for you.</p>
            <p className={styles.appDescription}>A sunlit meadow. A hidden pool. A cabin in the snow. Follow a voice into vivid, imagined places, with time to notice the small things and settle into the moment.</p>
            <ul className={styles.appFacts}><li>10–18 minute journeys</li><li>English &amp; Spanish</li><li>No ads</li></ul>
            <div className={styles.actions}><a className={styles.button} href={SENTHIA} target="_blank" rel="noopener noreferrer">Download Senthia <span aria-hidden="true">↗</span></a><Link className={styles.textLink} href="/senthia">Explore Senthia <span aria-hidden="true">→</span></Link></div>
          </article>
        </div>
        <div className={styles.upcoming}><Image src="/logos/ethia-logo.png" alt="" width={40} height={40} /><p><strong>On the horizon: Ethia.</strong> Calm explorations of history and culture. In development.</p><Link href="/about">Meet the studio <span aria-hidden="true">→</span></Link></div>
      </section>
      <section className={styles.listen} aria-labelledby="listen-title"><div className={styles.listenInner}>
        <div><p className={styles.eyebrow}>A moment with Mythia</p><h2 id="listen-title">Let the day<br />end in a story.</h2><p>Hear a little of what awaits. A gentle voice,<br className={styles.desktopBreak} /> an ancient story, and nowhere else to be.</p></div>
        <div className={styles.player}><Image src="/logos/mythia-logo.png" alt="" width={52} height={52} /><div><h3>A taste of Mythia</h3><p>Bedtime audio preview</p></div><audio controls preload="none" aria-label="Listen to a Mythia bedtime story sample" src="/audio/preview.wav">Your browser does not support audio. <a href="/audio/preview.wav">Listen to the sample.</a></audio><Link href="/mythia/greek-mythology-sleep-stories">Discover the Greek collection <span aria-hidden="true">→</span></Link></div>
      </div></section>
      <section className={styles.places} aria-labelledby="places-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Inside Senthia</p><h2 id="places-title">Where would you like to be?</h2></div><Link className={styles.textLink} href="/senthia#journeys">Explore the journeys <span aria-hidden="true">→</span></Link></div>
        <div className={styles.placeGrid}>{[
          ['meadow', 'Summer Meadow', 'Warm sunlight. A path through the grasses.'],
          ['cenote', 'Hidden Cenote', 'Still water. A world beneath the leaves.'],
          ['cabin', 'Snow Cabin', 'A fire inside. Snow beyond the window.'],
        ].map(([image, name, description]) => <Link key={image} href="/senthia#journeys" className={styles.place}><div className={styles.placeImage}><Image src={`/senthia/${image}.jpg`} alt={`${name}, an illustrated setting from Senthia`} fill sizes="(max-width: 640px) 90vw, 33vw" /></div><h3>{name} <span aria-hidden="true">↗</span></h3><p>{description}</p></Link>)}</div>
      </section>
      <section id="philosophy" className={styles.philosophy}><div><p className={styles.eyebrow}>The thought behind Althia</p><h2>Made with care.<br />Listened to at your pace.</h2></div><div><p>We believe a few minutes of listening can be a lovely part of your day. A story before sleep. An imagined place in the middle of a busy afternoon. Something that gives your attention a place to rest.</p><p>We use AI in writing, adaptation, and narration, with human creative direction shaping the work. The choices matter: the traditions we draw from, the words we keep, and how it feels to listen.</p><Link className={styles.textLink} href="/about">More about our approach <span aria-hidden="true">→</span></Link></div></section>
      <section className={styles.faq} aria-labelledby="questions-title"><div><p className={styles.eyebrow}>Before you begin</p><h2 id="questions-title">A few good questions.</h2><Link className={styles.textLink} href="/facts">All the details <span aria-hidden="true">→</span></Link></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<p className={styles.help}>Something else on your mind? <a href="mailto:althiastudios@gmail.com">Get in touch.</a></p></div></section>
      <Footer variant="light" />
    </main>
  )
}
