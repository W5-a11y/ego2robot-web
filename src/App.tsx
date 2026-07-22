import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Benchmark from './pages/Benchmark'
import ConsortiumPage from './pages/ConsortiumPage'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benchmark" element={<Benchmark />} />
        <Route path="/consortium" element={<ConsortiumPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <a
        href="mailto:contact@ego2robot.org"
        aria-label="Contact the consortium"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </MotionConfig>
  )
}
