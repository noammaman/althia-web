import type { Metadata } from 'next'
import MythiaContent from './MythiaContent'

export const metadata: Metadata = {
  title: 'Mythia – Sleep Inside a Myth | Bedtime Stories App',
  description: 'Mythia is a bedtime audio app with 200+ stories across 10 world mythologies. Stories are 11–18 minutes each, ad-free, and designed to help you fall asleep.',
  keywords: ['mythology bedtime stories', 'greek mythology sleep stories', 'norse mythology bedtime app', 'mythology stories for sleep', 'bedtime stories for adults', 'ancient myths audio app', 'mythology audio stories', 'egyptian mythology sleep', 'slavic mythology stories'],
  openGraph: {
    title: 'Mythia – Sleep Inside a Myth',
    description: 'Ancient stories from 10 world mythologies — narrated for the end of your day.',
    type: 'website',
    url: 'https://althia.org/mythia',
    images: [
      {
        url: 'https://althia.org/mythia-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythia – Sleep Inside a Myth',
    description: 'Ancient mythology. 11–18 minutes. 200+ stories across 10 mythologies.',
    images: ['https://althia.org/mythia-og.jpg'],
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://althia.org/mythia' },
}

export default function MythiaPage() {
  return <MythiaContent />
}
