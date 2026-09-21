import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

const APP_STORE_URL = 'https://apps.apple.com/il/app/mythia-stories/id6760155082'
const SOCIAL_IMAGE = '/opengraph-image'

export const metadata: Metadata = {
  title: 'Althia Facts — Studio, Products, and Contact',
  description:
    'A concise, maintained reference to Althia: what the studio makes, how Mythia works, current products, production approach, and official contact details.',
  alternates: { canonical: '/facts' },
  openGraph: {
    title: 'Althia Facts — Studio, Products, and Contact',
    description: 'A concise reference to Althia and Mythia, maintained by Althia.',
    url: 'https://althia.org/facts',
    type: 'article',
    images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: 'Althia — stories for the ancient mind' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Althia Facts — Studio, Products, and Contact',
    description: 'A concise reference to Althia and Mythia, maintained by Althia.',
    images: [SOCIAL_IMAGE],
  },
}

const facts = [
  ['What is Althia?', 'Althia is an independent narrative studio creating audio apps for sleep, reflection, and intentional attention. Its work draws from mythology, philosophy, and history.'],
  ['What is Mythia?', 'Mythia is Althia’s iOS bedtime-audio app. It retells ancient myths as calm, self-contained sleep stories.'],
  ['What does Mythia include?', 'Mythia currently offers 200 stories across ten mythological traditions. Stories generally run 10–15 minutes and offer Temple, Hearth, and Voice Only listening modes. The app also supports offline listening and read-along text.'],
  ['Who is Mythia for?', 'Mythia is designed for adults and other listeners who want a story-led alternative to white noise, generic meditation, or conventional sleep podcasts.'],
  ['Is Mythia free?', 'Mythia is free to download on iOS, contains no advertising, and offers optional paid access within the app.'],
  ['Does Althia use AI?', 'Yes. Althia uses AI in writing, adaptation, and narration. Human creative direction determines which stories are told, how traditions are treated, and the quality and experience standards.'],
  ['How can I contact Althia?', 'Use althiastudios@gmail.com for support and general inquiries.'],
] as const

export default function FactsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://althia.org/facts#page',
        url: 'https://althia.org/facts',
        name: 'Althia Facts — Studio, Products, and Contact',
        description: 'A concise reference to Althia and Mythia, maintained by Althia.',
        about: [
          { '@id': 'https://althia.org/#organization' },
          { '@id': 'https://althia.org/mythia#app' },
        ],
        isPartOf: { '@id': 'https://althia.org/#website' },
        dateModified: '2026-09-04',
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Althia', item: 'https://althia.org' },
          { '@type': 'ListItem', position: 2, name: 'Facts', item: 'https://althia.org/facts' },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFCFA' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavLight />
      <article className="py-20 md:py-24 px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xs font-semibold uppercase text-[#8B6914] mb-4" style={{ letterSpacing: '0.12em' }}>
            Maintained reference
          </p>
          <h1 className="text-[2.25rem] md:text-[3.25rem] text-[#111111] mb-5 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Althia facts
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed mb-4">
            A concise source of truth about Althia and its products, written for people, search engines, and answer systems.
          </p>
          <p className="text-sm text-[#777777] mb-14">Last reviewed September 4, 2026.</p>

          <dl className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {facts.map(([question, answer]) => (
              <div key={question} className="py-8">
                <dt className="text-xl text-[#111111] mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  {question}
                </dt>
                <dd className="text-base text-[#444444] leading-[1.8]">{answer}</dd>
              </div>
            ))}
          </dl>

          <section className="py-12">
            <h2 className="text-2xl text-[#111111] mb-5" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Official sources
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/mythia" className="text-[#8B6914] underline underline-offset-4">Mythia product page</Link>
              <Link href="/about" className="text-[#8B6914] underline underline-offset-4">About Althia</Link>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#8B6914] underline underline-offset-4">Mythia on the App Store</a>
              <a href="mailto:althiastudios@gmail.com" className="text-[#8B6914] underline underline-offset-4">Contact Althia</a>
            </div>
          </section>
        </div>
      </article>
      <Footer variant="light" />
    </main>
  )
}
