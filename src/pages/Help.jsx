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
          <h2>📋 Common Immigration Forms</h2>
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
                  View Form →
                </a>
              </div>
            ))}
          </div>
        </div>

        <section className="help-tips">
          <h2>💡 Tips for Filling Out Forms</h2>
          <ul className="tips-list">
            <li>Read all instructions carefully before filling out the form.</li>
            <li>Use black ink and print clearly or type your answers.</li>
            <li>Answer all questions truthfully and completely.</li>
            <li>Keep copies of all forms and supporting documents.</li>
            <li>Consider consulting with an immigration attorney if you have questions.</li>
            <li>Double-check all information before submitting.</li>
          </ul>
        </section>

        <section className="chatbot-section">
          <h2>🤖 Need Help? Ask Our AI Assistant</h2>
          <p>Use our AI chatbot (available in the bottom right corner) to get answers to questions about immigration forms and procedures.</p>
        </section>
      </section>

      <section className="disclaimer">
        <p><strong>⚠️ Important:</strong> This information is for guidance only. Immigration forms and requirements can change. Always check the official USCIS website for the most current information and consider consulting with an immigration attorney for legal advice.</p>
      </section>
    </div>
  )
}

export default Help

