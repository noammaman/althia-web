'use client'

import Link from 'next/link'
import Image from 'next/image'
import NavDark from '@/components/NavDark'
import styles from '@/components/product.module.css'
import Footer from '@/components/Footer'
import { useEffect, useRef, useState, useCallback } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/il/app/mythia-stories/id6760155082'

const mythologyWorlds = [
  {
    name: 'Greek',
    title: 'Olympus',
    description: 'Gods who love, scheme, and suffer like humans, only with the power to unmake the world.',
    primary: '#D6C6A5',
    glow: 'rgba(214, 198, 165, 0.08)',
  },
  {
    name: 'Norse',
    title: 'The Nine Realms',
    description: 'Stark, fated, and shot through with a beauty that knows the ice is always coming.',
    primary: '#8FAFC1',
    glow: 'rgba(143, 175, 193, 0.08)',
  },
  {
    name: 'Egyptian',
    title: 'By the Nile',
    description: 'Ancient and unhurried, where gods are natural forces and death is just another cycle of the river.',
    primary: '#E4C997',
    glow: 'rgba(228, 201, 151, 0.08)',
  },
  {
    name: 'Slavic',
    title: 'Forest & Folk',
    description: 'Forest-dark and folk-warm, where magic lives in the roots of things and grandmothers know more than kings.',
    primary: '#77A388',
    glow: 'rgba(119, 163, 136, 0.08)',
  },
  {
    name: 'Japanese',
    title: 'Kami & Spirit',
    description: 'Precise and strange, where spirits live in silence and beauty is found in impermanence.',
    primary: '#E9E6DF',
    glow: 'rgba(233, 230, 223, 0.08)',
  },
  {
    name: 'Celtic',
    title: 'The Otherworld',
    description: 'A world where the veil between living and otherworld is thin enough to walk through sideways.',
    primary: '#A8B5A0',
    glow: 'rgba(168, 181, 160, 0.08)',
  },
  {
    name: 'Hindu',
    title: 'Dharma & Devotion',
    description: 'Cycles within cycles — gods descend, demons rise, and the world is destroyed and remade in cosmic rhythm.',
    primary: '#D7A45B',
    glow: 'rgba(215, 164, 91, 0.08)',
  },
  {
    name: 'Mesopotamian',
    title: 'Between the Rivers',
    description: 'The oldest written stories — gods of clay and water, heroes seeking immortality, wisdom bought with sacrifice.',
    primary: '#7F94C8',
    glow: 'rgba(127, 148, 200, 0.08)',
  },
  {
    name: 'Mesoamerican',
    title: 'The Fifth Sun',
    description: 'Blood and maize, gods who gave themselves to create the world, time measured in sacred calendar rounds.',
    primary: '#5FAFB4',
    glow: 'rgba(95, 175, 180, 0.08)',
  },
  {
    name: 'West African',
    title: 'Spirit & Trickster',
    description: 'Orisha and Anansi, creation from the cosmic river, wisdom hidden in folktales, the world made through divine migration.',
    primary: '#8D9BC7',
    glow: 'rgba(141, 155, 199, 0.08)',
  },
]

const flowSteps = [
  {
    number: '1',
    title: 'Choose your world',
    description: 'Explore ten world mythologies and follow the tradition that matches your evening.',
  },
  {
    number: '2',
    title: 'Pick your story',
    description: 'Browse stories curated for sleep. Read the synopsis and choose what calls to you.',
  },
  {
    number: '3',
    title: 'Fall asleep',
    description: 'Settle in. A warm voice takes you into ancient worlds at an unhurried bedtime pace.',
  },
]

const features = [
  {
    title: 'Calm narration',
    description: 'A single, warm voice guides you through each story at a measured, unhurried pace.',
  },
  {
    title: 'Three audio modes',
    description: 'Temple, Hearth, or Voice Only. Each story scores differently — choose your atmosphere.',
  },
  {
    title: '10–15 minutes',
    description: 'A compact bedtime listen. Long enough to settle in, calm enough to carry you toward sleep.',
  },
  {
    title: 'No surprises',
    description: 'No cliffhangers. No jump scares. Every story ends in resolution and calm.',
  },
]


const faqs = [
  {
    q: 'Is Mythia free?',
    a: 'Mythia is free to download with select stories. Access the full library of hundreds of stories across ten mythologies with a subscription or one-time mythology packs.',
  },
  {
    q: 'What mythologies are available?',
    a: 'Mythia features stories from ten world mythologies: Greek, Norse, Egyptian, Slavic, Japanese, Celtic, Hindu, Mesopotamian, Mesoamerican, and West African — with more traditions planned.',
  },
  {
    q: 'How long are the stories?',
    a: 'Stories in Mythia are typically 10–15 minutes long, with measured pacing designed for bedtime listening.',
  },
  {
    q: 'Do the stories have cliffhangers?',
    a: 'No. Every story in Mythia ends in complete resolution. No cliffhangers, no jump scares — just gentle, unhurried storytelling.',
  },
  {
    q: 'Can mythology stories help you fall asleep?',
    a: 'Mythia is designed to make bedtime listening calm and easy to follow. Its stories use measured pacing, familiar narrative patterns, resolved endings, gentle narration, and no sudden surprises. It is a relaxation product, not a medical treatment or a guaranteed sleep aid.',
  },
  {
    q: 'What makes Mythia different from other sleep story apps?',
    a: 'Mythia focuses on mythology from ten cultural traditions, adapted as self-contained bedtime stories with warm narration and three listening modes. The stories are creative retellings, not scholarly or religious texts.',
  },
  {
    q: 'Is Mythia available on Android?',
    a: 'Mythia is currently available on iOS. There is no Android version available at this time. Contact althiastudios@gmail.com with questions about availability.',
  },
]

export default function MythiaContent() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState('')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setAudioError('')
      } catch {
        setAudioError('The preview could not play. Please try again.')
      }
    } else {
      audio.pause()
    }
  }, [])

  const handlePreviewClick = useCallback(() => {
    const el = document.getElementById('preview')
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    if (audioRef.current?.paused) void togglePlay()
  }, [togglePlay])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => {
      setCurrentTime(audio.currentTime)
    }
    const onMeta = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const onEnd = () => { setIsPlaying(false); setCurrentTime(0) }
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onError = () => { setIsPlaying(false); setAudioError('The preview could not load. Please try again later.') }
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', onError)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('error', onError)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': 'https://althia.org/mythia#app',
    name: 'Mythia',
    description: 'A bedtime audio app featuring hundreds of stories across ten world mythologies.',
    url: 'https://althia.org/mythia',
    applicationCategory: 'BookApplication',
    operatingSystem: 'iOS 15.1 or later',
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    image: 'https://althia.org/logos/mythia-logo.png',
    featureList: [
      'hundreds of mythology bedtime stories',
      'Ten world mythologies',
      '10–15 minute stories',
      'Temple, Hearth, and Voice Only listening modes',
      'No advertising',
    ],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@id': 'https://althia.org/#organization' },
    publisher: { '@id': 'https://althia.org/#organization' },
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <NavDark />
      <section className={`${styles.hero} ${styles.mythiaHero}`}>
        <Image className={styles.heroImage} src="/mythia/the-norns-at-urds-well.png" alt="" fill priority sizes="100vw" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Mythology for the end of your day</p>
          <h1>Mythia</h1>
          <p className={styles.tagline}>Sleep inside a myth.</p>
          <p className={styles.description}>Ancient worlds, gently told. Hundreds of bedtime stories from ten world mythologies, with a warm voice to carry you into the evening.</p>
          <div className={styles.actions}>
            <a className={styles.button} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download Mythia <span aria-hidden="true">↗</span></a>
            <button className={styles.textLink} onClick={handlePreviewClick}>Listen to a preview</button>
          </div>
          <p className={styles.small}>Available on iOS · Free to download · No ads</p>
        </div>
      </section>
      <div className={styles.facts}><span>Hundreds of stories</span><span>Ten world mythologies</span><span>10–15 minute listens</span><span>English narration</span></div>
      <section className={styles.section} id="preview">
        <div className={`${styles.wrap} ${styles.intro}`}>
          <div data-fade-in="what-is">
            <p className={styles.eyebrow}>Hear a little of it</p>
            <h2>A story to settle into.</h2>
            <p>Mythia is a bedtime audio app that brings ancient mythology to life. Unhurried narration, gentle sound, and endings that let you rest. No cliffhangers or sudden surprises.</p>
          </div>
          <div className={styles.player}>
            <audio ref={audioRef} src="/audio/preview.wav" preload="metadata" />
            <div className={styles.playerTop}>
              <Image src="/logos/mythia-logo.png" alt="" width={52} height={52} />
              <div><h3>A moment with Mythia</h3><p>A preview of the narration</p></div>
            </div>
            <div className={styles.controls}>
              <button className={styles.play} onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'} title={isPlaying ? 'Pause preview' : 'Play preview'}>
                <span aria-hidden="true">{isPlaying ? 'Ⅱ' : '▶'}</span>
              </button>
              <div className={styles.timeline}>
                <input type="range" min="0" max={duration || 1} step="0.1" value={currentTime} disabled={!duration}
                  aria-label="Preview playback position" aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
                  onChange={(event) => { const value = Number(event.target.value); if (audioRef.current) { audioRef.current.currentTime = value; setCurrentTime(value) } }} />
                <div className={styles.times}><span>{formatTime(currentTime)}</span><span>{duration ? formatTime(duration) : '--:--'}</span></div>
              </div>
            </div>
            {audioError && <p role="status">{audioError}</p>}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.tint}`}>
        <div className={styles.wrap}>
          <div className={styles.heading}><div><p className={styles.eyebrow}>A library of ancient worlds</p><h2>Where the evening takes you.</h2></div><p>Different traditions. Distinct imaginations. A gentler pace for every one.</p></div>
          <div className={styles.gallery}>
            <article><div className={styles.art}><Image src="/mythia/the-dance-of-eurynome.png" alt="Mythia artwork of Eurynome dancing above the waves" fill sizes="(max-width: 760px) 90vw, 360px" /></div><p className={styles.eyebrow}>Greek mythology</p><h3>The Dance of Eurynome</h3><p>Creation, movement, and the beginnings of a world.</p><Link className={styles.textLink} href="/mythia/greek-mythology-sleep-stories">Explore Greek sleep stories →</Link></article>
            <article><div className={styles.art}><Image src="/mythia/the-norns-at-urds-well.png" alt="Mythia artwork of the Norns beneath the world tree" fill sizes="(max-width: 760px) 90vw, 360px" /></div><p className={styles.eyebrow}>Norse mythology</p><h3>The Norns at Urd’s Well</h3><p>At the roots of the world tree, the threads of fate are tended.</p></article>
            <article><div className={styles.art}><Image src="/mythia/amaterasu-and-the-cave.png" alt="Mythia artwork of Amaterasu emerging from the cave" fill sizes="(max-width: 760px) 90vw, 360px" /></div><p className={styles.eyebrow}>Japanese mythology</p><h3>Amaterasu and the Cave</h3><p>A hidden sun, a gathering of spirits, and the return of light.</p></article>
          </div>
          <div className={styles.worlds}>{mythologyWorlds.map(world => <article key={world.name}><h3>{world.name} · {world.title}</h3><p>{world.description}</p></article>)}</div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Your evening, your atmosphere</p><h2>One small ritual.</h2>
          <div className={styles.steps}>{flowSteps.map(step => <article key={step.number}><span>0{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          <div className={styles.features}>{features.map(feature => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.tint}`}>
        <div className={styles.wrap}><div className={styles.faq}><p className={styles.eyebrow}>Before you settle in</p><h2>A few things to know.</h2>
          {faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        </div></div>
      </section>
      <section id="download" className={`${styles.section} ${styles.closing}`}>
        <div className={styles.wrap}>
          <Image src="/logos/mythia-logo.png" alt="" width={64} height={64} style={{ margin: '0 auto 24px', borderRadius: 14 }} />
          <h2>Let the day end with a story.</h2><p>Choose a world. Find a comfortable spot. The rest can wait.</p>
          <div className={styles.actions}><a className={styles.button} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download Mythia ↗</a><Link className={styles.textLink} href="/senthia">Discover Senthia →</Link></div>
          <p className={styles.small}>Free to download. Optional paid access. Requires iOS 15.1 or later.</p>
        </div>
      </section>
      <Footer variant="light" showMythiaNote />
    </main>
  )
}
