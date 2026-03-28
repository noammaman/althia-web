import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Althia',
  description: 'Althia is a small studio making audio apps rooted in mythology, philosophy, and history — designed for sleep and reflection.',
  robots: 'index, follow',
}

export default function AboutPage() {
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
            ← Back to Althia
          </Link>

          <h1
            className="text-[2rem] md:text-[2.75rem] text-[#111111] mb-12 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            About Althia
          </h1>

          <div
            className="space-y-6 text-base text-[#444444] leading-[1.8]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            <p>
              Althia is a small studio building audio apps rooted in the world&apos;s oldest narratives — mythology, philosophy, and history. Our first app, <Link href="/mythia" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">Mythia</Link>, turns ancient myths into bedtime stories designed for sleep.
            </p>

            <p>
              We started Althia because we noticed something missing. There are plenty of apps for white noise, rain sounds, and generic sleep content. But very few that offer real stories — the kind that civilizations were built on — adapted for the one moment of the day when your mind is actually open to them.
            </p>

            <p>
              We take the source material seriously. Greek myths arrive with their drama and moral complexity intact. Norse tales carry the weight of a world that knows it ends. Egyptian stories move to the rhythm of cycles and natural law. Slavic tales feel like something whispered at the edge of a forest. We don&apos;t flatten these traditions into one generic voice — each mythology gets its own treatment.
            </p>

            <p>
              We also believe in being transparent about how we work. We use AI as a core part of our production process — for writing, adaptation, and narration. What stays human is the creative direction: which stories get told, how each tradition is treated, the quality standard every piece is held to, and the overall experience design. We think this is the right way to bring a large library of culturally rich content to life without cutting corners on what matters.
            </p>

            <p>
              More apps are coming. Ethia will explore history. Senthia will focus on contemplative and meditative experiences. Each one follows the same principle: timeless source material, adapted with respect, designed around a specific moment in your day.
            </p>
          </div>

          <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E5E5E5' }}>
            <h2
              className="text-xl text-[#111111] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Get in touch
            </h2>
            <div
              className="space-y-3 text-base text-[#444444]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              <p>
                General inquiries: <a href="mailto:hello@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">hello@althia.org</a>
              </p>
              <p>
                Support: <a href="mailto:support@althia.org" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">support@althia.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
