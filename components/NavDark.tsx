import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/il/app/mythia-stories/id6760155082'

export default function NavDark() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(241, 224, 181, 0.12)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/mythia" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/mythia-logo.png"
            alt="Mythia"
            width={28}
            height={28}
            className="object-cover rounded-lg"
          />
          <span className="text-sm font-semibold tracking-wide text-[#F1E0B5]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            Mythia
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-[rgba(241,224,181,0.6)] transition-colors hover:text-[#F1E0B5]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Home
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 border border-[#F1E0B5] text-[#F1E0B5] rounded-full font-semibold transition-all hover:bg-[rgba(241,224,181,0.1)] hover:border-[#F5F0E8]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
          >
            Download Mythia
          </a>
        </div>
      </div>
    </nav>
  )
}
