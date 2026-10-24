import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import ProjectsGrid from './ProjectsGrid'
import Reveal from './Reveal'

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Noam Maman — Living Résumé',
  description: 'Noam Maman — data & analytics leader in growth analytics, marketing data platforms, and AI in production. Senior Marketing Insights Analyst at Placer.ai, Founder of Althia.',
  alternates: { canonical: '/noammaman' },
  openGraph: {
    title: 'Noam Maman — Living Résumé',
    description: 'AI-native builder and data insights lead. Founder of Althia, Senior Marketing Insights Analyst at Placer.ai.',
    url: 'https://althia.org/noammaman',
  },
  robots: 'noindex, follow',
}

const GRADIENT = 'linear-gradient(90deg, #7C5CFC, #35E6C8)'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color: '#8A7CFF' }}>
      {children}
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        className="text-[2rem] leading-none mb-2 font-semibold"
        style={{
          fontFamily: 'var(--font-display)',
          background: GRADIENT,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {value}
      </div>
      <div className="text-[12.5px] text-[#8E8E9A] leading-snug">{label}</div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-[13px] text-[#C9C9D4] transition-colors hover:text-white"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      {children}
    </span>
  )
}

function Role({ title, dates, bullets }: { title: string; dates: string; bullets: React.ReactNode[] }) {
  return (
    <div className="relative pl-7 mb-14">
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, #7C5CFC, rgba(124,92,252,0) 90%)' }} />
      <span
        className="absolute left-[-4.5px] top-[7px] w-[10px] h-[10px] rounded-full"
        style={{ background: '#7C5CFC', boxShadow: '0 0 0 4px rgba(124,92,252,0.15)' }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-4">
        <span className="text-[17px] text-[#F2F2F5] font-semibold tracking-tight">{title}</span>
        <span className="text-[13px] text-[#6E6E7A]">{dates}</span>
      </div>
      <ul className="space-y-3 text-[15px] text-[#A5A5B2] leading-[1.7]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#4A4A58' }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function NoamMamanCV() {
  return (
    <main className={`${display.variable} ${body.variable}`} style={{ background: '#0B0B0F', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Minimal header */}
      <header className="relative z-10 max-w-[840px] mx-auto px-6 pt-8 flex items-center justify-between">
        <a href="https://althia.org" className="text-[13px] text-[#6E6E7A] hover:text-[#C9C9D4] transition-colors">
          althia.org
        </a>
        <a
          href="/files/Noam-Maman-CV.pdf"
          className="text-[13px] px-4 py-2 rounded-full text-[#0B0B0F] font-semibold transition-opacity hover:opacity-85"
          style={{ background: GRADIENT }}
        >
          Download PDF
        </a>
      </header>

      {/* Hero with ambient gradient */}
      <section className="relative px-6 pt-16 pb-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.18] blur-[100px]"
          style={{ background: 'radial-gradient(ellipse at center, #7C5CFC, transparent 60%)' }}
        />
        <div
          className="pointer-events-none absolute top-20 right-[-200px] w-[500px] h-[500px] opacity-[0.12] blur-[100px]"
          style={{ background: 'radial-gradient(ellipse at center, #35E6C8, transparent 60%)' }}
        />
        <div className="relative max-w-[840px] mx-auto">
          <Eyebrow>Living Résumé</Eyebrow>
          <h1
            className="text-[3rem] md:text-[4.25rem] mb-4 leading-[1.02] font-semibold tracking-tight text-[#F5F5F7]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Noam Maman
          </h1>
          <p className="text-lg md:text-xl text-[#9A9AA8] mb-10 max-w-[560px]">
            Data &amp; analytics leader — growth analytics, marketing data platforms, and AI in production.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-16">
            <a
              href="mailto:noammaman17@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-[#F2F2F5] transition-colors hover:border-[#7C5CFC]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              noammaman17@gmail.com
            </a>
            <span className="text-sm text-[#6E6E7A]">Based in Israel · able to legally work in Europe and Latin America</span>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 py-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Stat value="4+ yrs" label="Turning ambiguous problems into shipped tools" />
            <Stat value="7" label="Independent products — shipped and in motion" />
            <Stat value="3" label="Analytics products architected at Placer.ai" />
            <Stat value="3.9" label="GPA, M.Sc. Business Analytics, Honors" />
          </div>
        </div>
      </section>

      <div className="max-w-[840px] mx-auto px-6">
        <Reveal className="mb-24">
          <p className="text-base text-[#A5A5B2] leading-[1.9] max-w-[640px]">
            The translation layer between raw data and the people who need to act on it without writing code. That
            started with Hex — the self-service platform Placer&apos;s analysts and content writers use to pull
            complex data with parameters instead of SQL — and public tools used for business development. Since
            taking ownership of Placer.ai&apos;s marketing data and BI stack in 2026, the same work now extends to
            growth: funnel and attribution analytics the CMO and RevOps run the business on, LLM features shipped
            in production with tested guardrails, and the governed data platform underneath all of it.
          </p>
        </Reveal>

        {/* Projects */}
        <Reveal className="mb-24">
          <Eyebrow>Projects</Eyebrow>
          <h2 className="text-2xl text-[#F2F2F5] mb-2 font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            What I&apos;m building
          </h2>
          <p className="text-sm text-[#6E6E7A] mb-8">Shipped, in progress, and paused — kept current as the work moves.</p>
          <ProjectsGrid />
        </Reveal>

        {/* Experience */}
        <Reveal className="mb-24">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="text-2xl text-[#F2F2F5] mb-10 font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Where I&apos;ve worked
          </h2>

          <Role
            title="Senior Marketing Insights Analyst — Placer.ai · Growth Data &amp; BI Ownership"
            dates="May 2026 – Present"
            bullets={[
              <>Moved onto the growth team by choice in May 2026 to learn growth from the inside; when the marketing-ops lead left that September, took over the full marketing data stack end to end — building new ingestion pipelines, on the team&apos;s existing Terraform/Vault/Jenkins/Kubernetes platform, for <strong className="text-[#D4D4DC]">Salesforce, HubSpot, LinkedIn Ads, GA4, Search Console, Bing Webmaster</strong>, and first-party web events, through a governed Databricks Unity Catalog semantic layer, to the dashboards leadership uses daily.</>,
              <>Built the company&apos;s <strong className="text-[#D4D4DC]">MQL → meeting → qualified → closed-won</strong> funnel dashboard for the CMO on Databricks — pipeline/revenue tie-back, first-touch/last-touch/weighted multi-touch attribution, period-over-period comparison, deal size, and time-to-close.</>,
              <>Partnered with RevOps to define what actually counts as an MQL vs. a re-engagement, validated it against Salesforce field history, and reconciled deal-to-lead attribution with RevOps&apos;s own 90-day rule — moving the org onto one documented definition instead of several conflicting ones.</>,
              <>Shipped LLM features in production: a win-back email pipeline that grounds every line in a real, data-backed fact before an LLM writes it, with guardrails designed and tested end-to-end (length, tone, factual-direction matching, no negative claims); extended the pattern to an ABM pipeline for a commercial-real-estate pilot, and built skills that let the company&apos;s AI assistant generate reports directly — the next phase of self-service, replacing dashboards with conversation.</>,
              <>Building the measurement layer for how the company shows up in AI answer engines (AEO), and prototyping agents that optimize existing content and surface keyword opportunities monthly.</>,
            ]}
          />

          <Role
            title="Senior Marketing Insights Analyst — Placer.ai · Insights &amp; Free Tools"
            dates="June 2022 – April 2026"
            bullets={[
              <>Spotted a manual, one-off script and rebuilt it into the <strong className="text-[#D4D4DC]">Return to Office Index</strong> — a permanent, automated, company-wide tool that&apos;s now a public industry benchmark.</>,
              <>Architected and led the technical build of three freemium analytics products — <strong className="text-[#D4D4DC]">Placer 100, Industry Trends, Migration Trends</strong> — now standard benchmarks for retail performance tracking.</>,
              <>Built Hex into the self-service platform Placer&apos;s analysts and content writers use to pull complex data with parameters instead of SQL — infrastructure other teams run on daily, not a dashboard handed off.</>,
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
        </Reveal>

        {/* Skills */}
        <Reveal className="mb-24">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="text-2xl text-[#F2F2F5] mb-8 font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Skills
          </h2>
          <div className="space-y-6">
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Growth &amp; Revenue Analytics</div>
              <div className="flex flex-wrap gap-2">
                {['Funnel & multi-touch attribution', 'Pipeline/revenue tie-back', 'RevOps data governance', 'CMO reporting cadence'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Marketing &amp; RevOps Data</div>
              <div className="flex flex-wrap gap-2">
                {['Salesforce', 'HubSpot', 'LinkedIn Ads', 'GA4', 'Google Search Console', 'Bing Webmaster Tools'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">AI in Production</div>
              <div className="flex flex-wrap gap-2">
                {['LLM feature pipelines', 'Guardrail design & testing', 'AI analyst / report-generation agents', 'AEO'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Data Platform &amp; Governance</div>
              <div className="flex flex-wrap gap-2">
                {['Databricks Unity Catalog', 'Data-validation frameworks (Great Expectations, pointblank)', 'Dedup & enrichment pipelines'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Infrastructure (operate within)</div>
              <div className="flex flex-wrap gap-2">
                {['Terraform (Atlantis)', 'HashiCorp Vault', 'Jenkins CI', 'Kubernetes', 'GitHub PR workflow', 'Jira-driven delivery'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">AI &amp; Agentic Dev</div>
              <div className="flex flex-wrap gap-2">
                {['LLM workflows', 'AI agents', 'Cursor', 'Claude Code', 'Prompt optimization & evaluation'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Data Engineering</div>
              <div className="flex flex-wrap gap-2">
                {['Python ETL pipelines', 'Data modeling', 'Databricks', 'BigQuery', 'Airflow orchestration', 'Git'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">SQL &amp; Analytics</div>
              <div className="flex flex-wrap gap-2">
                {['Advanced SQL', 'KPI definition & benchmarking', 'Forecasting', 'Time-series analysis', 'Data storytelling'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <div>
              <div className="text-[13px] text-[#6E6E7A] font-medium mb-2.5 uppercase tracking-wide">Tools &amp; Dashboards</div>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'Hex (interactive data apps)', 'Executive dashboards', 'Self-service tooling'].map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal className="mb-24">
          <Eyebrow>Background</Eyebrow>
          <h2 className="text-2xl text-[#F2F2F5] mb-8 font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Education
          </h2>
          <div className="mb-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#F2F2F5] font-semibold">M.Sc. Business Analytics, Brandeis International Business School</span>
              <span className="text-[13px] text-[#6E6E7A]">Honors · GPA 3.9</span>
            </div>
            <p className="text-sm text-[#8E8E9A] mt-1.5">
              Statistical modeling, forecasting, data engineering, and data storytelling. Sharfman Fellowship recipient.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-base text-[#F2F2F5] font-semibold">B.A. Economics &amp; Political Science, Brandeis University</span>
              <span className="text-[13px] text-[#6E6E7A]">Magna Cum Laude · GPA 3.9</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* CTA */}
      <Reveal>
        <section className="relative px-6 py-24 overflow-hidden text-center">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.15] blur-[100px]"
            style={{ background: 'radial-gradient(ellipse at center, #35E6C8, transparent 60%)' }}
          />
          <div className="relative max-w-[640px] mx-auto">
            <h2 className="text-[1.9rem] md:text-3xl text-[#F5F5F7] mb-4 font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Let&apos;s talk.
            </h2>
            <p className="text-base text-[#9A9AA8] mb-8">Open to growth/marketing analytics, data & analytics leadership, and AI-builder roles.</p>
            <a
              href="mailto:noammaman17@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#0B0B0F] transition-transform hover:scale-[1.03]"
              style={{ background: GRADIENT }}
            >
              noammaman17@gmail.com
            </a>
          </div>
        </section>
      </Reveal>

      <footer className="px-6 py-10 text-center">
        <p className="text-xs text-[#4A4A58]">Noam Maman · a living résumé, updated as the work moves</p>
      </footer>
    </main>
  )
}
