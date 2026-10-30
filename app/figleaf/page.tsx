import type { Metadata } from 'next'
import Prospectus from './Prospectus'
export const metadata: Metadata = {
  title: 'Figleaf — Every place has layers',
  description: 'An interactive concept prospectus for a location-aware heritage guide and the institutions that shape it.',
  alternates: { canonical: '/figleaf' },
  robots: { index: false, follow: false },
  openGraph: { title: 'Figleaf — Every place has layers', description: 'Explore the visitor experience, curator workspace, and questions behind a new heritage concept.', url: 'https://althia.org/figleaf', images: ['/logos/fig-logo-square.png'] },
}
export default function Page() { return <Prospectus /> }
