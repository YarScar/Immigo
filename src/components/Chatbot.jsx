import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import '../styles/Chatbot.css'

function Chatbot() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY

  const handleSend = async () => {
    if (!input.trim() || !apiKey) return

    const userMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const model = 'gemini-2.5-flash'
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: t('chatbot.systemPrompt') }]
            },
            contents: newMessages.map(m => ({
              role: m.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: m.content }]
            })),
            generationConfig: { temperature: 0.7 }
          })
        }
      )

      const data = await response.json()
      if (!response.ok) throw new Error(data.error?.message || 'Gemini request failed')

      const assistantText =
        data.candidates?.[0]?.content?.parts
          ?.map(p => p.text)
          .join(' ')
          .trim() || t('chatbot.error')

      const assistantMessage = { role: 'assistant', content: assistantText }
      setMessages([...newMessages, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        role: 'assistant',
        content: t('chatbot.error')
      }
      setMessages([...newMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!apiKey) {
    return (
      <div className="chatbot-warning">
        <p>{t('chatbot.apiKeyMissing')}</p>
      </div>
    )
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('chatbot.toggleAria')}
      >
        🤖 {t('chatbot.title')}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>{t('chatbot.title')}</h3>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label={t('chatbot.closeAria')}
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <p>{t('chatbot.welcomeGreeting')}</p>
                <p>{t('chatbot.welcomePrompt')}</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
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
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatbot.placeholder')}
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="chatbot-send"
              disabled={isLoading || !input.trim()}
            >
              {t('chatbot.send')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot

