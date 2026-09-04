import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://althia.org'),
  title: {
    default: 'Althia — Narrative Studio for Sleep & Reflection',
    template: '%s | Althia',
  },
  description: 'Althia is a narrative studio creating audio apps for sleep and reflection. Explore Mythia, our app of mythology, philosophy, and the ancient world.',
  authors: [{ name: 'Althia' }],
  creator: 'Althia',
  icons: {
    icon: '/logos/althia-logo-dark.png',
    apple: '/logos/althia-logo-dark.png',
  },
  openGraph: {
    siteName: 'Althia',
    locale: 'en_US',
    type: 'website',
    url: 'https://althia.org',
    title: 'Althia — Narrative Studio',
    description: 'Stories that have survived millennia, reimagined for how you rest.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Althia — Narrative Studio',
    description: 'Stories that have survived millennia, reimagined for how you rest.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://althia.org/#organization',
        name: 'Althia',
        description: 'A narrative studio creating audio apps for sleep and reflection, drawing from mythology, philosophy, and the ancient world.',
        url: 'https://althia.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://althia.org/logos/althia-logo-dark.png',
          width: 1024,
          height: 1024,
        },
        email: 'althiastudios@gmail.com',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'althiastudios@gmail.com',
          availableLanguage: 'English',
        },
        areaServed: 'Worldwide',
        knowsAbout: ['Mythology', 'Sleep stories', 'Audio storytelling', 'History', 'Philosophy'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://althia.org/#website',
        name: 'Althia',
        url: 'https://althia.org',
        publisher: { '@id': 'https://althia.org/#organization' },
        inLanguage: 'en',
      },
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
