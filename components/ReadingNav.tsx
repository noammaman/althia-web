import Link from 'next/link'
import styles from './reading.module.css'

export default function ReadingNav({ product = 'Althia' }: { product?: 'Althia' | 'Mythia' | 'Senthia' | 'Unplug League' }) {
  const root = product === 'Senthia' ? '/senthia' : product === 'Unplug League' ? '/unplugleague' : ''
  return <aside className={styles.rail}>
    <nav aria-label={`${product} reference pages`}>
      <p>{product}</p>
      {product === 'Mythia' ? <Link href="/mythia">Explore Mythia</Link> : root ? <Link href={root}>About the app</Link> : <><Link href="/about">Our studio</Link><Link href="/facts">Facts &amp; products</Link></>}
      {product === 'Senthia' && <Link href="/senthia/support">Support</Link>}
      {product === 'Unplug League' && <Link href="/unplugleague/join">The upcoming beta</Link>}
      <Link href={`${root}/privacy`}>Privacy Policy</Link>
      <Link href={`${root}/terms`}>Terms of Use</Link>
      <a href="mailto:althiastudios@gmail.com">Contact the studio ↗</a>
    </nav>
  </aside>
}
