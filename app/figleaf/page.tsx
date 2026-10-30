import type { Metadata } from 'next'
import Prospectus from './Prospectus'
export const metadata: Metadata = {
  title: { absolute: 'Figleaf — Every place has layers' },
  description: 'An interactive concept prospectus for a location-aware heritage guide and the institutions that shape it.',
  alternates: { canonical: '/figleaf' },
  robots: { index: false, follow: false },
  icons: { icon: '/logos/figleaf-logo.png', apple: '/logos/figleaf-logo.png' },
  twitter: { images: ['/logos/figleaf-logo.png'], title: 'Figleaf — Every place has layers', description: 'An independent concept prospectus for place-based exploration.' },
  openGraph: { siteName: 'Figleaf', title: 'Figleaf — Every place has layers', description: 'Explore the visitor experience, curator workspace, and questions behind a new heritage concept.', url: 'https://althia.org/figleaf', images: ['/logos/figleaf-logo.png'] },
}
export default function Page() { return <Prospectus /> }
