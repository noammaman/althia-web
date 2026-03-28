import Link from 'next/link'

export default function NavLight() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(253, 252, 250, 0.95)',
        backdropFilter: 'blur(10px)',
        borderColor: '#E5E5E5',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/althia-logo-light.svg"
            alt="Althia"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#111111]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Althia
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/#apps"
            className="text-sm text-[#666666] transition-colors hover:text-[#111111]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Apps
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#666666] transition-colors hover:text-[#111111]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
