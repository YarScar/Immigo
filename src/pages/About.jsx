import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function About() {
  const { t } = useTranslation()

  return (
    <div className="page about-page">
      <section className="page-header">
        <h1>{t('about.title')}</h1>
        <p className="page-subtitle">{t('about.subtitle')}</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.description')}</p>
        </div>

        <div className="about-section">
          <h2>{t('about.whatWeOfferTitle')}</h2>
          <ul className="features-list">
            <li>📜 <strong>{t('about.features.rightsLabel')}:</strong> {t('home.features.rights.description')}</li>
            <li>🧭 <strong>{t('about.features.resourceFinderLabel')}:</strong> {t('resources.subtitle')}</li>
            <li>🧾 <strong>{t('about.features.paperworkHelpLabel')}:</strong> {t('help.description')}</li>
            <li>🤖 <strong>{t('about.features.aiAssistantLabel')}:</strong> {t('home.features.chatbot.description')}</li>
            <li>🗣️ <strong>{t('about.features.multilingualSupportLabel')}:</strong> {t('about.subtitle')}</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>{t('about.disclaimerTitle')}</h2>
          <p>{t('about.disclaimerText')}</p>
        </div>

        <div className="about-section">
          <h2>{t('about.contactTitle')}</h2>
          <p>{t('about.contactText')}</p>
        </div>
      </section>
    </div>
  )
}

export default About

