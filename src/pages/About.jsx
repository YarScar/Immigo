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
          <h2>Our Mission</h2>
          <p>{t('about.description')}</p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul className="features-list">
            <li>📜 <strong>Know Your Rights:</strong> Clear, accessible information about immigrant rights in the United States.</li>
            <li>🧭 <strong>Resource Finder:</strong> Comprehensive directory of legal aid organizations, hotlines, and community resources.</li>
            <li>🧾 <strong>Paperwork Help:</strong> Guidance on common immigration forms and applications.</li>
            <li>🤖 <strong>AI Assistant:</strong> Get answers to your immigration questions using our AI-powered chatbot.</li>
            <li>🗣️ <strong>Multilingual Support:</strong> Access information in multiple languages for better accessibility.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Disclaimer</h2>
          <p>
            Immigo is an informational resource and does not provide legal advice. The information on this website is for educational purposes only and should not be used as a substitute for professional legal counsel. Immigration laws are complex and can change frequently. For specific legal matters, please consult with a qualified immigration attorney.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact</h2>
          <p>
            If you have questions or suggestions about Immigo, please reach out through our chatbot or contact your local immigration legal services organization.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About

