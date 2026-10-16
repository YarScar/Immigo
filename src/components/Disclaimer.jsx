'use client'

import { useTranslation } from 'react-i18next'

export default function Disclaimer({ text }) {
  const { t } = useTranslation()
  return (
    <section className="disclaimer" role="note">
      <p>
        <strong>⚠️ {t('common.disclaimerTitle')}:</strong> {text || t('common.disclaimerText')}{' '}
        <span className="disclaimer-date">{t('common.lastChecked')}</span>
      </p>
    </section>
  )
}
