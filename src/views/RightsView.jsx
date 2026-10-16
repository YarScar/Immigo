'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Accordion from '@/components/Accordion'
import Disclaimer from '@/components/Disclaimer'
import { RED_CARDS_URL, RIGHTS_SOURCES } from '@/data/links'

const asArray = (v) => (Array.isArray(v) ? v : [])
const PLAN_KEY = 'immigo-safety-plan'

function Scenarios() {
  const { t } = useTranslation()
  const scenarios = asArray(t('rights.scenarios.items', { returnObjects: true }))
  const [active, setActive] = useState(0)
  const current = scenarios[active] || scenarios[0]
  if (!current) return null

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const delta = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + delta + scenarios.length) % scenarios.length
    setActive(next)
    document.getElementById(`scenario-tab-${next}`)?.focus()
  }

  return (
    <section className="rights-block" aria-labelledby="scenarios-title">
      <h2 id="scenarios-title">{t('rights.scenarios.title')}</h2>
      <p className="block-intro">{t('rights.scenarios.intro')}</p>

      <div className="scenario-tabs" role="tablist" aria-label={t('rights.scenarios.title')} onKeyDown={onKeyDown}>
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            id={`scenario-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="scenario-panel"
            tabIndex={i === active ? 0 : -1}
            className={`scenario-tab ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span aria-hidden="true">{s.icon}</span> {s.label}
          </button>
        ))}
      </div>

      <div id="scenario-panel" role="tabpanel" aria-labelledby={`scenario-tab-${active}`} className="scenario-panel">
        <p className="scenario-intro">{current.intro}</p>
        <div className="do-dont">
          <div className="do-list">
            <h3>✅ {t('rights.scenarios.doTitle')}</h3>
            <ul>
              {asArray(current.do).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="dont-list">
            <h3>🚫 {t('rights.scenarios.dontTitle')}</h3>
            <ul>
              {asArray(current.dont).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        {asArray(current.say).length > 0 && (
          <div className="say-this">
            <h3>🗣️ {t('rights.scenarios.sayTitle')}</h3>
            <ul>
              {asArray(current.say).map((x) => (
                <li key={x}>
                  <q>{x}</q>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

function WarrantCheck() {
  const { t } = useTranslation()
  const w = t('rights.warrant', { returnObjects: true })
  if (!w || typeof w !== 'object') return null
  return (
    <section className="rights-block" aria-labelledby="warrant-title">
      <h2 id="warrant-title">{w.title}</h2>
      <p className="block-intro">{w.intro}</p>
      <div className="warrant-compare">
        <div className="warrant-card judicial">
          <h3>✅ {w.judicial?.title}</h3>
          <ul>
            {asArray(w.judicial?.points).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="warrant-card administrative">
          <h3>⚠️ {w.admin?.title}</h3>
          <ul>
            {asArray(w.admin?.points).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="warrant-tip">
        <strong>💡</strong> {w.tip}
      </p>
    </section>
  )
}

function RightsCard() {
  const { t } = useTranslation()
  const c = t('rights.card', { returnObjects: true })
  if (!c || typeof c !== 'object') return null

  const print = () => {
    document.body.classList.add('printing-card')
    const done = () => {
      document.body.classList.remove('printing-card')
      window.removeEventListener('afterprint', done)
    }
    window.addEventListener('afterprint', done)
    window.print()
  }

  return (
    <section className="rights-block" aria-labelledby="card-title">
      <h2 id="card-title">{c.title}</h2>
      <p className="block-intro">{c.intro}</p>
      <div className="red-card print-card">
        <p className="red-card-heading">{c.heading}</p>
        {asArray(c.lines).map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="card-actions">
        <button type="button" className="btn btn-secondary" onClick={print}>
          🖨️ {c.print}
        </button>
        <a href={RED_CARDS_URL} target="_blank" rel="noopener noreferrer" className="resource-link">
          {c.officialLink}
        </a>
      </div>
    </section>
  )
}

function SafetyPlan() {
  const { t } = useTranslation()
  const items = asArray(t('rights.plan.items', { returnObjects: true }))
  const [checked, setChecked] = useState({})

  useEffect(() => {
    try {
      setChecked(JSON.parse(window.localStorage.getItem(PLAN_KEY) || '{}'))
    } catch {}
  }, [])

  const toggle = (i) => {
    setChecked((prev) => {
      const next = { ...prev, [i]: !prev[i] }
      try {
        window.localStorage.setItem(PLAN_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  const done = items.filter((_, i) => checked[i]).length

  return (
    <section className="rights-block" aria-labelledby="plan-title">
      <h2 id="plan-title">{t('rights.plan.title')}</h2>
      <p className="block-intro">{t('rights.plan.intro')}</p>
      <p className="plan-progress">{t('rights.plan.progress', { done, total: items.length })}</p>
      <ul className="plan-list">
        {items.map((item, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} />
              <span>
                <strong>{item.title}</strong> {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="plan-note">{t('rights.plan.privacyNote')}</p>
    </section>
  )
}

function UnderstandingIce() {
  const { t } = useTranslation()
  const sections = asArray(t('rights.ice.sections', { returnObjects: true }))
  return (
    <section className="rights-block" aria-labelledby="ice-title">
      <h2 id="ice-title">{t('rights.ice.title')}</h2>
      <p className="block-intro">{t('rights.ice.intro')}</p>
      <div className="accordion-list">
        {sections.map((s) => (
          <Accordion key={s.title} title={s.title} hint={t('common.clickForInfo')} icon={s.icon}>
            {s.text && <p>{s.text}</p>}
            {asArray(s.points).length > 0 && (
              <ul>
                {asArray(s.points).map((p) =>
                  typeof p === 'string' ? (
                    <li key={p}>{p}</li>
                  ) : (
                    <li key={p.title}>
                      <strong>{p.title}:</strong> {p.text}
                    </li>
                  ),
                )}
              </ul>
            )}
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default function RightsView() {
  const { t } = useTranslation()
  const core = asArray(t('rights.core.items', { returnObjects: true }))
  const detained = asArray(t('rights.detained.steps', { returnObjects: true }))
  const everyone = asArray(t('rights.everyone.items', { returnObjects: true }))
  const fraud = asArray(t('rights.fraud.points', { returnObjects: true }))
  const updates = asArray(t('rights.updates.items', { returnObjects: true }))

  return (
    <div className="page rights-page">
      <section className="page-header">
        <h1>{t('rights.title')}</h1>
        <p className="page-subtitle">{t('rights.subtitle')}</p>
        <p className="rights-lead">{t('rights.intro')}</p>
      </section>

      <nav className="rights-toc" aria-label={t('rights.tocLabel')}>
        {asArray(t('rights.toc', { returnObjects: true })).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <section className="rights-block" id="core" aria-labelledby="core-title">
        <h2 id="core-title">{t('rights.core.title')}</h2>
        <div className="core-rights">
          {core.map((item) => (
            <div key={item.title} className="rights-card">
              <h3>
                <span aria-hidden="true">{item.icon}</span> {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="situations">
        <Scenarios />
      </div>
      <div id="warrants">
        <WarrantCheck />
      </div>
      <div id="card">
        <RightsCard />
      </div>

      <section className="rights-block" id="detained" aria-labelledby="detained-title">
        <h2 id="detained-title">{t('rights.detained.title')}</h2>
        <p className="block-intro">{t('rights.detained.intro')}</p>
        <ol className="steps-list">
          {detained.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/resources#hotlines" className="resource-link">
          {t('rights.detained.hotlinesLink')}
        </Link>
      </section>

      <div id="plan">
        <SafetyPlan />
      </div>

      <section className="rights-block" id="everyone" aria-labelledby="everyone-title">
        <h2 id="everyone-title">{t('rights.everyone.title')}</h2>
        <p className="block-intro">{t('rights.everyone.intro')}</p>
        <div className="core-rights">
          {everyone.map((item) => (
            <div key={item.title} className="rights-card">
              <h3>
                <span aria-hidden="true">{item.icon}</span> {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="ice">
        <UnderstandingIce />
      </div>

      <section className="rights-block fraud-block" id="fraud" aria-labelledby="fraud-title">
        <h2 id="fraud-title">{t('rights.fraud.title')}</h2>
        <ul>
          {fraud.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="rights-block" id="updates" aria-labelledby="updates-title">
        <h2 id="updates-title">{t('rights.updates.title')}</h2>
        <p className="block-intro">{t('rights.updates.intro')}</p>
        <ul className="updates-list">
          {updates.map((u) => (
            <li key={u.title}>
              <strong>{u.title}:</strong> {u.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="rights-block sources-block" aria-labelledby="sources-title">
        <h2 id="sources-title">{t('common.sourcesTitle')}</h2>
        <ul className="sources-list">
          {RIGHTS_SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Disclaimer text={t('rights.disclaimer')} />
    </div>
  )
}
