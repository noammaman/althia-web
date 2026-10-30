import type { Metadata } from 'next'
import Prospectus from './Prospectus'
export const metadata: Metadata = {
  title: { absolute: 'Figleaf — Every place has layers' },
  description: 'AI-personalized visits built on evolving place-based context, with offline conversation and visitor insights for managed sites.',
  alternates: { canonical: '/figleaf' },
  robots: { index: false, follow: false },
  icons: { icon: '/logos/figleaf-logo.png', apple: '/logos/figleaf-logo.png' },
  twitter: { images: ['/logos/figleaf-logo.png'], title: 'Figleaf — Every place has layers', description: 'An independent concept prospectus for place-based exploration.' },
  openGraph: { siteName: 'Figleaf', title: 'Figleaf — Every place has layers', description: 'Explore personalized journeys, expert context, offline Q&A, and visitor insights for parks, museums, and heritage sites.', url: 'https://althia.org/figleaf', images: ['/logos/figleaf-logo.png'] },
}
export default function Page() { return <Prospectus /> }
