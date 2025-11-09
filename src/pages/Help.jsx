import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function Help() {
  const { t } = useTranslation()
    const commonForms = [
      {
        name: 'Form I-485 (Application to Register Permanent Residence)',
        description: 'Application for adjustment of status to become a permanent resident.',
        link: 'https://www.uscis.gov/i-485'
      },
      {
        name: 'Form I-130 (Petition for Alien Relative)',
        description: 'Petition for a family member to immigrate to the United States.',
        link: 'https://www.uscis.gov/i-130'
      },
      {
        name: 'Form I-765 (Application for Employment Authorization)',
        description: 'Application for work authorization document (EAD).',
        link: 'https://www.uscis.gov/i-765'
      },
      {
        name: 'Form N-400 (Application for Naturalization)',
        description: 'Application to become a U.S. citizen.',
        link: 'https://www.uscis.gov/n-400'
      },
      {
        name: 'Form I-90 (Application to Replace Permanent Resident Card)',
        description: 'Application to replace or renew a green card.',
        link: 'https://www.uscis.gov/i-90'
      }
    ]

  return (
    <div className="page help-page">
      <section className="page-header">
        <h1>{t('help.title')}</h1>
        <p className="page-subtitle">{t('help.subtitle')}</p>
        <p>{t('help.description')}</p>
      </section>

      <section className="help-content">
        <div className="forms-section">
          <h2>📋 {t('help.commonFormsTitle')}</h2>
          <div className="forms-list">
            {commonForms.map((form, idx) => (
              <div key={idx} className="form-card">
                <h3>{form.name}</h3>
                <p>{form.description}</p>
                <a
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  {t('help.viewFormLabel')}
                </a>
              </div>
            ))}
          </div>
        </div>

        <section className="help-tips">
          <h2>💡 {t('help.tipsTitle')}</h2>
          <ul className="tips-list">
            <li>{t('help.tips.tip1')}</li>
            <li>{t('help.tips.tip2')}</li>
            <li>{t('help.tips.tip3')}</li>
            <li>{t('help.tips.tip4')}</li>
            <li>{t('help.tips.tip5')}</li>
            <li>{t('help.tips.tip6')}</li>
          </ul>
        </section>

        <section className="chatbot-section">
          <h2>🤖 {t('help.chatbotSectionTitle')}</h2>
          <p>{t('help.chatbotSectionDescription')}</p>
        </section>
      </section>

      <section className="disclaimer">
        <p><strong>⚠️ {t('help.tipsTitle')}:</strong> {t('help.disclaimerText')}</p>
      </section>
    </div>
  )
}

export default Help

