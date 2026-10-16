'use client'

import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n, { LANGUAGES, STORAGE_KEY, baseLanguage } from '@/i18n'

function applyDocumentLanguage(lng) {
  const lang = LANGUAGES.find((l) => l.code === baseLanguage(lng)) || LANGUAGES[0]
  document.documentElement.lang = lang.code
  document.documentElement.dir = lang.dir
}

export default function Providers({ children }) {
  useEffect(() => {
    let saved = null
    try {
      saved = window.localStorage.getItem(STORAGE_KEY)
    } catch {}
    const initial = baseLanguage(saved || navigator.language)
    if (initial !== i18n.language) i18n.changeLanguage(initial)
    applyDocumentLanguage(initial)

    const onChange = (lng) => {
      applyDocumentLanguage(lng)
      try {
        window.localStorage.setItem(STORAGE_KEY, baseLanguage(lng))
      } catch {}
    }
    i18n.on('languageChanged', onChange)
    return () => i18n.off('languageChanged', onChange)
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
