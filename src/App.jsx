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
        {/* Glowing Stars */}
        <div className="star star-1">✨</div>
        <div className="star star-2">⭐</div>
        <div className="star star-3">✦</div>
        <div className="star star-4">✧</div>
        <div className="star star-5">★</div>
        <div className="star star-6">☆</div>
        <div className="star star-7">✶</div>
        <div className="star star-8">✷</div>
        <div className="star star-9">✸</div>
        <div className="star star-10">✹</div>
        <div className="star star-11">✺</div>
        <div className="star star-12">✻</div>
        <div className="star star-13">✨</div>
        <div className="star star-14">⭐</div>
        <div className="star star-15">✦</div>
        <div className="star star-16">✧</div>
        <div className="star star-17">★</div>
        <div className="star star-18">☆</div>
        <div className="star star-19">✶</div>
        <div className="star star-20">✷</div>
        <div className="star star-21">✸</div>
        <div className="star star-22">✹</div>
        <div className="star star-23">✺</div>
        <div className="star star-24">✻</div>
        
        {/* Shooting Stars */}
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>

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

