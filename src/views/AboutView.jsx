'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function AboutView() {
  const { t } = useTranslation()
  const offers = t('about.offers', { returnObjects: true })

  return (
    <div className="page about-page">
      <section className="page-header">
        <h1>{t('about.title')}</h1>
        <p className="page-subtitle">{t('about.subtitle')}</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.description')}</p>
        </div>

        <div className="about-section about-origin">
          <h2>{t('about.originTitle')}</h2>
          <p>{t('about.originText')}</p>
          <blockquote className="origin-quote">{t('about.originQuote')}</blockquote>
        </div>

        <div className="about-section">
          <h2>{t('about.whatWeOfferTitle')}</h2>
          <ul className="features-list">
            {Array.isArray(offers) &&
              offers.map((o) => (
                <li key={o.href}>
                  <span aria-hidden="true">{o.icon}</span>{' '}
                  <Link href={o.href}>
                    <strong>{o.label}</strong>
                  </Link>
                  : {o.text}
                </li>
              ))}
          </ul>
        </div>

        <div className="about-section">
          <h2>{t('about.howWeCheckTitle')}</h2>
          <p>{t('about.howWeCheckText')}</p>
        </div>

        <div className="about-section">
          <h2>{t('common.disclaimerTitle')}</h2>
          <p>{t('about.disclaimerText')}</p>
        </div>
      </section>
    </div>
  )
}
