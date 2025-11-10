import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../styles/App.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate();

  useEffect(() => {
    // Try common containers first; fallback to common card classes
    const containers = Array.from(document.querySelectorAll('.feature-cards, .home-cards, .cards, .features, .grid'));
    let cards = containers.flatMap(c => Array.from(c.children));
    if (cards.length < 3) {
      cards = Array.from(document.querySelectorAll('.feature-card, .home-card, .card'));
    }
    if (cards.length < 3) return;

    const pressChatTrigger = () => {
      const selectors = [
        '[data-chatbot-trigger]',
        '#chatbot-toggle',
        '.chatbot-toggle',
        '.chatbot-button',
        '.chat-toggle',
        'button[aria-label="Chatbot"]',
        'button[aria-label="AI Assistant"]',
        '[data-testid="chatbot-toggle"]',
      ];
      let trigger = selectors.map(sel => document.querySelector(sel)).find(Boolean);
      if (!trigger) {
        trigger = Array.from(document.querySelectorAll('button, [role="button"], a'))
          .find(el => /chat|assistant/i.test(el.textContent || ''));
      }
      if (trigger && typeof trigger.click === 'function') trigger.click();
    };

    const h1 = () => navigate('/rights');
    const h2 = () => navigate('/resources');
    const h3 = (e) => {
      if (e?.preventDefault) e.preventDefault();
      if (e?.stopPropagation) e.stopPropagation();
      pressChatTrigger();
    };

    const attached = [
      { el: cards[0], h: h1, opts: false },
      { el: cards[1], h: h2, opts: false },
      // Use capture to prevent nested link navigation for the chat card
      { el: cards[2], h: h3, opts: true },
    ];

    attached.forEach(({ el, h, opts }) => el.addEventListener('click', h, opts));

    return () => attached.forEach(({ el, h, opts }) => el.removeEventListener('click', h, opts));
  }, [navigate]);

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

