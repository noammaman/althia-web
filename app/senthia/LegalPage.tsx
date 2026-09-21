import Link from 'next/link'
import type { ReactNode } from 'react'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

const serif = { fontFamily: '"Playfair Display", Georgia, serif' }
const sans = { fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section style={{ padding: 0 }}><h2 className="text-xl text-[#203C34] mb-3" style={serif}>{title}</h2><div className="space-y-3">{children}</div></section>
}
export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main className="min-h-screen bg-[#FDFCFA]">
    <NavLight />
    <article className="py-24 px-6 mx-auto max-w-[768px]" style={sans}>
      <Link href="/" className="text-sm text-[#57695E] mb-8 inline-block hover:underline">← Back to Althia</Link>
      <p className="text-xs tracking-[0.18em] text-[#39705C] mb-3">SENTHIA</p>
      <h1 className="text-[2rem] md:text-[2.75rem] text-[#203C34] mb-4 leading-tight" style={serif}>{title}</h1>
      <p className="text-sm text-[#666666] mb-6">Effective September 21, 2026</p>
      <nav aria-label="Senthia legal documents" className="flex flex-wrap gap-6 mb-10 text-sm text-[#285E4D] underline underline-offset-4">
        <Link href="/senthia/terms">Terms of Use</Link><Link href="/senthia/privacy">Privacy Policy</Link>
      </nav>
      <div className="space-y-8 text-base text-[#444444] leading-[1.8] [&_a]:underline [&_a]:underline-offset-4">{children}</div>
    </article>
    <Footer variant="light" privacyHref="/senthia/privacy" />
  </main>
}
