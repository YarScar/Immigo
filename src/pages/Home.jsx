import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../styles/App.css'

function Home() {
  const { t } = useTranslation()

  const handleChatbotClick = () => {
    const chatbotToggle = document.querySelector('.chatbot-toggle')
    if (chatbotToggle) {
      chatbotToggle.click()
    }
  }

  return (
    <div className="page home-page">
      <section className="hero">
        <h1 className="hero-title">{t('home.title')}</h1>
        <p className="hero-subtitle">{t('home.subtitle')}</p>
        <p className="hero-description">{t('home.description')}</p>
        <Link to="/rights" className="btn btn-primary">
          {t('home.getStarted')}
        </Link>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>{t('home.features.rights.title')}</h3>
            <p>{t('home.features.rights.description')}</p>
            <Link to="/rights" className="btn btn-secondary">
              {t('nav.rights')}
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧭</div>
            <h3>{t('home.features.resources.title')}</h3>
            <p>{t('home.features.resources.description')}</p>
            <Link to="/resources" className="btn btn-secondary">
              {t('nav.resources')}
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>{t('home.features.chatbot.title')}</h3>
            <p>{t('home.features.chatbot.description')}</p>
            <button className="btn btn-secondary" onClick={handleChatbotClick}>
              {t('home.features.chatbot.title')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

