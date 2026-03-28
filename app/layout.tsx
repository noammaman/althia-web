import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://althia.org'),
  title: {
    default: 'Althia — Narrative Studio for Sleep & Reflection',
    template: '%s | Althia',
  },
  description: 'Althia is a narrative studio creating audio apps for sleep and reflection. Explore Mythia, our app of mythology, philosophy, and the ancient world.',
  keywords: ['mythology apps', 'bedtime stories', 'narrative studio', 'sleep stories', 'ancient myths', 'audio storytelling', 'sleep app', 'meditation'],
  authors: [{ name: 'Althia' }],
  creator: 'Althia',
  openGraph: {
    siteName: 'Althia',
    locale: 'en_US',
    type: 'website',
    url: 'https://althia.org',
    title: 'Althia — Narrative Studio',
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
    title: 'Althia — Narrative Studio',
    description: 'Stories that have survived millennia, reimagined for how you rest.',
    images: ['https://althia.org/og-image.png'],
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://althia.org' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Althia',
    description: 'A narrative studio creating audio apps for sleep and reflection, drawing from mythology, philosophy, and the ancient world.',
    url: 'https://althia.org',
    logo: 'https://althia.org/logos/althia-logo-dark.png',
    sameAs: [
      'https://twitter.com/althia',
      'https://instagram.com/althia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@althia.org',
    },
    foundingDate: '2024',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Mythology',
      'Sleep Stories',
      'Audiobooks',
      'Meditation',
      'Philosophy',
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
