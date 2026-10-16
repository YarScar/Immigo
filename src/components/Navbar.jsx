'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const LINKS = [
  { href: '/', key: 'nav.home' },
  { href: '/rights', key: 'nav.rights' },
  { href: '/resources', key: 'nav.resources' },
  { href: '/take-action', key: 'nav.takeAction' },
  { href: '/help', key: 'nav.help' },
  { href: '/about', key: 'nav.about' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  return (
    <nav className="navbar" aria-label="Main">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image src="/logo.png" alt="" width={45} height={45} className="navbar-logo-img" priority />
          <span className="navbar-logo-text">Immigo</span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={t('nav.menu')}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navbar-menu" className={`navbar-menu ${open ? 'open' : ''}`}>
          {LINKS.map(({ href, key }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href} className="navbar-item">
                <Link
                  href={href}
                  className={`navbar-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {t(key)}
                </Link>
              </li>
            )
          })}
          <li className="navbar-item">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  )
}
