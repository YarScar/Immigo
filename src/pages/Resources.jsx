import { useTranslation } from 'react-i18next'
import '../styles/App.css'

function Resources() {
  const { t, i18n } = useTranslation()

  // Playlist IDs per language
  const playlistMap = {
    en: 'PLtv4Zwto6R31UTw5ymlLzQEQaQu4vDPSI',
    es: 'PLtv4Zwto6R33EQeWboaCqDK0m03CFP4Zz',
    ar: 'PLtv4Zwto6R31YQyGOEUL1XFDydJRm9jA4',
    fr: 'PLtv4Zwto6R30xYio3yDfqWgdtSPSXWxx6',
    zh: 'PLtv4Zwto6R328Cyqm4_FuzfgSQJ7sTh5i'
  }

  const rawLang = (i18n.language || 'en').toLowerCase()
  const lang = rawLang.startsWith('zh') ? 'zh' : rawLang.split('-')[0]
  const playlistId = playlistMap[lang] || playlistMap.en
  const hl = lang === 'zh' ? 'zh-CN' : lang
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1&hl=${encodeURIComponent(hl)}`

  // Translation-driven IDs
  const legalAidIds = ['nilc', 'ian', 'aila']
  const hotlineIds = ['detentionHotline', 'iceLocator', 'unitedWeDream']
  const communityIds = ['localCenters', 'religiousOrgs', 'legalAidSocieties']

  // Static website links (language-independent)
  const legalAidLinks = {
    nilc: 'https://www.nilc.org',
    ian: 'https://www.immigrationadvocates.org',
    aila: 'https://www.aila.org'
  }

  return (
    <div className="page resources-page">
      <section className="page-header">
        <h1>{t('resources.title')}</h1>
        <p className="page-subtitle">{t('resources.subtitle')}</p>
      </section>

      <section className="resources-content">
        {/* Legal Aid Organizations */}
        <div className="resources-section">
          <h2>⚖️ {t('resources.legalAid.title')}</h2>
            <p>{t('resources.legalAid.description')}</p>
          <div className="resources-list">
            {legalAidIds.map(id => (
              <div key={id} className="resource-item">
                <h3>{t(`resources.legalAid.organizations.${id}.name`)}</h3>
                <p>{t(`resources.legalAid.organizations.${id}.description`)}</p>
                <a href={legalAidLinks[id]} target="_blank" rel="noopener noreferrer" className="resource-link">
                  {t('resources.visitWebsite')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Hotlines */}
        <div className="resources-section">
          <h2>📞 {t('resources.hotlines.title')}</h2>
          <p>{t('resources.hotlines.description')}</p>
          <div className="resources-list">
            {hotlineIds.map(id => (
              <div key={id} className="resource-item">
                <h3>{t(`resources.hotlines.entries.${id}.name`)}</h3>
                <p className="resource-phone">{t(`resources.hotlines.entries.${id}.phone`)}</p>
                <p>{t(`resources.hotlines.entries.${id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Organizations */}
        <div className="resources-section">
          <h2>🤝 {t('resources.community.title')}</h2>
          <p>{t('resources.community.description')}</p>
          <div className="resources-list">
            {communityIds.map(id => (
              <div key={id} className="resource-item">
                <h3>{t(`resources.community.entries.${id}.name`)}</h3>
                <p>{t(`resources.community.entries.${id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Resources */}
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

