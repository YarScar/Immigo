import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import '../styles/App.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', country: 'us' },
    { code: 'es', name: 'Español', country: 'es' },
    { code: 'fr', name: 'Français', country: 'fr' },
    { code: 'ar', name: 'العربية', country: 'sa' },
    { code: 'zh', name: '中文', country: 'cn' },
    { code: 'ja', name: '日本語', country: 'jp' }
  ]

  const flagUrl = (cc) => `https://flagcdn.com/w20/${cc}.png`
  const currentCode = i18n.language ? i18n.language.split('-')[0] : 'en'
  const current = languages.find(l => l.code === currentCode) || languages[0]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  useEffect(() => {
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <div
      className="language-switcher"
      ref={rootRef}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {/* Trigger styled like the original select */}
      <button
        ref={buttonRef}
        type="button"
        className="language-select"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }}
      >
        <img
          src={flagUrl(current.country)}
          alt=""
          width="20"
          height="15"
          style={{ display: 'inline-block' }}
        />
        <span>{current.name}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="language-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            minWidth: buttonRef.current ? `${buttonRef.current.offsetWidth}px` : 'auto',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: 6,
            margin: 0,
            listStyle: 'none',
            boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            zIndex: 1000
          }}
        >
          {languages.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === currentCode}
              onClick={() => changeLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 10px',
                borderRadius: 6,
                cursor: 'pointer',
                background: lang.code === currentCode ? '#f3f4f6' : 'transparent'
              }}
            >
              <img
                src={flagUrl(lang.country)}
                alt=""
                width="20"
                height="15"
                style={{ display: 'inline-block' }}
              />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher

