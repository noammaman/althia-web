import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  variant: 'light' | 'dark'
  showMythiaNote?: boolean
  privacyHref?: string
}

export default function Footer({ variant, showMythiaNote = false, privacyHref = '/privacy' }: FooterProps) {
  const isDark = variant === 'dark'

  return (
    <footer
      style={{
        backgroundColor: isDark ? '#0A0A0A' : '#F5F5F5',
        borderColor: isDark ? 'rgba(241, 224, 181, 0.12)' : '#E5E5E5',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <div className="max-w-[1184px] mx-auto px-6">
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm" style={{ color: isDark ? '#C4B49A' : '#444444' }}>
          <Link href="/mythia">Mythia</Link>
          <Link href="/senthia">Senthia</Link>
          <Link href="/about">About the studio</Link>
          <Link href="/senthia/support">Senthia Support</Link>
          <Link href="/terms">Terms of Use</Link>
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="/logos/althia-logo-dark.png"
              alt="Althia"
              width={20}
              height={20}
              className="object-contain"
              style={{ borderRadius: 4 }}
            />
            <span
              className="text-xs"
              style={{
                color: isDark ? '#C4B49A' : '#666666',
                fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
              }}
            >
              © 2026 Althia
            </span>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs"
            style={{
              color: isDark ? '#C4B49A' : '#666666',
              fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
            }}
          >
            <a href="mailto:althiastudios@gmail.com" className="transition-colors hover:opacity-80">
              althiastudios@gmail.com
            </a>
            <span>·</span>
            <Link href="/facts" className="transition-colors hover:opacity-80">
              Facts
            </Link>
            <span>·</span>
            <Link href={privacyHref} className="transition-colors hover:opacity-80">
              Privacy Policy
            </Link>
          </div>
        </div>

        {showMythiaNote && (
          <p
            className="text-xs text-center mt-6"
            style={{ color: isDark ? '#C4B49A' : '#666666' }}
          >
            Mythia is a product of Althia
          </p>
        )}
      </div>
    </footer>
  )
}
