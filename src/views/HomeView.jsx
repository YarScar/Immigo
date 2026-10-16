'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { openChat } from '@/components/Chatbot'

const FEATURES = [
  { key: 'rights', icon: '📜', href: '/rights' },
  { key: 'resources', icon: '🧭', href: '/resources' },
  { key: 'action', icon: '✊', href: '/take-action' },
  { key: 'chatbot', icon: '💬' },
]

export default function HomeView() {
  const { t } = useTranslation()
  const quickRights = t('home.quickRights', { returnObjects: true })

  return (
    <div className="page home-page">
      <section className="hero">
        <h1 className="hero-title">{t('home.title')}</h1>
        <p className="hero-subtitle">{t('home.subtitle')}</p>
        <p className="hero-description">{t('home.description')}</p>
        <div className="hero-actions">
          <Link href="/rights" className="btn btn-primary">
            {t('home.getStarted')}
          </Link>
          <Link href="/resources#hotlines" className="btn btn-outline-light">
            {t('home.needHelpNow')}
          </Link>
        </div>
      </section>

      <section className="quick-rights" aria-labelledby="quick-rights-title">
        <h2 id="quick-rights-title">{t('home.quickRightsTitle')}</h2>
        <ol className="quick-rights-list">
          {Array.isArray(quickRights) &&
            quickRights.map((item, i) => (
              <li key={i}>
                <span className="quick-rights-number" aria-hidden="true">
                  {i + 1}
                </span>
                <span>
                  <strong>{item.title}</strong> {item.text}
                </span>
              </li>
            ))}
        </ol>
        <Link href="/rights" className="resource-link">
          {t('home.quickRightsMore')}
        </Link>
      </section>

      <section className="features" aria-label={t('home.featuresLabel')}>
        <div className="features-grid">
          {FEATURES.map(({ key, icon, href }) => (
            <div key={key} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{t(`home.features.${key}.title`)}</h3>
              <p>{t(`home.features.${key}.description`)}</p>
              {href ? (
                <Link href={href} className="btn btn-secondary">
                  {t(`home.features.${key}.cta`)}
                </Link>
              ) : (
                <button type="button" className="btn btn-secondary" onClick={openChat}>
                  {t(`home.features.${key}.cta`)}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
