import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function Resources() {
  const { t, i18n } = useTranslation()

  // Language -> playlist ID (extracted from your provided links)
  const playlistMap = {
    en: 'PLtv4Zwto6R31UTw5ymlLzQEQaQu4vDPSI', // English
    es: 'PLtv4Zwto6R33EQeWboaCqDK0m03CFP4Zz', // Spanish
    ar: 'PLtv4Zwto6R31YQyGOEUL1XFDydJRm9jA4', // Arabic
    fr: 'PLtv4Zwto6R30xYio3yDfqWgdtSPSXWxx6', // French
    zh: 'PLtv4Zwto6R328Cyqm4_FuzfgSQJ7sTh5i'  // Mandarin
    // ja: no playlist yet -> fallback to English
  }

  const rawLang = (i18n.language || 'en').toLowerCase()
  const lang = rawLang.startsWith('zh') ? 'zh' : rawLang.split('-')[0]
  const playlistId = playlistMap[lang] || playlistMap.en
  const hl = lang === 'zh' ? 'zh-CN' : lang
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1&hl=${encodeURIComponent(hl)}`

  const legalAidOrganizations = [
    {
      name: 'National Immigration Law Center',
      website: 'https://www.nilc.org',
      description: 'National organization dedicated to defending and advancing the rights of low-income immigrants.'
    },
    {
      name: 'Immigration Advocates Network',
      website: 'https://www.immigrationadvocates.org',
      description: 'Network of organizations providing free immigration legal services.'
    },
    {
      name: 'American Immigration Lawyers Association',
      website: 'https://www.aila.org',
      description: 'Professional organization of immigration attorneys.'
    }
  ]

  const hotlines = [
    {
      name: 'National Immigration Detention Hotline',
      phone: '1-888-373-7888',
      description: '24/7 hotline for immigrants in detention.'
    },
    {
      name: 'ICE Detainee Locator',
      phone: '1-855-448-6903',
      description: 'Locate someone in ICE custody.'
    },
    {
      name: 'United We Dream Hotline',
      phone: '1-844-363-1423',
      description: 'Support and resources for immigrant youth and families.'
    }
  ]

  const communityOrganizations = [
    {
      name: 'Local Community Centers',
      description: 'Check your local community centers for immigrant support services.'
    },
    {
      name: 'Religious Organizations',
      description: 'Many churches, mosques, and synagogues offer immigrant support services.'
    },
    {
      name: 'Legal Aid Societies',
      description: 'Local legal aid societies often provide free or low-cost immigration services.'
    }
  ]

  return (
    <div className="page resources-page">
      <section className="page-header">
        <h1>{t('resources.title')}</h1>
        <p className="page-subtitle">{t('resources.subtitle')}</p>
      </section>

      <section className="resources-content">
        <div className="resources-section">
          <h2>⚖️ {t('resources.legalAid.title')}</h2>
          <p>{t('resources.legalAid.description')}</p>
          <div className="resources-list">
            {legalAidOrganizations.map((org, idx) => (
              <div key={idx} className="resource-item">
                <h3>{org.name}</h3>
                <p>{org.description}</p>
                <a href={org.website} target="_blank" rel="noopener noreferrer" className="resource-link">
                  {t('resources.visitWebsite')}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-section">
          <h2>📞 {t('resources.hotlines.title')}</h2>
          <p>{t('resources.hotlines.description')}</p>
          <div className="resources-list">
            {hotlines.map((hotline, idx) => (
              <div key={idx} className="resource-item">
                <h3>{hotline.name}</h3>
                <p className="resource-phone">{hotline.phone}</p>
                <p>{hotline.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-section">
          <h2>🤝 {t('resources.community.title')}</h2>
          <p>{t('resources.community.description')}</p>
          <div className="resources-list">
            {communityOrganizations.map((org, idx) => (
              <div key={idx} className="resource-item">
                <h3>{org.name}</h3>
                <p>{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-section">
          <h2>🎥 {t('resources.videoResourcesTitle')}</h2>

          <div
            style={{
              background: '#0d1117',
              border: '1px solid #1f2937',
              borderRadius: 12,
              padding: '12px',
              maxWidth: 900,
              margin: '0 auto 1rem'
            }}
          >
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                key={playlistId}
                src={embedUrl}
                title="Resources playlist"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>

          {!playlistMap[lang] && (
            <p style={{ textAlign: 'center', color: '#c9d1d9', fontSize: '.9rem' }}>
              {t('resources.playlistComingSoon')}
            </p>
          )}
        </div>
      </section>

      <section className="disclaimer">
        <p><strong>⚠️ {t('resources.noteTitle')}:</strong> {t('resources.noteContent')}</p>
      </section>
    </div>
  )
}

export default Resources

