'use client'

import { useTranslation } from 'react-i18next'
import Accordion from '@/components/Accordion'
import { ACTION_LINKS } from '@/data/links'

const asArray = (v) => (Array.isArray(v) ? v : [])

// From the sociology-project "How to take Action" screens: Support, Speak Out,
// Educate, Email and Call, plus petitions.
const WAYS = [
  { key: 'support', icon: '🤝' },
  { key: 'speakOut', icon: '📣' },
  { key: 'educate', icon: '📚' },
  { key: 'contact', icon: '📞' },
  { key: 'petitions', icon: '✍️' },
]

export default function TakeActionView() {
  const { t } = useTranslation()

  return (
    <div className="page action-page">
      <section className="page-header">
        <h1>{t('action.title')}</h1>
        <p className="page-subtitle">{t('action.subtitle')}</p>
        <p className="rights-lead">{t('action.intro')}</p>
      </section>

      <div className="accordion-list action-list">
        {WAYS.map(({ key, icon }, i) => {
          const links = ACTION_LINKS[key] || []
          return (
            <Accordion
              key={key}
              icon={icon}
              title={t(`action.${key}.title`)}
              hint={t('common.clickForInfo')}
              defaultOpen={i === 0}
            >
              <p className="accordion-lead">{t(`action.${key}.lead`)}</p>
              <ul>
                {asArray(t(`action.${key}.points`, { returnObjects: true })).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {links.length > 0 && (
                <ul className="action-links">
                  {links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer">
                        {l.name}
                      </a>
                      {' — '}
                      {t(`action.links.${l.id}`)}
                    </li>
                  ))}
                </ul>
              )}
            </Accordion>
          )
        })}
      </div>

      <section className="rights-block safety-block">
        <h2>{t('action.safety.title')}</h2>
        <ul>
          {asArray(t('action.safety.points', { returnObjects: true })).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
