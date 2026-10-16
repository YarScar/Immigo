'use client'

import { useTranslation } from 'react-i18next'
import Disclaimer from '@/components/Disclaimer'
import { openChat } from '@/components/Chatbot'
import { FORMS, USCIS_FEES_URL } from '@/data/links'

const asArray = (v) => (Array.isArray(v) ? v : [])

export default function HelpView() {
  const { t } = useTranslation()

  return (
    <div className="page help-page">
      <section className="page-header">
        <h1>{t('help.title')}</h1>
        <p className="page-subtitle">{t('help.subtitle')}</p>
        <p>{t('help.description')}</p>
      </section>

      <div className="help-content">
        <section className="forms-section">
          <h2>📋 {t('help.commonFormsTitle')}</h2>
          <p className="callout">
            {t('help.feesNote')}{' '}
            <a href={USCIS_FEES_URL} target="_blank" rel="noopener noreferrer">
              {t('help.feesLink')}
            </a>
          </p>
          <div className="forms-list">
            {FORMS.map((form) => (
              <div key={form.id} className="form-card">
                <h3>
                  <span className="form-number">{form.form}</span> {t(`help.forms.${form.id}.name`)}
                </h3>
                <p>{t(`help.forms.${form.id}.description`)}</p>
                {form.fee && (
                  <p className="form-fee">
                    <strong>{t('help.feeLabel')}:</strong> {t(`help.forms.${form.id}.fee`)}
                  </p>
                )}
                <a href={form.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  {t('help.viewFormLabel')}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="help-tips">
          <h2>💡 {t('help.tipsTitle')}</h2>
          <ul className="tips-list">
            {asArray(t('help.tips', { returnObjects: true })).map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="chatbot-section">
          <h2>💬 {t('help.chatbotSectionTitle')}</h2>
          <p>{t('help.chatbotSectionDescription')}</p>
          <button type="button" className="btn btn-secondary" onClick={openChat}>
            {t('home.features.chatbot.cta')}
          </button>
        </section>
      </div>

      <Disclaimer text={t('help.disclaimerText')} />
    </div>
  )
}
