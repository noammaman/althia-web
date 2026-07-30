import type { Metadata } from 'next'
import PapayaBrief from './PapayaBrief'

export const metadata: Metadata = {
  title: 'Payments GTM — Working notes | Noam Maman',
  description:
    'Working notes on how I’d approach the Payments GTM role — separating what’s publicly knowable from what internal data would confirm.',
  // Unlisted: this is a personal interview brief, not public marketing.
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://althia.org/papaya' },
}

export default function PapayaPage() {
  return <PapayaBrief />
}
