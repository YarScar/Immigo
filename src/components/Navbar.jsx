import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import '../styles/Navbar.css'

function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌎 Immigo
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              {t('nav.home')}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rights" className="navbar-link">
              {t('nav.rights')}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">
              {t('nav.resources')}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/help" className="navbar-link">
              {t('nav.help')}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              {t('nav.about')}
            </Link>
          </li>
          <li className="navbar-item">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

