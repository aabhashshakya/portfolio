import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    // Cursor glow effect
    const cursorGlow = document.createElement('div')
    cursorGlow.className = 'cursor-glow'
    document.body.appendChild(cursorGlow)

    const handleMouseMove = (e: MouseEvent) => {
      cursorGlow.style.left = e.clientX - 10 + 'px'
      cursorGlow.style.top = e.clientY - 10 + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Create matrix rain effect
    const createMatrixRain = () => {
      const matrixContainer = document.createElement('div')
      matrixContainer.className = 'matrix-bg'
      document.body.appendChild(matrixContainer)

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      
      for (let i = 0; i < 30; i++) {
        const char = document.createElement('div')
        char.className = 'matrix-char'
        char.textContent = chars[Math.floor(Math.random() * chars.length)]
        char.style.left = Math.random() * 100 + '%'
        char.style.animationDelay = Math.random() * 20 + 's'
        char.style.animationDuration = (Math.random() * 10 + 10) + 's'
        matrixContainer.appendChild(char)
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.body.removeChild(cursorGlow)
        document.body.removeChild(matrixContainer)
      }
    }

    const cleanup = createMatrixRain()
    return cleanup
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App