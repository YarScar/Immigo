import '@/styles/app.css'
import '@/styles/navbar.css'
import '@/styles/chatbot.css'
import '@/styles/pages.css'
import Providers from './providers'
import Stars from '@/components/Stars'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export const metadata = {
  title: {
    default: 'Immigo – Immigrant Rights & Resources',
    template: '%s · Immigo',
  },
  description:
    'Immigo helps immigrants in the United States understand their rights, find trusted legal help and hotlines, and get involved — in six languages.',
  icons: { icon: '/favicon.ico' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5B9A8B',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <div className="App">
            <Stars />
            <Navbar />
            <main id="main" className="main-content">
              {children}
            </main>
            <Footer />
            <Chatbot />
          </div>
        </Providers>
      </body>
    </html>
  )
}
