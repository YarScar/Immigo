import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import OpenAI from 'openai'
import '../styles/Chatbot.css'

function Chatbot() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  const handleSend = async () => {
    if (!input.trim() || !apiKey) return

    const userMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: t('chatbot.systemPrompt')
          },
          ...newMessages
        ],
        temperature: 0.7
      })

      const assistantMessage = {
        role: 'assistant',
        content: response.choices[0].message.content
      }

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
                <p>{msg.content}</p>
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

