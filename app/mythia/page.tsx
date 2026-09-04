import type { Metadata } from 'next'
import MythiaContent from './MythiaContent'

export const metadata: Metadata = {
  title: 'Mythia – Sleep Inside a Myth | Bedtime Stories App',
  description: 'Mythia is a bedtime audio app with 200 stories across 10 world mythologies. Stories are 10–15 minutes each, ad-free, and designed for the end of your day.',
  openGraph: {
    title: 'Mythia – Sleep Inside a Myth',
    description: 'Ancient stories from 10 world mythologies — narrated for the end of your day.',
    type: 'website',
    url: 'https://althia.org/mythia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythia – Sleep Inside a Myth',
    description: 'Ancient mythology. 10–15 minutes. 200 stories across 10 mythologies.',
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://althia.org/mythia' },
}

export default function MythiaPage() {
  return <MythiaContent />
}
