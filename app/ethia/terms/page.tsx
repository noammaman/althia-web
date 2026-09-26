import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { LegalSection as Section } from '../LegalPage'
export const metadata: Metadata = { title: 'Ethia — Terms of Use', description: 'Terms governing the Ethia history reading and listening app.', alternates: { canonical: '/ethia/terms' } }
export default function Page(){return <LegalPage title="Ethia Terms of Use">
  <Section title="About Ethia"><p>Ethia is a history reading and listening app operated by Althia Studios. It presents editorially written stories, historical context, sources, artwork and narration.</p></Section>
  <Section title="Apple app licence"><p>The iOS app is licensed under Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User License Agreement</a>. These terms additionally explain Ethia’s content and service.</p></Section>
  <Section title="Historical content"><p>Ethia is designed for general interest and education. Historical evidence can be incomplete and historians can disagree. Stories may use clearly disclosed composite or reconstructed elements while distinguishing them from documented facts. Ethia is not an academic edition, professional research service or substitute for consulting primary sources and qualified scholarship.</p></Section>
  <Section title="Intellectual property"><p>Ethia’s original narration, text, artwork, interface and branding are owned by or licensed to Althia Studios. You receive a personal, non-transferable licence to use the app and its content through Apple’s terms. Do not redistribute, sell, scrape or republish substantial parts of the catalogue without permission.</p></Section>
  <Section title="Availability and corrections"><p>Catalogue entries and features may change as evidence is reviewed, errors are corrected or the service develops. We may replace or withdraw content that does not meet our editorial or rights standards. We do not promise uninterrupted access to network-delivered content.</p></Section>
  <Section title="Privacy"><p>See the <Link href="/ethia/privacy">Ethia Privacy Policy</Link> for current data and network practices.</p></Section>
  <Section title="Consumer protections and contact"><p>Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. Contact <a href="mailto:althiastudios@gmail.com">althiastudios@gmail.com</a> with questions.</p></Section>
</LegalPage>}
