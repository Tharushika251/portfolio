// src/App.jsx
import React from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import styled, { keyframes } from 'styled-components'
import Footer from './components/Footer'
import Education from './components/Education'

const floatDown = keyframes`
  0% { transform: translateY(-10vh) scale(0.8); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.3; }
  100% { transform: translateY(110vh) scale(1.2); opacity: 0; }
`

const AppBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f111a 0%, #1a1c2e 40%, #2d1b69 100%);
  z-index: -2;
  overflow: hidden;
`

const FloatingSVG = styled.img`
  position: absolute;
  top: -10vh;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  opacity: ${({ opacity }) => opacity};
  animation: ${floatDown} ${({ duration }) => duration}s linear infinite;
  filter: blur(4px) brightness(0.6);
  z-index: -1;
  pointer-events: none;
  user-select: none;
`

const AppContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  position: relative;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`

const SectionOffset = styled.div`
  scroll-margin-top: 100px;
  margin: 2rem 0;
`

// Create a component that consumes the theme
const ThemedAppContent = () => {
  const { theme } = useTheme()

  // SVGs for developer tech stack
  const svgs = [
    '/svgs/react.svg',
    '/svgs/nodejs.svg',
    '/svgs/mongodb.svg',
    '/svgs/docker.svg',
    '/svgs/aws.svg',
    '/svgs/typescript.svg',
    '/svgs/git.svg',
    '/svgs/java.svg',
    '/svgs/mysql.svg',
    '/svgs/php.svg',
    '/svgs/android.svg',
    '/svgs/postman.svg',
    '/svgs/github.svg',
    '/svgs/javascript.svg',
  ]

  // Random floating SVG positions for entire app
  const floatingSvgs = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    src: svgs[Math.floor(Math.random() * svgs.length)],
    left: Math.random() * 100,
    size: Math.random() * 60 + 30,
    duration: Math.random() * 20 + 15,
    opacity: Math.random() * 0.3 + 0.1,
  }))

  return (
    <>
      <GlobalStyles theme={theme} />

      {/* Background for entire app */}
      <AppBackground>
        {floatingSvgs.map((svg) => (
          <FloatingSVG
            key={svg.id}
            src={svg.src}
            left={svg.left}
            size={svg.size}
            duration={svg.duration}
            opacity={svg.opacity}
          />
        ))}
      </AppBackground>

      <AppContainer theme={theme}>
        <Header />
        <main>
          <SectionOffset id="home">
            <Hero />
          </SectionOffset>
          <SectionOffset id="about">
            <About />
          </SectionOffset>
          <SectionOffset id="education">
            <Education />
          </SectionOffset>
          <SectionOffset id="skills">
            <Skills />
          </SectionOffset>
          <SectionOffset id="projects">
            <Projects />
          </SectionOffset>
          <SectionOffset id="contact">
            <Contact />
          </SectionOffset>
        </main>
        <Footer />
      </AppContainer>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedAppContent />
    </ThemeProvider>
  )
}

export default App