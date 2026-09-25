import Link from 'next/link'
import Image from 'next/image'

export default function NavDark() {
  return <nav aria-label="Mythia navigation" className="sticky top-0 z-50 border-b border-[#e1e3e7] bg-white/95 backdrop-blur-md">
    <div className="max-w-[1184px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
      <Link href="/mythia" className="flex items-center gap-3 text-[#383247]">
        <Image src="/logos/mythia-logo.png" alt="" width={28} height={28} className="rounded-md" />
        <span className="font-serif text-xl">Mythia</span>
      </Link>
      <div className="flex items-center gap-5 text-sm text-[#383247]">
        <Link href="/">Althia</Link>
        <a href="https://apps.apple.com/us/app/mythia-stories/id6760155082" target="_blank" rel="noopener noreferrer" className="py-3 underline underline-offset-4">Download <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </nav>
}
