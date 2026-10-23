'use client'

import { useState, useRef, MouseEvent } from 'react'
import Image from 'next/image'

type Status = 'Shipped' | 'In Development' | 'Paused'

interface Project {
  name: string
  status: Status
  description: string
  href?: string
  linkLabel?: string
  logo?: string
}

// Add new projects here as they start — this is the only thing that needs
// to change to keep the page current.
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
    logo: '/logos/unplugleague-logo.png',
  },
  {
    name: 'Fig',
    status: 'Paused',
    description: 'An offline, location-aware heritage guide for historic sites, starting with Caesarea Maritima. Paused mid-build while Mythia and Senthia ship.',
  },
]

const FILTERS: Array<'All' | Status> = ['All', 'Shipped', 'In Development', 'Paused']

function statusStyle(status: Status) {
  if (status === 'Shipped') return { bg: 'rgba(100,255,180,0.12)', fg: '#5EFFB0', dot: '#5EFFB0' }
  if (status === 'In Development') return { bg: 'rgba(255,180,80,0.12)', fg: '#FFB450', dot: '#FFB450' }
  return { bg: 'rgba(160,160,175,0.12)', fg: '#A0A0AF', dot: '#A0A0AF' }
}

function ProjectCard({ p }: { p: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 0, on: false })

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setSpot({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100, on: true })
  }

  const s = statusStyle(p.status)

  const inner = (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setSpot((v) => ({ ...v, on: false }))}
      className="group relative h-full rounded-2xl p-6 overflow-hidden transition-colors"
      style={{
        background: '#121218',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.on ? 1 : 0,
          background: `radial-gradient(240px circle at ${spot.x}% ${spot.y}%, rgba(124,92,252,0.14), transparent 70%)`,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          {p.logo ? (
            <Image src={p.logo} alt="" width={52} height={52} className="rounded-xl" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08)' }} />
          ) : (
            <div
              className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 text-[13px] font-semibold tracking-wide"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b6b78' }}
            >
              {p.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <div className="text-[17px] text-[#F2F2F5] font-semibold tracking-tight">{p.name}</div>
            <span
              className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
              style={{ background: s.bg, color: s.fg }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
              {p.status}
            </span>
          </div>
        </div>
        <p className="text-[13.5px] text-[#9A9AA8] leading-relaxed mb-4">
          {p.description}
        </p>
        {p.href && (
          <span className="text-[13px] font-medium text-[#C9BDFF] inline-flex items-center gap-1">
            {p.linkLabel}
            <span className="transition-transform inline-block group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </div>
  )

  if (!p.href) return <div>{inner}</div>

  const isExternal = p.href.startsWith('http')
  return (
    <a href={p.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="block h-full">
      {inner}
    </a>
  )
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
              className="px-4 py-1.5 rounded-full text-[13px] transition-all"
              style={
                active
                  ? { background: 'linear-gradient(90deg, #7C5CFC, #35E6C8)', color: '#0B0B0F', fontWeight: 600 }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#9A9AA8' }
              }
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {visible.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </div>
  )
}
