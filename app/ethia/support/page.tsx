import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { LegalSection as Section } from '../LegalPage'
export const metadata: Metadata = { title: 'Ethia — Support', description: 'Help with Ethia stories, reading, narration and catalogue access.', alternates: { canonical: '/ethia/support' } }
export default function Page(){return <LegalPage title="Ethia Support" showEffectiveDate={false}>
  <p>Questions, corrections and thoughtful disagreements are welcome. Ethia is built to become more accurate as its catalogue grows.</p>
  <div className="border-y border-[#DED8CD] py-8"><h2 className="text-xl text-[#2E3531] mb-3" style={{fontFamily:'"Playfair Display", Georgia, serif'}}>Get in touch</h2><a href="mailto:althiastudios@gmail.com?subject=Ethia%20Support" className="text-[#AB4E30]">althiastudios@gmail.com</a><p className="mt-3">For technical help, include your device model, iOS version, story title and what happened. Never send a password or payment details.</p></div>
  <Section title="A story will not load"><p>Check your internet connection and try again. Ethia retrieves its published catalogue, artwork and narration from Firebase. Include the story title if the problem continues.</p></Section>
  <Section title="Reading and listening"><p>Use Read for the full narration text and Listen for the plain spoken recording. Check your volume and selected audio output if narration is silent. Reading and listening positions are kept locally on the device.</p></Section>
  <Section title="Report a historical concern"><p>Send the story title, the sentence or claim you are concerned about, and a source when possible. We distinguish documented history, interpretation and disclosed reconstruction, and we correct material errors through versioned updates.</p></Section>
  <Section title="Privacy"><p>Read the <Link href="/ethia/privacy">Ethia Privacy Policy</Link> for details about local data and catalogue requests.</p></Section>
</LegalPage>}
