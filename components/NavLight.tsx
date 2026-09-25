import Link from 'next/link'
import Image from 'next/image'

export default function NavLight() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(253, 252, 250, 0.95)',
        backdropFilter: 'blur(10px)',
        borderColor: '#E5E5E5',
      }}
    >
      <div className="max-w-[1184px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src="/logos/althia-logo-dark.png"
            alt=""
            width={28}
            height={28}
            className="object-contain rounded-md"
          />
          <span className="text-xl text-[#111111]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
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
