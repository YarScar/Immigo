'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, baseLanguage } from '@/i18n'

const flagUrl = (cc) => `https://flagcdn.com/w20/${cc}.png`

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  const currentCode = baseLanguage(i18n.language)
  const current = LANGUAGES.find((l) => l.code === currentCode) || LANGUAGES[0]

  useEffect(() => {
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const choose = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        type="button"
        className="language-select"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
      >
        <img src={flagUrl(current.country)} alt="" width="20" height="15" />
        <span>{current.name}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul role="listbox" aria-label={t('nav.language')} className="language-menu">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === currentCode}
                className={`language-option ${lang.code === currentCode ? 'current' : ''}`}
                onClick={() => choose(lang.code)}
                lang={lang.code}
              >
                <img src={flagUrl(lang.country)} alt="" width="20" height="15" />
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
