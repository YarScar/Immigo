'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { baseLanguage } from '@/i18n'

export const OPEN_CHAT_EVENT = 'immigo:open-chat'

// Anything on the page can open the assistant with openChat().
export function openChat() {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT))
}

// Links in replies open in a new tab so the conversation isn't lost.
const markdownComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
}

export default function Chatbot() {
  const { t, i18n } = useTranslation()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener(OPEN_CHAT_EVENT, open)
    return () => window.removeEventListener(OPEN_CHAT_EVENT, open)
  }, [])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  const send = async (text) => {
    const content = (text ?? input).trim()
    if (!content || isLoading) return

    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, language: baseLanguage(i18n.language) }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.status === 503) {
        setUnavailable(true)
        setMessages([...next, { role: 'assistant', content: t('chatbot.unavailable') }])
        return
      }
      if (!res.ok || !data.reply) throw new Error('chat failed')
      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...next, { role: 'assistant', content: t('chatbot.error') }])
    } finally {
      setIsLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const suggestions = t('chatbot.suggestions', { returnObjects: true })

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls="chatbot-window"
        aria-label={t('chatbot.toggleAria')}
      >
        <span aria-hidden="true">💬</span> {t('chatbot.title')}
      </button>

      {isOpen && (
        <div id="chatbot-window" className="chatbot-window" role="dialog" aria-label={t('chatbot.title')}>
          <div className="chatbot-header">
            <h3>{t('chatbot.title')}</h3>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label={t('chatbot.closeAria')}
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages" ref={listRef} aria-live="polite">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <p className="chatbot-welcome-title">{t('chatbot.welcomeGreeting')}</p>
                <p>{t('chatbot.welcomePrompt')}</p>
                <p className="chatbot-note">{t('chatbot.notLegalAdvice')}</p>
                {Array.isArray(suggestions) && (
                  <div className="chatbot-suggestions">
                    {suggestions.map((s) => (
                      <button key={s} type="button" onClick={() => send(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.role}`}>
                <ReactMarkdown components={markdownComponents}>{msg.content}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <p>{t('chatbot.thinking')}</p>
              </div>
            )}
          </div>

          <div className="chatbot-input-container">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t('chatbot.placeholder')}
              className="chatbot-input"
              disabled={isLoading || unavailable}
              maxLength={2000}
              aria-label={t('chatbot.placeholder')}
            />
            <button
              type="button"
              onClick={() => send()}
              className="chatbot-send"
              disabled={isLoading || unavailable || !input.trim()}
            >
              {t('chatbot.send')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
