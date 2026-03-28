'use client'

import Link from 'next/link'
import NavDark from '@/components/NavDark'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

const mythologyWorlds = [
  {
    name: 'Greek',
    title: 'Olympus',
    description: 'Gods who love, scheme, and suffer like humans, only with the power to unmake the world.',
    primary: '#D6C6A5',
    glow: 'rgba(214, 198, 165, 0.08)',
    active: true,
  },
  {
    name: 'Norse',
    title: 'The Nine Realms',
    description: 'Stark, fated, and shot through with a beauty that knows the ice is always coming.',
    primary: '#8FAFC1',
    glow: 'rgba(143, 175, 193, 0.08)',
    active: true,
  },
  {
    name: 'Egyptian',
    title: 'By the Nile',
    description: 'Ancient and unhurried, where gods are natural forces and death is just another cycle of the river.',
    primary: '#E4C997',
    glow: 'rgba(228, 201, 151, 0.08)',
    active: true,
  },
  {
    name: 'Slavic',
    title: 'Forest & Folk',
    description: 'Forest-dark and folk-warm, where magic lives in the roots of things and grandmothers know more than kings.',
    primary: '#C7A07A',
    glow: 'rgba(199, 160, 122, 0.08)',
    active: true,
  },
  {
    name: 'Japanese',
    title: 'Kami & Spirit',
    description: 'Precise and strange, where spirits live in silence and beauty is found in impermanence.',
    primary: '#E9E6DF',
    glow: 'rgba(233, 230, 223, 0.08)',
    active: false,
  },
  {
    name: 'Celtic',
    title: 'The Otherworld',
    description: 'A world where the veil between living and otherworld is thin enough to walk through sideways.',
    primary: '#A8B5A0',
    glow: 'rgba(168, 181, 160, 0.08)',
    active: false,
  },
]

const flowSteps = [
  {
    number: '1',
    title: 'Choose your world',
    description: 'Start with Greek, Norse, Egyptian, or Slavic mythology. New mythologies coming soon.',
  },
  {
    number: '2',
    title: 'Pick your story',
    description: 'Browse stories curated for sleep. Read the synopsis and choose what calls to you.',
  },
  {
    number: '3',
    title: 'Fall asleep',
    description: 'Settle in. A warm voice takes you into ancient worlds. Most listeners sleep before the end.',
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
    title: '20–35 minutes',
    description: 'Long enough to carry you to sleep. Short enough to feel like a complete story.',
  },
  {
    title: 'No surprises',
    description: 'No cliffhangers. No jump scares. Every story ends in resolution and calm.',
  },
]


const faqs = [
  {
    q: 'Is Mythia free?',
    a: 'Mythia is free to download with select stories. Access the full library of 45+ Greek stories and growing collections from Norse, Egyptian, and Slavic traditions with a subscription.',
  },
  {
    q: 'What mythologies are available?',
    a: 'Mythia features stories from Greek, Norse, Egyptian, and Slavic traditions. Japanese and Celtic mythologies are coming soon.',
  },
  {
    q: 'How long are the stories?',
    a: 'All stories in Mythia are 20–35 minutes long, designed for a single sleep cycle. Most listeners fall asleep before the story ends.',
  },
  {
    q: 'Do the stories have cliffhangers?',
    a: 'No. Every story in Mythia ends in complete resolution. No cliffhangers, no jump scares — just gentle, unhurried storytelling.',
  },
]

export default function MythiaContent() {
  const [visible, setVisible] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-fade-in')
            if (id) {
              setVisible((prev) => new Set(prev).add(id))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-fade-in]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visible.has(id)

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Mythia',
    description: 'A bedtime audio app featuring ancient mythology stories from Greece, the Norse world, Egypt, and the Slavic forests.',
    url: 'https://althia.org/mythia',
    applicationCategory: 'HealthAndFitnessApplication',
    operatingSystem: 'iOS',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Althia', url: 'https://althia.org' },
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

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Althia',
    url: 'https://althia.org',
    description: 'Althia builds audio apps rooted in mythology, philosophy, and the ancient world — designed for sleep and reflection.',
    contactPoint: { '@type': 'ContactPoint', email: 'support@althia.org' },
  }

  return (
    <main className="bg-[#0A0A0A] text-[#C4B49A]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />

      <NavDark />

      {/* Hero Section */}
      <section className="min-h-[95vh] flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(241, 224, 181, 0.15) 0%, rgba(241, 224, 181, 0.08) 35%, transparent 70%)',
            width: '600px',
            height: '600px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
          {/* Mythia App Icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/mythia-logo.png"
            alt="Mythia"
            width={88}
            height={88}
            className="object-cover rounded-[20px]"
            style={{ boxShadow: '0 8px 32px rgba(241, 224, 181, 0.15)' }}
          />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4B896]">
            An App by Althia
          </p>

          <h1
            className="text-[44px] md:text-[72px] leading-[1.1] text-[#F5F0E8]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Sleep inside a myth.
          </h1>

          <p className="text-[18px] text-[#C4B49A] max-w-2xl leading-[1.8]">
            Ancient stories from Greece, the Norse world, Egypt, and the Slavic forests — narrated for the end of your day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F5F0E8] text-[#0A0A0A] rounded-xl font-semibold transition-all hover:bg-[#F1E0B5] hover:translate-y-[-2px]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
            <a
              href="#preview"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#F1E0B5] text-[#F1E0B5] rounded-full font-semibold transition-all hover:bg-[rgba(241,224,181,0.1)] hover:border-[#F5F0E8]"
            >
              Listen to a preview
            </a>
          </div>

          <p className="text-xs text-[#C4B896] tracking-[1px]">
            <span className="inline-block mx-3">Free to download</span>
            <span>·</span>
            <span className="inline-block mx-3">No ads</span>
          </p>

          {/* Scroll Indicator */}
          <div className="mt-12 relative">
            <div
              className="w-6 h-6 border-2 border-[rgba(241,224,181,0.3)] rounded-full relative"
              style={{ animation: 'pulse-scroll 2s infinite' }}
            >
              <div
                className="absolute w-[2px] h-2 bg-[#F1E0B5] top-[6px] left-1/2 transform -translate-x-1/2 rounded-[1px]"
                style={{ animation: 'scroll-dot 2s infinite' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Mythia Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="grid grid-cols-1 gap-12"
            data-fade-in="what-is"
            style={{
              opacity: isVisible('what-is') ? 1 : 0,
              transform: isVisible('what-is') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            <div>
              <h2
                className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-8 leading-[1.2]"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What is Mythia?
              </h2>

              <div className="space-y-6">
                <p className="text-base text-[#F1E0B5] font-medium">
                  Mythia is a bedtime audio app that brings ancient mythology to life through immersive storytelling.
                </p>

                <div className="bg-[rgba(241,224,181,0.05)] border border-[rgba(241,224,181,0.12)] rounded-2xl p-6">
                  <p className="text-base text-[#C4B49A] leading-[1.8]">
                    Each story is 20–35 minutes long, carefully paced to help you fall asleep. No cliffhangers, no surprises—just gentle storytelling that honors the cultural traditions it comes from.
                  </p>
                </div>

                <div className="bg-[rgba(241,224,181,0.05)] border border-[rgba(241,224,181,0.12)] rounded-2xl p-6">
                  <p className="text-base text-[#C4B49A] leading-[1.8]">
                    Choose your mythology and your mood. A single, warm narrator guides you through tales of gods, monsters, heroes, and the forces that shaped ancient understanding of the world.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mythology Worlds Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-16 text-center leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Worlds to explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {mythologyWorlds.map((world) => (
              <div
                key={world.name}
                className={`rounded-2xl p-8 relative overflow-hidden transition-all ${world.active ? 'hover:translate-y-[-4px]' : 'opacity-70'}`}
                style={{
                  backgroundColor: '#1A1A1A',
                  borderTop: `4px solid ${world.primary}`,
                  border: `1px solid ${world.primary}`,
                  borderTopWidth: '4px',
                  backgroundImage: `radial-gradient(circle at top, ${world.glow} 0%, transparent 60%)`,
                }}
                data-fade-in={`world-${world.name.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C4B896]">
                    {world.name}
                  </p>
                  {!world.active && (
                    <span className="text-[10px] border border-[rgba(241,224,181,0.25)] text-[#C4B896] px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3
                  className="text-2xl text-[#F5F0E8] mb-4"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {world.title}
                </h3>
                <p className="text-sm text-[#C4B49A] leading-[1.8]">
                  {world.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-20 text-center leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            How a Mythia night works
          </h2>

          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="text-center"
                data-fade-in={`flow-step-${idx}`}
                style={{
                  opacity: isVisible(`flow-step-${idx}`) ? 1 : 0,
                  transform: isVisible(`flow-step-${idx}`) ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(241, 224, 181, 0.2) 0%, rgba(241, 224, 181, 0.08) 100%)',
                    border: '1px solid rgba(241, 224, 181, 0.25)',
                    color: '#F1E0B5',
                    fontFamily: '"Playfair Display", Georgia, serif',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl text-[#F5F0E8] mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#C4B49A] leading-[1.7]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-7 border"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(241, 224, 181, 0.12)',
                }}
                data-fade-in={`feature-${idx}`}
              >
                <h3
                  className="text-lg text-[#F1E0B5] mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#C4B49A] leading-[1.7]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="py-24 px-6 flex flex-col items-center text-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F1E0B5] to-transparent mb-12" />
        <blockquote
          className="text-[28px] md:text-[44px] italic text-[#F5F0E8] max-w-2xl leading-[1.4]"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          &ldquo;Close your eyes. The gods are still awake.&rdquo;
        </blockquote>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#F1E0B5] to-transparent mt-12" />
      </section>

      {/* Growing Library Stats */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-4 leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            A growing library of ancient stories
          </h2>
          <p className="text-base text-[#C4B49A] mb-12 max-w-2xl mx-auto">
            45+ Greek stories now available. Norse, Egyptian, and Slavic collections growing. New stories added regularly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['45+ Greek stories', '4 mythologies', '20–35 min each', 'New stories weekly'].map((stat) => (
              <div
                key={stat}
                className="border rounded-full px-5 py-3 text-sm font-medium"
                style={{ borderColor: 'rgba(241, 224, 181, 0.2)', color: '#F1E0B5' }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-12 text-center leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl p-6 border cursor-pointer transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(241, 224, 181, 0.12)',
                }}
              >
                <summary className="flex justify-between items-center font-semibold text-[#F1E0B5] text-base list-none">
                  {faq.q}
                  <span className="transform transition-transform group-open:rotate-180 text-xs">▼</span>
                </summary>
                <p className="text-sm text-[#C4B49A] leading-[1.8] mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Part of Althia */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-4 leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Part of Althia.
          </h2>
          <p className="text-base text-[#C4B49A] leading-relaxed mb-8">
            Mythia is the first app from Althia — a studio building narrative experiences for the contemplative mind. History, meditation, and more are coming.
          </p>
          <Link
            href="/"
            className="inline-flex text-[#F1E0B5] font-semibold text-sm border-b-2 border-[#F1E0B5] transition-all hover:border-[#F5F0E8]"
          >
            Explore Althia →
          </Link>
        </div>
      </section>

      {/* Final Download CTA */}
      <section id="download" className="py-24 px-6 text-center" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[32px] md:text-[56px] text-[#F5F0E8] mb-4 leading-[1.2]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Begin your mythology tonight.
          </h2>
          <p className="text-base text-[#C4B49A] mb-12">
            Free to download. No ads. Stories added every week.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#F5F0E8] text-[#0A0A0A] rounded-xl font-semibold transition-all hover:bg-[#F1E0B5] hover:translate-y-[-2px] mb-4"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
          <p className="text-xs text-[#C4B896]">
            Requires iOS 16 or later · New stories added regularly
          </p>
        </div>
      </section>

      <Footer variant="dark" showMythiaNote={true} />
    </main>
  )
}
