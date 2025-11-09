import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function Rights() {
  const { t } = useTranslation()

  return (
    <div className="page rights-page">
      <section className="page-header">
        <h1>{t('rights.title')}</h1>
        <p className="page-subtitle">{t('rights.subtitle')}</p>
      </section>

      <section className="rights-content">
        <div className="rights-card">
          <h2>📜 {t('rights.section1.title')}</h2>
          <p>{t('rights.section1.content')}</p>
        </div>

        <div className="rights-card">
          <h2>⚖️ {t('rights.section2.title')}</h2>
          <p>{t('rights.section2.content')}</p>
        </div>

        <div className="rights-card">
          <h2>🚫 {t('rights.section3.title')}</h2>
          <p>{t('rights.section3.content')}</p>
        </div>

        <div className="rights-card">
          <h2>🆔 {t('rights.section4.title')}</h2>
          <p>{t('rights.section4.content')}</p>
        </div>
      </section>

      <section className="disclaimer">
        <p><strong>⚠️ {t('about.disclaimerTitle')}:</strong> {t('rights.disclaimer')}</p>
      </section>
    </div>
  )
}

export default Rights

