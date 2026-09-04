import Link from 'next/link'

interface FooterProps {
  variant: 'light' | 'dark'
  showMythiaNote?: boolean
}

export default function Footer({ variant, showMythiaNote = false }: FooterProps) {
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
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isDark ? '/logos/althia-logo-dark.png' : '/logos/althia-logo-light.svg'}
              alt="Althia"
              width={20}
              height={20}
              className="object-contain"
              style={{ opacity: isDark ? 0.6 : 0.4 }}
            />
            <span
              className="text-xs"
              style={{
                color: isDark ? 'rgba(241, 224, 181, 0.4)' : '#999999',
                fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
              }}
            >
              © 2026 Althia
            </span>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs"
            style={{
              color: isDark ? 'rgba(241, 224, 181, 0.4)' : '#999999',
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
            <Link href="/privacy" className="transition-colors hover:opacity-80">
              Privacy Policy
            </Link>
          </div>
        </div>

        {showMythiaNote && (
          <p
            className="text-[10px] text-center mt-6"
            style={{ color: 'rgba(241, 224, 181, 0.25)' }}
          >
            Mythia is a product of Althia
          </p>
        )}
      </div>
    </footer>
  )
}
