import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'

const SERIF = '"Playfair Display", Georgia, serif'
const SANS = '-apple-system, BlinkMacSystemFont, Inter, sans-serif'
const MYTHIA_APP_STORE_URL = 'https://apps.apple.com/il/app/mythia-stories/id6760155082'
const SENTHIA_APP_STORE_URL = 'https://apps.apple.com/il/app/senthia/id6814469115'

export const metadata: Metadata = {
  title: 'Noam Maman — CV',
  description: 'Noam Maman — AI-native builder and data insights lead. Founder of Althia, Senior Marketing Insights Analyst at Placer.ai.',
  alternates: { canonical: '/noammaman' },
  openGraph: {
    title: 'Noam Maman — CV',
    description: 'AI-native builder and data insights lead. Founder of Althia, Senior Marketing Insights Analyst at Placer.ai.',
    url: 'https://althia.org/noammaman',
  },
  robots: 'noindex, follow',
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl text-[#111111] mb-6" style={{ fontFamily: SERIF }}>
      {children}
    </h2>
  )
}

export default function NoamMamanCV() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <NavLight />

      <section className="py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="text-sm text-[#666666] mb-10 inline-block hover:text-[#111111] transition-colors"
            style={{ fontFamily: SANS }}
          >
            ← Back to Althia
          </Link>

          {/* Header */}
          <h1 className="text-[2.5rem] md:text-[3.25rem] text-[#111111] mb-2 leading-tight" style={{ fontFamily: SERIF }}>
            Noam Maman
          </h1>
          <p className="text-lg text-[#444444] mb-6" style={{ fontFamily: SANS }}>
            AI-native builder &amp; data insights lead
          </p>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#666666] mb-10 pb-10"
            style={{ fontFamily: SANS, borderBottom: '1px solid #E5E5E5' }}
          >
            <a href="mailto:noammaman17@gmail.com" className="hover:text-[#111111] transition-colors">noammaman17@gmail.com</a>
            <span>·</span>
            <span>Israel</span>
            <span>·</span>
            <span>Citizenship: Portugal / Chile / Israel</span>
            <span className="hidden sm:inline">·</span>
            <a
              href="/files/Noam-Maman-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#111111] border transition-colors hover:border-[#111111]"
              style={{ borderColor: '#111111' }}
            >
              Download PDF
            </a>
          </div>

          {/* Summary */}
          <p className="text-base text-[#333333] leading-[1.8] mb-16" style={{ fontFamily: SANS }}>
            Builder with 4+ years turning ambiguous business problems into working tools — from a manual script that
            became a company-wide, publicly cited industry benchmark, to self-built consumer apps shipped solo on
            the App Store. Works fluently with LLM and agentic tooling (Cursor, Claude Code), owns Python/SQL data
            pipelines end-to-end (Airflow, Databricks, BigQuery), and partners directly with product, operations,
            and business stakeholders to find the problem worth solving before building anything.
          </p>

          {/* What I've built */}
          <SectionHeading>What I&apos;ve built</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <a
              href={MYTHIA_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border transition-colors hover:border-[#8B6914]"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="text-base text-[#111111] mb-1" style={{ fontFamily: SERIF }}>Mythia</div>
              <p className="text-sm text-[#666666] leading-relaxed" style={{ fontFamily: SANS }}>
                Live on the App Store. Ancient mythology retold as bedtime audio. Solo-built: content pipeline, narration production, and launch.
              </p>
            </a>
            <a
              href={SENTHIA_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border transition-colors hover:border-[#8B6914]"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="text-base text-[#111111] mb-1" style={{ fontFamily: SERIF }}>Senthia</div>
              <p className="text-sm text-[#666666] leading-relaxed" style={{ fontFamily: SANS }}>
                Live on the App Store. Guided-imagination journeys for relaxation, in English and Spanish.
              </p>
            </a>
          </div>

          {/* Experience */}
          <SectionHeading>Experience</SectionHeading>

          <div className="mb-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-3">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                Senior Marketing Insights Analyst — Placer.ai
              </span>
              <span className="text-sm text-[#888888]" style={{ fontFamily: SANS }}>June 2022 – Present</span>
            </div>
            <ul className="space-y-2.5 text-[15px] text-[#444444] leading-[1.7]" style={{ fontFamily: SANS }}>
              <li>Spotted a manual, one-off script and rebuilt it into the <strong className="text-[#111111]">Return to Office Index</strong> — a permanent, automated, company-wide tool that&apos;s now a public industry benchmark.</li>
              <li>Architected and led the technical build of three freemium analytics products — <strong className="text-[#111111]">Placer 100, Industry Trends, Migration Trends</strong> — now standard benchmarks for retail performance tracking.</li>
              <li>Own data products end-to-end: raw data → Python/SQL pipelines → KPIs → dashboards → a decision someone actually makes.</li>
              <li>Design and maintain Python ETL pipelines processing millions of records daily, with Airflow orchestration and automated data-quality validation — 100% data integrity on public-facing numbers.</li>
              <li>Build interactive Hex applications and executive dashboards that give non-technical product, GTM, and business stakeholders self-service access to data.</li>
              <li>Partner directly across product, operations, business, and engineering — translating messy, cross-functional problems into something buildable, and complex data back into decisions for C-suite and non-technical audiences.</li>
            </ul>
          </div>

          <div className="mb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-3">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                Founder — Althia Studio (Independent AI Products)
              </span>
              <span className="text-sm text-[#888888]" style={{ fontFamily: SANS }}>2026 – Present</span>
            </div>
            <ul className="space-y-2.5 text-[15px] text-[#444444] leading-[1.7]" style={{ fontFamily: SANS }}>
              <li>Design and build end-to-end LLM content pipelines — generation, automated multi-pass evaluation, and TTS narration — with no engineering team, from architecture decisions to production.</li>
              <li>Shipped Mythia and Senthia, live consumer iOS apps on the Apple App Store, solo: product, content pipeline, audio production, and full App Store submission.</li>
              <li>Every build decision — what to automate, what to hand-check, where to draw the line on quality — made and owned independently, start to finish.</li>
            </ul>
          </div>

          {/* Skills */}
          <SectionHeading>Skills</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-16 text-[15px] text-[#444444]" style={{ fontFamily: SANS }}>
            <div>
              <div className="text-[#111111] font-semibold mb-1">AI &amp; Agentic Dev</div>
              <p className="leading-relaxed">LLM workflows, AI agents, Cursor, Claude Code, prompt optimization &amp; evaluation</p>
            </div>
            <div>
              <div className="text-[#111111] font-semibold mb-1">Data Engineering</div>
              <p className="leading-relaxed">Python ETL pipelines, data modeling, Databricks, BigQuery, Airflow orchestration, Git</p>
            </div>
            <div>
              <div className="text-[#111111] font-semibold mb-1">SQL &amp; Analytics</div>
              <p className="leading-relaxed">Advanced SQL, KPI definition &amp; benchmarking, forecasting, time-series analysis, data storytelling</p>
            </div>
            <div>
              <div className="text-[#111111] font-semibold mb-1">Tools &amp; Dashboards</div>
              <p className="leading-relaxed">Tableau, Hex (interactive data apps), executive dashboards &amp; self-service tooling</p>
            </div>
          </div>

          {/* Education */}
          <SectionHeading>Education</SectionHeading>
          <div className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                M.Sc. Business Analytics, Brandeis International Business School
              </span>
              <span className="text-sm text-[#888888]" style={{ fontFamily: SANS }}>Honors · GPA 3.9</span>
            </div>
            <p className="text-sm text-[#666666] mt-1" style={{ fontFamily: SANS }}>
              Statistical modeling, forecasting, data engineering, and data storytelling. Sharfman Fellowship recipient.
            </p>
          </div>
          <div className="mb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                B.A. Economics &amp; Political Science, Brandeis University
              </span>
              <span className="text-sm text-[#888888]" style={{ fontFamily: SANS }}>Magna Cum Laude · GPA 3.9</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-12" style={{ borderTop: '1px solid #E5E5E5' }}>
            <SectionHeading>Let&apos;s talk</SectionHeading>
            <p className="text-base text-[#444444]" style={{ fontFamily: SANS }}>
              <a href="mailto:noammaman17@gmail.com" className="text-[#111111] underline underline-offset-2 hover:text-[#8B6914] transition-colors">noammaman17@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
