'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-emergency">
          <strong>{t('footer.emergencyLabel')}</strong> {t('footer.emergencyText')}
        </p>
        <p className="footer-description">{t('footer.description')}</p>
        <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/rights">{t('nav.rights')}</Link>
          <Link href="/resources">{t('nav.resources')}</Link>
          <Link href="/take-action">{t('nav.takeAction')}</Link>
          <Link href="/about">{t('nav.about')}</Link>
        </nav>
        <p className="footer-rights">
          © {new Date().getFullYear()} Immigo. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
