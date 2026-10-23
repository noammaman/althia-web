import type { Metadata } from 'next'
import Link from 'next/link'
import NavLight from '@/components/NavLight'
import Footer from '@/components/Footer'
import ProjectsGrid from './ProjectsGrid'

const SERIF = '"Playfair Display", Georgia, serif'
const SANS = '-apple-system, BlinkMacSystemFont, Inter, sans-serif'
const GOLD = '#8B6914'

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[11px] font-semibold tracking-[2px] uppercase mb-3"
      style={{ fontFamily: SANS, color: GOLD }}
    >
      {children}
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[1.9rem] text-[#111111] leading-none mb-1.5" style={{ fontFamily: SERIF }}>
        {value}
      </div>
      <div className="text-xs text-[#777777] leading-snug" style={{ fontFamily: SANS }}>
        {label}
      </div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-[13px] text-[#333333] border"
      style={{ fontFamily: SANS, borderColor: '#E5E5E5', background: '#FAFAF8' }}
    >
      {children}
    </span>
  )
}

function Role({
  title,
  dates,
  bullets,
}: {
  title: string
  dates: string
  bullets: React.ReactNode[]
}) {
  return (
    <div className="relative pl-6 mb-14" style={{ borderLeft: `2px solid #ECE4D0` }}>
      <span
        className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full"
        style={{ background: GOLD }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-4">
        <span className="text-[17px] text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
          {title}
        </span>
        <span className="text-sm text-[#999999]" style={{ fontFamily: SANS }}>{dates}</span>
      </div>
      <ul className="space-y-3 text-[15px] text-[#444444] leading-[1.7]" style={{ fontFamily: SANS }}>
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9BC9C' }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function NoamMamanCV() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <NavLight />

      <section className="pt-20 pb-6 px-6">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/"
            className="text-sm text-[#666666] mb-10 inline-block hover:text-[#111111] transition-colors"
            style={{ fontFamily: SANS }}
          >
            ← Back to Althia
          </Link>

          {/* Header */}
          <Eyebrow>Curriculum Vitae</Eyebrow>
          <h1 className="text-[2.75rem] md:text-[3.5rem] text-[#111111] mb-3 leading-[1.05]" style={{ fontFamily: SERIF }}>
            Noam Maman
          </h1>
          <p className="text-lg md:text-xl text-[#444444] mb-8 max-w-[520px]" style={{ fontFamily: SANS }}>
            AI-native builder &amp; data insights lead
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href="/files/Noam-Maman-CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white transition-opacity hover:opacity-85"
              style={{ fontFamily: SANS, background: '#111111' }}
            >
              Download PDF
            </a>
            <a
              href="mailto:noammaman17@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-[#111111] border transition-colors hover:border-[#111111]"
              style={{ fontFamily: SANS, borderColor: '#E5E5E5' }}
            >
              noammaman17@gmail.com
            </a>
            <span className="text-sm text-[#999999]" style={{ fontFamily: SANS }}>Based in Israel</span>
          </div>

          {/* Stat strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 py-10 mb-16"
            style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}
          >
            <Stat value="4+ yrs" label="Turning ambiguous problems into shipped tools" />
            <Stat value="4" label="Independent products — shipped and in motion" />
            <Stat value="3" label="Analytics products architected at Placer.ai" />
            <Stat value="3.9" label="GPA, M.Sc. Business Analytics, Honors" />
          </div>

          {/* Summary */}
          <p className="text-base text-[#333333] leading-[1.85] mb-20 max-w-[620px]" style={{ fontFamily: SANS }}>
            Builder with 4+ years turning ambiguous business problems into working tools — from a manual script that
            became a company-wide, publicly cited industry benchmark, to self-built consumer apps shipped solo on
            the App Store. Works fluently with LLM and agentic tooling (Cursor, Claude Code), owns Python/SQL data
            pipelines end-to-end (Airflow, Databricks, BigQuery), and partners directly with product, operations,
            and business stakeholders to find the problem worth solving before building anything.
          </p>

          {/* Projects */}
          <Eyebrow>Projects</Eyebrow>
          <h2 className="text-2xl text-[#111111] mb-2" style={{ fontFamily: SERIF }}>What I&apos;m building</h2>
          <p className="text-sm text-[#999999] mb-8" style={{ fontFamily: SANS }}>
            Shipped, in progress, and paused — kept current as the work moves.
          </p>
          <div className="mb-20">
            <ProjectsGrid />
          </div>

          {/* Experience */}
          <Eyebrow>Experience</Eyebrow>
          <h2 className="text-2xl text-[#111111] mb-10" style={{ fontFamily: SERIF }}>Where I&apos;ve worked</h2>

          <Role
            title="Senior Marketing Insights Analyst — Placer.ai"
            dates="June 2022 – Present"
            bullets={[
              <>Spotted a manual, one-off script and rebuilt it into the <strong className="text-[#111111]">Return to Office Index</strong> — a permanent, automated, company-wide tool that&apos;s now a public industry benchmark.</>,
              <>Architected and led the technical build of three freemium analytics products — <strong className="text-[#111111]">Placer 100, Industry Trends, Migration Trends</strong> — now standard benchmarks for retail performance tracking.</>,
              <>Own data products end-to-end: raw data → Python/SQL pipelines → KPIs → dashboards → a decision someone actually makes.</>,
              <>Design and maintain Python ETL pipelines processing millions of records daily, with Airflow orchestration and automated data-quality validation — 100% data integrity on public-facing numbers.</>,
              <>Build interactive Hex applications and executive dashboards that give non-technical product, GTM, and business stakeholders self-service access to data.</>,
              <>Partner directly across product, operations, business, and engineering — translating messy, cross-functional problems into something buildable, and complex data back into decisions for C-suite and non-technical audiences.</>,
            ]}
          />

          <Role
            title="Founder — Althia Studio (Independent AI Products)"
            dates="2026 – Present"
            bullets={[
              <>Design and build end-to-end LLM content pipelines — generation, automated multi-pass evaluation, and TTS narration — with no engineering team, from architecture decisions to production.</>,
              <>Shipped Mythia and Senthia, live consumer iOS apps on the Apple App Store, solo: product, content pipeline, audio production, and full App Store submission.</>,
              <>Every build decision — what to automate, what to hand-check, where to draw the line on quality — made and owned independently, start to finish.</>,
            ]}
          />

          {/* Skills */}
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="text-2xl text-[#111111] mb-8" style={{ fontFamily: SERIF }}>Skills</h2>
          <div className="space-y-6 mb-20">
            <div>
              <div className="text-sm text-[#111111] font-semibold mb-2.5" style={{ fontFamily: SANS }}>AI &amp; Agentic Dev</div>
              <div className="flex flex-wrap gap-2">
                {['LLM workflows', 'AI agents', 'Cursor', 'Claude Code', 'Prompt optimization & evaluation'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-sm text-[#111111] font-semibold mb-2.5" style={{ fontFamily: SANS }}>Data Engineering</div>
              <div className="flex flex-wrap gap-2">
                {['Python ETL pipelines', 'Data modeling', 'Databricks', 'BigQuery', 'Airflow orchestration', 'Git'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-sm text-[#111111] font-semibold mb-2.5" style={{ fontFamily: SANS }}>SQL &amp; Analytics</div>
              <div className="flex flex-wrap gap-2">
                {['Advanced SQL', 'KPI definition & benchmarking', 'Forecasting', 'Time-series analysis', 'Data storytelling'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-sm text-[#111111] font-semibold mb-2.5" style={{ fontFamily: SANS }}>Tools &amp; Dashboards</div>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'Hex (interactive data apps)', 'Executive dashboards', 'Self-service tooling'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </div>

          {/* Education */}
          <Eyebrow>Background</Eyebrow>
          <h2 className="text-2xl text-[#111111] mb-8" style={{ fontFamily: SERIF }}>Education</h2>
          <div className="mb-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                M.Sc. Business Analytics, Brandeis International Business School
              </span>
              <span className="text-sm text-[#999999]" style={{ fontFamily: SANS }}>Honors · GPA 3.9</span>
            </div>
            <p className="text-sm text-[#666666] mt-1.5" style={{ fontFamily: SANS }}>
              Statistical modeling, forecasting, data engineering, and data storytelling. Sharfman Fellowship recipient.
            </p>
          </div>
          <div className="mb-20">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#111111] font-semibold" style={{ fontFamily: SANS }}>
                B.A. Economics &amp; Political Science, Brandeis University
              </span>
              <span className="text-sm text-[#999999]" style={{ fontFamily: SANS }}>Magna Cum Laude · GPA 3.9</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="py-20 px-6" style={{ background: '#F5F3EE' }}>
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[1.75rem] md:text-3xl text-[#111111] mb-4" style={{ fontFamily: SERIF }}>
            Let&apos;s talk.
          </h2>
          <p className="text-base text-[#555555] mb-8" style={{ fontFamily: SANS }}>
            Open to data insights, analytics, and AI-builder roles.
          </p>
          <a
            href="mailto:noammaman17@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white transition-opacity hover:opacity-85"
            style={{ fontFamily: SANS, background: GOLD }}
          >
            noammaman17@gmail.com
          </a>
        </div>
      </section>

      <Footer variant="light" />
    </main>
  )
}
