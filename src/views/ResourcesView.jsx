'use client'

import { useTranslation } from 'react-i18next'
import Disclaimer from '@/components/Disclaimer'
import { baseLanguage } from '@/i18n'
import { PLAYLISTS, HOTLINES, LEGAL_HELP, DETENTION_TOOLS, COMMUNITY, NEWS, FACT_CHECKERS } from '@/data/links'

function ResourceList({ items, section }) {
  const { t } = useTranslation()
  return (
    <div className="resources-list">
      {items.map((item) => (
        <div key={item.id} className="resource-item">
          <h3>{t(`resources.${section}.entries.${item.id}.name`)}</h3>
          {item.phone && (
            <p className="resource-phone">
              <a href={`tel:${item.phone.replace(/[^\d+]/g, '')}`}>{item.phone}</a>
            </p>
          )}
          {item.dial && <p className="resource-phone">{item.dial}</p>}
          <p>{t(`resources.${section}.entries.${item.id}.description`)}</p>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="resource-link">
              {t('resources.visitWebsite')}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

function Section({ id, icon, section, items, children }) {
  const { t } = useTranslation()
  return (
    <section className="resources-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        <span aria-hidden="true">{icon}</span> {t(`resources.${section}.title`)}
      </h2>
      <p>{t(`resources.${section}.description`)}</p>
      {children}
      {items && <ResourceList items={items} section={section} />}
    </section>
  )
}

function LinkChips({ items }) {
  return (
    <ul className="link-chips">
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function ResourcesView() {
  const { t, i18n } = useTranslation()
  const lang = baseLanguage(i18n.language)
  const playlist = PLAYLISTS[lang] || PLAYLISTS.en
  const hasOwnLanguage = Boolean(PLAYLISTS[lang])
  const hl = lang === 'zh' ? 'zh-CN' : lang
  const embedUrl = playlist.video
    ? `https://www.youtube-nocookie.com/embed/${playlist.video}?rel=0&hl=${hl}`
    : `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist.list}&rel=0&hl=${hl}`
  const watchUrl = playlist.video
    ? `https://www.youtube.com/watch?v=${playlist.video}`
    : `https://www.youtube.com/playlist?list=${playlist.list}`

  return (
    <div className="page resources-page">
      <section className="page-header">
        <h1>{t('resources.title')}</h1>
        <p className="page-subtitle">{t('resources.subtitle')}</p>
      </section>

      <div className="resources-content">
        {/* The video comes first: it's the fastest way to learn your rights. */}
        <section className="resources-section video-section" id="videos" aria-labelledby="videos-title">
          <h2 id="videos-title">
            <span aria-hidden="true">🎥</span> {t('resources.video.title')}
          </h2>
          <p>{t('resources.video.description')}</p>
          <div className="video-frame">
            <div className="video-ratio">
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={t('resources.video.title')}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="video-credit">
            {t('resources.video.credit', { source: playlist.source })}{' '}
            {!hasOwnLanguage && t('resources.video.comingSoon')}{' '}
            <a href={watchUrl} target="_blank" rel="noopener noreferrer">
              {t('resources.video.watchOnYoutube')}
            </a>
          </p>
        </section>

        <Section id="hotlines" icon="📞" section="hotlines" items={HOTLINES}>
          <p className="emergency-callout">{t('resources.hotlines.emergency')}</p>
        </Section>

        <Section id="detained" icon="🔎" section="detention" items={DETENTION_TOOLS} />

        <Section id="legal-help" icon="⚖️" section="legalAid" items={LEGAL_HELP}>
          <p className="callout">{t('resources.legalAid.notarioWarning')}</p>
        </Section>

        <Section id="community" icon="🤝" section="community" items={COMMUNITY} />

        <section className="resources-section news-section" id="news" aria-labelledby="news-title">
          <h2 id="news-title">
            <span aria-hidden="true">📰</span> {t('resources.news.title')}
          </h2>
          <p>{t('resources.news.description')}</p>
          <div className="news-warning" role="note">
            <h3>⚠️ {t('resources.news.warningTitle')}</h3>
            <p>{t('resources.news.warningText')}</p>
          </div>
          <h3 className="chips-heading">{t('resources.news.sourcesTitle')}</h3>
          <LinkChips items={NEWS} />
          <h3 className="chips-heading">{t('resources.news.checkersTitle')}</h3>
          <LinkChips items={FACT_CHECKERS} />
        </section>
      </div>

      <Disclaimer text={t('resources.noteContent')} />
    </div>
  )
}
