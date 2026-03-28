import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Althia — Stories for the Ancient Mind',
  description: 'Althia builds audio apps rooted in mythology, philosophy, and the ancient world — designed for sleep, reflection, and the contemplative mind.',
  keywords: 'mythology apps, bedtime stories, sleep stories, ancient myths, audio storytelling, mythology sleep app',
  openGraph: {
    type: 'website',
    url: 'https://althia.org',
    title: 'Althia — Stories for the Ancient Mind',
    description: 'Stories that have survived millennia, reimagined for how you rest.',
    images: [
      {
        url: 'https://althia.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Althia — Stories from mythology reimagined for sleep',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Althia — Stories for the Ancient Mind',
    description: 'Stories that have survived millennia, reimagined for how you rest.',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Althia',
    description: 'Althia builds audio apps rooted in mythology, philosophy, and the ancient world — designed for sleep, reflection, and the contemplative mind.',
    url: 'https://althia.org',
    logo: 'https://althia.org/logos/althia-logo-dark.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@althia.org',
    },
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFCFA' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NavLight />

      {/* Hero Section */}
      <section
        className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden"
        style={{ backgroundColor: '#FDFCFA' }}
      >
        <div className="flex flex-col items-center gap-8 max-w-3xl relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/althia-logo-dark.png"
            alt="Althia"
            width={80}
            height={80}
            className="object-contain rounded-2xl"
          />
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#666666] mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Stories for the Ancient Mind
          </p>

          <h1
            className="text-[2.25rem] md:text-[3.75rem] leading-tight text-[#111111]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Stories that have survived millennia, reimagined for how you rest.
          </h1>

          <p
            className="text-[1.125rem] text-[#444444] max-w-2xl leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Althia builds audio apps that draw from mythology, philosophy, and the ancient world — designed for sleep, reflection, and the contemplative mind.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link
              href="#apps"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#111111] text-white rounded-full font-semibold transition-all hover:bg-[#333333] hover:translate-y-[-2px]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              Explore Mythia →
            </Link>
            <Link
              href="#philosophy"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#111111] text-[#111111] rounded-full font-semibold transition-all hover:bg-[#F5F5F5]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              Our Approach ↓
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" color="#111111">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Our Apps
          </p>

          <h2
            className="text-[1.875rem] md:text-[2.5rem] text-[#111111] mb-16 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Apps for the Contemplative Mind
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mythia - Featured */}
            <div
              className="rounded-3xl p-10 transition-all duration-300 hover:translate-y-[-4px] flex flex-col border-2"
              style={{
                backgroundColor: 'linear-gradient(135deg, #FDFCFA 0%, rgba(241, 224, 181, 0.15) 100%)',
                background: 'linear-gradient(135deg, #FDFCFA 0%, rgba(241, 224, 181, 0.15) 100%)',
                borderColor: 'rgba(139, 105, 20, 0.2)',
                boxShadow: '0 8px 32px rgba(139, 105, 20, 0.08)',
              }}
            >
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/mythia-logo.png"
                  alt="Mythia lyre icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8B6914] mb-3">
                Mythology · Sleep
              </p>

              <h3
                className="text-2xl text-[#111111] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Mythia
              </h3>

              <p className="text-base text-[#444444] leading-relaxed flex-grow mb-6">
                Bedtime stories drawn from Greek, Norse, Egyptian, and Slavic mythology. Fall asleep to the tales that shaped civilizations.
              </p>

              <Link
                href="/mythia"
                className="text-[#8B6914] font-semibold text-sm inline-flex items-center gap-1 transition-all hover:gap-2"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
              >
                Explore Mythia →
              </Link>
            </div>

            {/* Ethia - Coming Soon */}
            <div
              className="rounded-3xl p-10 flex flex-col border-2 opacity-75"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E5E5',
              }}
            >
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/ethia-logo.png"
                  alt="Ethia vase icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#999999] mb-3">
                History · Culture
              </p>

              <h3
                className="text-2xl text-[#111111] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Ethia
              </h3>

              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.1em] bg-[#F5F5F5] text-[#666666] px-3 py-1 rounded-md mb-4 w-fit"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
              >
                Coming 2026
              </span>

              <p className="text-base text-[#444444] leading-relaxed flex-grow mb-6">
                Calm explorations of history&apos;s most compelling moments, told with precision and care for cultural context.
              </p>

              <span className="text-sm text-[#666666]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
                Coming Soon
              </span>
            </div>

            {/* Senthia - Coming Soon */}
            <div
              className="rounded-3xl p-10 flex flex-col border-2 opacity-75"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E5E5',
              }}
            >
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/senthia-logo.png"
                  alt="Senthia leaf icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#999999] mb-3">
                Meditation · Contemplation
              </p>

              <h3
                className="text-2xl text-[#111111] mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Senthia
              </h3>

              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.1em] bg-[#F5F5F5] text-[#666666] px-3 py-1 rounded-md mb-4 w-fit"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
              >
                Coming 2027
              </span>

              <p className="text-base text-[#444444] leading-relaxed flex-grow mb-6">
                Guided contemplative experiences for stillness and clarity, drawing wisdom from philosophical traditions.
              </p>

              <span className="text-sm text-[#666666]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6" style={{ backgroundColor: '#FDFCFA' }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#666666] mb-4"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Our Approach
          </p>

          <h2
            className="text-[1.875rem] md:text-[2.5rem] text-[#111111] mb-12 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            What we care about
          </h2>

          <div className="space-y-6">
            <p
              className="text-base text-[#444444] leading-relaxed"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              Althia exists because the best stories ever told — myths, parables, the narratives civilizations were built on — deserve a place in your evening. We curate from the source traditions, adapt with care for cultural context, and design every experience around a single purpose: helping you rest well.
            </p>

            <p
              className="text-base text-[#444444] leading-relaxed"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              We use modern tools, including AI, to bring these ancient stories to life at a pace and scale that wouldn&apos;t otherwise be possible. What stays human is the taste — what gets made, how traditions are honored, and the standard every story is held to before it reaches your ears.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[1.875rem] md:text-[2.5rem] text-[#111111] mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Begin with the oldest stories.
          </h2>

          <p
            className="text-base text-[#444444] mb-8"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Mythia is free to download on iOS and Android.
          </p>

          <Link
            href="/mythia"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#111111] text-white rounded-full font-semibold transition-all hover:bg-[#333333] hover:translate-y-[-2px]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Download Mythia
          </Link>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
