import type { Metadata } from 'next'
import MythiaContent from './MythiaContent'

export const metadata: Metadata = {
  title: 'Mythia – Sleep Inside a Myth | Bedtime Stories App',
  description: 'Mythia is a bedtime audio app that brings ancient mythology to sleep. Choose from Greek, Norse, Egyptian, and Slavic stories — 20–35 minutes each, no ads, designed to help you fall asleep.',
  keywords: ['mythology bedtime stories', 'sleep stories app', 'greek mythology for sleep', 'norse mythology stories', 'bedtime audio app', 'mythology audiobook', 'ancient myths for sleep', 'sleep app'],
  openGraph: {
    title: 'Mythia – Sleep Inside a Myth',
    description: 'Ancient stories from Greece, the Norse world, Egypt, and the Slavic forests — narrated for the end of your day.',
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
    description: 'Ancient mythology. 20–35 minutes. Free to download.',
    images: ['https://althia.org/mythia-og.jpg'],
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://althia.org/mythia' },
}

export default function MythiaPage() {
  return <MythiaContent />
}
