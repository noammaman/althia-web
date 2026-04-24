import type { Metadata } from 'next'
import Link from 'next/link'
import NavDark from '@/components/NavDark'
import Footer from '@/components/Footer'

const canonical = 'https://althia.org/mythia/greek-mythology-sleep-stories'
const ogImage = 'https://althia.org/mythia-og.jpg'
const APP_STORE_URL = 'https://apps.apple.com/il/app/mythia-stories/id6760155082'

export const metadata: Metadata = {
  title: {
    absolute: 'Greek Mythology Sleep Stories — Mythia by Althia',
  },
  description:
    'Ancient Greek myths retold for sleep. Gods, heroes, and monsters narrated in a calm voice with atmospheric soundscapes. Hundreds of stories in the Mythia app.',
  keywords: [
    'greek mythology sleep stories',
    'greek mythology bedtime stories',
    'mythology sleep stories',
    'greek myths for sleep',
    'Mythia',
    'bedtime stories adults',
  ],
  openGraph: {
    title: 'Greek Mythology Sleep Stories — Mythia by Althia',
    description:
      'Ancient Greek myths retold for sleep. Gods, heroes, and monsters narrated in a calm voice with atmospheric soundscapes.',
    type: 'website',
    url: canonical,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greek Mythology Sleep Stories — Mythia by Althia',
    description:
      'Ancient Greek myths retold for sleep. Gods, heroes, and monsters narrated in a calm voice with atmospheric soundscapes.',
    images: [ogImage],
  },
  robots: 'index, follow',
  alternates: { canonical },
}

export default function GreekMythologySleepStoriesPage() {
  return (
    <main
      className="bg-[#0A0A0A] text-[#C4B49A] min-h-screen"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
    >
      <NavDark />

      <article className="py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/mythia"
            className="text-sm mb-8 inline-block text-[rgba(241,224,181,0.6)] transition-colors hover:text-[#F1E0B5]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            ← Back to Mythia
          </Link>

          <h1
            className="text-[2rem] md:text-[2.75rem] text-[#F5F0E8] mb-8 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Greek Mythology Sleep Stories
          </h1>

          <div className="space-y-6 text-base leading-[1.8]">
            <p>
              The Greeks told stories about gods who loved badly, heroes who suffered for knowledge, and monsters born
              from the earth&apos;s oldest grief. These are not children&apos;s stories. They are the narratives a
              civilization used to explain desire, loss, fate, and what it means to be mortal in a world run by
              immortals.
            </p>
            <p className="text-[#F1E0B5] font-medium">Mythia retells these stories for the end of your day.</p>
          </div>

          <h2
            className="text-[1.5rem] md:text-[2rem] text-[#F5F0E8] mt-14 mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Stories built for sleep
          </h2>
          <div className="space-y-6 text-base leading-[1.8]">
            <p>
              Each Greek story in Mythia runs 11–18 minutes. The pacing is slow and deliberate — no cliffhangers, no
              sudden turns. A single warm voice carries you through, with atmospheric sound design that shifts between
              three modes: Temple, Hearth, or Voice Only.
            </p>
            <p>You choose the atmosphere. The story does the rest.</p>
          </div>

          <h2
            className="text-[1.5rem] md:text-[2rem] text-[#F5F0E8] mt-14 mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            What you&apos;ll hear
          </h2>
          <div className="space-y-6 text-base leading-[1.8]">
            <p>
              The Greek collection spans the full breadth of the tradition. Olympus and its politics. The Titans before
              them. Odysseus finding his way home. Orpheus descending for love. Persephone crossing between worlds.
              Prometheus paying for what he gave us.
            </p>
            <p>
              These aren&apos;t summaries or retellings stripped of weight. The drama stays. The moral complexity stays.
              What changes is the pace — slowed, softened, shaped for the moment between waking and sleep.
            </p>
          </div>

          <h2
            className="text-[1.5rem] md:text-[2rem] text-[#F5F0E8] mt-14 mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            A library that keeps growing
          </h2>
          <p className="text-base leading-[1.8]">
            Mythia&apos;s Greek collection spans the full tradition — from the birth of the gods to the journeys of
            mortals who walked among them. The library now includes 110 Greek stories, including eight epic journey
            series.
          </p>

          <h2
            className="text-[1.5rem] md:text-[2rem] text-[#F5F0E8] mt-14 mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Why mythology works for sleep
          </h2>
          <div className="space-y-6 text-base leading-[1.8]">
            <p>
              Myths follow patterns your mind already knows — the journey, the descent, the return. There are no twists
              designed to keep you awake. The endings resolve. The rhythm is ancient and unhurried. Your mind can follow
              the thread without gripping it.
            </p>
            <p>
              This is what makes mythology different from fiction written for entertainment. These stories were told
              around fires, at the edge of sleep, for thousands of years before anyone wrote them down.
            </p>
          </div>

          <h2
            className="text-[1.5rem] md:text-[2rem] text-[#F5F0E8] mt-14 mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Try Mythia tonight
          </h2>
          <p className="text-base leading-[1.8] mb-10">
            Mythia is free to download on iOS. The Greek mythology collection is fully live alongside nine other world
            mythologies.
          </p>
        </div>
      </article>

      <section id="download" className="py-24 px-6 text-center" style={{ backgroundColor: '#131110' }}>
        <div className="max-w-2xl mx-auto">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#F5F0E8] text-[#0A0A0A] rounded-xl font-semibold transition-all hover:bg-[#F1E0B5] hover:translate-y-[-2px]"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
          <p className="text-xs text-[#C4B896] mt-4">Requires iOS 16 or later</p>
        </div>
      </section>

      <Footer variant="dark" showMythiaNote={true} />
    </main>
  )
}
