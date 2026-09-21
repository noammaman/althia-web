import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { LegalSection as Section } from '../LegalPage'

export const metadata: Metadata = {
  title: 'Senthia — Support',
  description: 'Get help with Senthia journeys, playback, subscriptions, purchases and your data.',
  alternates: { canonical: '/senthia/support' },
}

export default function SenthiaSupport() {
  return <LegalPage title="Senthia Support" showEffectiveDate={false}>
    <p>A little help, whenever you need it. Contact Althia Studios with a question, a problem or an idea for Senthia.</p>
    <div className="rounded-2xl bg-[#EAF2EC] p-6">
      <h2 className="text-xl text-[#203C34] mb-3" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Get in touch</h2>
      <a href="mailto:althiastudios@gmail.com?subject=Senthia%20Support" className="text-[#285E4D] break-words">althiastudios@gmail.com</a>
      <p className="mt-3">Please include your device model, iOS version and what happened. A screenshot can help. There’s no need to send passwords, payment details or private reflections.</p>
      <p className="mt-3" lang="es">También puedes escribirnos en español.</p>
    </div>
    <Section title="Listening and downloads">
      <p>If a journey does not start, check your internet connection and try again. New audio needs a connection for its first download. Completed downloads can be reused offline on the same device.</p>
      <p>Check your volume and audio output if you cannot hear the narration. Include the journey title, language and listening mode when reporting a playback problem.</p>
    </Section>
    <Section title="Free journeys and membership">
      <p>Your first five distinct journeys become your free collection, which you can revisit. Monthly and annual memberships unlock the full collection and offer the same access.</p>
    </Section>
    <Section title="Restore a purchase">
      <p>Open the profile icon in Senthia to reach Your space, then tap Restore purchases. You can also restore from the bottom of the membership screen. Use the Apple Account that originally purchased the subscription and connect to the internet.</p>
      <p>An expired subscription will not restore active access. If an active purchase is not recognized, contact us with the message you see.</p>
    </Section>
    <Section title="Manage or cancel a subscription">
      <p>On your iPhone, open Settings → your name → Subscriptions → Senthia, or <a href="https://apps.apple.com/account/subscriptions">manage your Apple subscriptions here</a>. Cancelling renewal keeps access until the subscription expires.</p>
      <p>Deleting Senthia or its guest account does not cancel an Apple subscription. Apple handles billing and <a href="https://reportaproblem.apple.com/">refund requests</a>.</p>
    </Section>
    <Section title="Your account and data">
      <p>To remove your guest account and personal app data, open Your space → Delete account and data and follow the confirmation steps. An internet connection is required. This action cannot be undone.</p>
      <p>You can also delete individual reflections in the reflection editor. Read the <Link href="/senthia/privacy">Senthia Privacy Policy</Link> for details about what stays on your device and what is stored in Firebase.</p>
    </Section>
  </LegalPage>
}
