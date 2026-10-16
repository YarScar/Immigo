import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'
import zh from './locales/zh.json'
import ht from './locales/ht.json'

export const LANGUAGES = [
  { code: 'en', name: 'English', country: 'us', dir: 'ltr' },
  { code: 'es', name: 'Español', country: 'es', dir: 'ltr' },
  { code: 'fr', name: 'Français', country: 'fr', dir: 'ltr' },
  { code: 'ar', name: 'العربية', country: 'sa', dir: 'rtl' },
  { code: 'zh', name: '中文', country: 'cn', dir: 'ltr' },
  { code: 'ht', name: 'Kreyòl Ayisyen', country: 'ht', dir: 'ltr' },
]

export const STORAGE_KEY = 'immigo-lang'

// Every render on the server (and the first render in the browser) uses English
// so the HTML matches; the saved/browser language is applied after mount in
// <Providers>. Missing keys in other languages fall back to English.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      ar: { translation: ar },
      zh: { translation: zh },
      ht: { translation: ht },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    returnObjects: true,
  })
}

export function baseLanguage(code) {
  const base = (code || 'en').toLowerCase().split('-')[0]
  return LANGUAGES.some((l) => l.code === base) ? base : 'en'
}

export default i18n
