'use client'

import { useState } from 'react'
import Image from 'next/image'

const SERIF = '"Playfair Display", Georgia, serif'
const SANS = '-apple-system, BlinkMacSystemFont, Inter, sans-serif'
const GOLD = '#8B6914'

type Status = 'Shipped' | 'In Development' | 'Paused'

interface Project {
  name: string
  status: Status
  description: string
  href?: string
  linkLabel?: string
  logo?: string
  monogram?: string
  monogramBg?: string
}

// Add new projects here as they start — this list is the only thing that
// needs to change to keep the page current.
const PROJECTS: Project[] = [
  {
    name: 'Mythia',
    status: 'Shipped',
    description: 'Ancient mythology retold as bedtime audio. Solo-built: content pipeline, narration production, and launch.',
    href: 'https://apps.apple.com/il/app/mythia-stories/id6760155082',
    linkLabel: 'View on the App Store',
    logo: '/logos/mythia-logo.png',
  },
  {
    name: 'Senthia',
    status: 'Shipped',
    description: 'Guided-imagination journeys for relaxation, in English and Spanish.',
    href: 'https://apps.apple.com/il/app/senthia/id6814469115',
    linkLabel: 'View on the App Store',
    logo: '/logos/senthia-logo.png',
  },
  {
    name: 'Unplug League',
    status: 'In Development',
    description: 'A digital-wellbeing app that mirrors real phone usage back to you and gamifies cutting down — a league, challenges, and a daily score.',
    href: '/unplugleague',
    linkLabel: 'See the project',
    monogram: 'UL',
    monogramBg: '#1C2B22',
  },
  {
    name: 'Fig',
    status: 'Paused',
    description: 'An offline, location-aware heritage guide for historic sites, starting with Caesarea Maritima. Paused mid-build while Mythia and Senthia ship.',
    monogram: 'FIG',
    monogramBg: '#3A2E22',
  },
]

const FILTERS: Array<'All' | Status> = ['All', 'Shipped', 'In Development', 'Paused']

function statusColor(status: Status) {
  if (status === 'Shipped') return { bg: '#F3EEDF', fg: GOLD }
  if (status === 'In Development') return { bg: '#EAF0ED', fg: '#2F5745' }
  return { bg: '#F0F0F0', fg: '#777777' }
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<'All' | Status>('All')
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.status === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-1.5 rounded-full text-[13px] transition-colors border"
              style={{
                fontFamily: SANS,
                borderColor: active ? '#111111' : '#E5E5E5',
                background: active ? '#111111' : 'transparent',
                color: active ? '#fff' : '#666666',
              }}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map((p) => {
          const c = statusColor(p.status)
          const Card = (
            <div
              className="group h-full p-6 rounded-2xl border transition-all hover:border-[#8B6914] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div className="flex items-center gap-4 mb-4">
                {p.logo ? (
                  <Image src={p.logo} alt="" width={56} height={56} className="rounded-2xl" />
                ) : (
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xs tracking-wider flex-shrink-0"
                    style={{ background: p.monogramBg, fontFamily: SANS }}
                  >
                    {p.monogram}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-lg text-[#111111]" style={{ fontFamily: SERIF }}>{p.name}</div>
                  <span
                    className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{ fontFamily: SANS, background: c.bg, color: c.fg }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed mb-3" style={{ fontFamily: SANS }}>
                {p.description}
              </p>
              {p.href && (
                <span className="text-sm font-medium" style={{ fontFamily: SANS, color: GOLD }}>
                  {p.linkLabel} <span className="transition-transform inline-block group-hover:translate-x-0.5">→</span>
                </span>
              )}
            </div>
          )

          if (!p.href) {
            return <div key={p.name}>{Card}</div>
          }

          const isExternal = p.href.startsWith('http')
          return (
            <a
              key={p.name}
              href={p.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="block"
            >
              {Card}
            </a>
          )
        })}
      </div>
    </div>
  )
}
