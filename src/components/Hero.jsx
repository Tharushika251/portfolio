import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.sectionHero || 'transparent'};
  position: relative;
  overflow: hidden;
  padding: 0 5%;
  transition: background 0.3s ease;
  backdrop-filter: blur(8px);
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 2;
`

// 🌈 Animated gradient flow
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const AnimatedText = styled.span`
  display: inline-block;
  background: ${({ theme, isDarkMode }) =>
    isDarkMode
      ? theme.gradient
      : 'linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)'};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientFlow} 4s ease-in-out infinite;
`

const Title = styled(motion.h1)`
  font-size: 3.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  white-space: nowrap;
  color: ${({ theme }) => theme.primary || '#5B21B6'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.6rem;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.primary : (theme.text || '#5B21B6')};
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? '#E2E8F0' : '#1E293B'};  line-height: 1.8;
  opacity: 0.95; 
  font-weight: 500; 
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); 
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`

const CTAButton = styled(motion.button)`
  background: ${({ theme, isDarkMode }) =>
    isDarkMode
      ? theme.gradient
      : 'linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)'};
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.primary + '40' : 'rgba(124, 58, 237, 0.25)'};
  z-index: 2;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.primary + '70' : 'rgba(124, 58, 237, 0.4)'};
  }

  @media (max-width: 480px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
`

const Hero = () => {
  const { theme, isDarkMode } = useTheme()
  const [showGradient, setShowGradient] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <HeroSection id="home" theme={theme} isDarkMode={isDarkMode}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroContent>
          <Title variants={itemVariants} theme={theme}>
            {showGradient ? (
              <AnimatedText theme={theme} isDarkMode={isDarkMode}>
                Hi, I'm Tharushika Rukshani
              </AnimatedText>
            ) : (
              <TypeAnimation
                sequence={[
                  "Hi, I'm Tharushika Rukshani",
                  () => setShowGradient(true),
                ]}
                speed={50}
                repeat={0}
                style={{
                  color: isDarkMode ? theme.primary : '#5B21B6',
                }}
              />
            )}
          </Title>

          <Subtitle
            variants={itemVariants}
            theme={theme}
            isDarkMode={isDarkMode}
          >
            Software Engineer • Full-Stack Developer • Problem Solver
          </Subtitle>

          <Description variants={itemVariants} theme={theme} isDarkMode={isDarkMode}>
            I'm a passionate Software Engineering undergraduate at SLIIT who loves building impactful,
            high-performing, and user-focused digital solutions.
            <br />
            With a strong foundation in modern web and cloud technologies,
            I strive to turn innovative ideas into elegant, scalable applications that make a difference.
          </Description>

          <CTAButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            theme={theme}
            isDarkMode={isDarkMode}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Projects
          </CTAButton>
        </HeroContent>
      </motion.div>
    </HeroSection>
  )
}

export default Hero