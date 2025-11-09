import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Rights from './pages/Rights'
import Resources from './pages/Resources'
import Help from './pages/Help'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App

