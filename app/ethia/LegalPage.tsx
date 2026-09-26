import Link from 'next/link'
import type { ReactNode } from 'react'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'
import ReadingNav from '@/components/ReadingNav'
import reading from '@/components/reading.module.css'

const serif = { fontFamily: '"Playfair Display", Georgia, serif' }
const sans = { fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section style={{ padding: 0 }}><h2 className="text-xl text-[#2E3531] mb-3" style={serif}>{title}</h2><div className="space-y-3">{children}</div></section>
}
export default function LegalPage({ title, children, showEffectiveDate = true }: { title: string; children: ReactNode; showEffectiveDate?: boolean }) {
  return <main className={reading.page}>
    <NavLight /><ReadingNav product="Ethia" />
    <article className="py-24 px-6 mx-auto max-w-[768px]" style={sans}>
      <Link href="/ethia" className="text-sm text-[#6E7168] mb-8 inline-block hover:underline">← Back to Ethia</Link>
      <p className="text-xs tracking-[0.18em] text-[#AB4E30] mb-3">ETHIA</p>
      <h1 className="text-[2rem] md:text-[2.75rem] text-[#2E3531] mb-4 leading-tight" style={serif}>{title}</h1>
      {showEffectiveDate && <p className="text-sm text-[#666] mb-6">Effective September 26, 2026</p>}
      <div className="space-y-8 text-base text-[#444] leading-[1.8] [&_a]:underline [&_a]:underline-offset-4">{children}</div>
    </article>
    <Footer variant="light" privacyHref="/ethia/privacy" />
  </main>
}
