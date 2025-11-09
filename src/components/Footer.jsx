import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-description">{t('footer.description')}</p>
        <p className="footer-rights">© 2024 Immigo. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer

