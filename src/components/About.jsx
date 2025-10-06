import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 5%;
  background: ${({ theme }) => theme.sectionAbout};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme, isDarkMode }) =>
    isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(91, 33, 182, 0.1)'};
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 20px 20px 0 0;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const AboutText = styled(motion.div)`
  order: 1; /* Default order for large screens */

  @media (max-width: 768px) {
    order: 2; /* Text comes after image on medium and small screens */
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: ${({ theme, isDarkMode }) =>
      isDarkMode ? theme.text : theme.text};  line-height: 1.8;
    opacity: 0.95; 
    font-weight: 500; 
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);     font-size: 1.1rem;
  }
`

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 450px;
  height: 550px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 35px ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: 3px solid transparent;
  background: ${({ theme }) => theme.gradient};
  background-clip: padding-box;
  order: 2; /* Default order for large screens */

  @media (max-width: 768px) {
    order: 1; /* Image comes before text on medium and small screens */
    height: 450px;
    max-width: 380px;
  }

  @media (max-width: 480px) {
    height: 380px;
    max-width: 320px;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 45px ${({ theme }) => theme.primary}40;
  }
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const InfoItem = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 1.2rem;
  border-radius: 12px;
  border-left: 5px solid ${({ theme }) => theme.primary};
  box-shadow: 0 8px 25px ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  
  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
  
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.primary}30;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const About = () => {
  const { theme } = useTheme()

  return (
    <AboutSection id="about" theme={theme}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        theme={theme}
      >
        About Me
      </SectionTitle>

      <AboutContent>
        <AboutText
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          theme={theme}
        >
          <h3>Software Engineering Undergraduate</h3>
          <p>
            I'm a dedicated Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT),
            currently in my final year. I'm passionate about crafting clean, efficient, and user-focused software solutions
            that blend creativity with functionality.
          </p>
          <p>
            What started as curiosity for technology has grown into a deep enthusiasm for building impactful digital experiences —
            from designing intuitive interfaces to engineering scalable backend systems. I'm always eager to learn, innovate,
            and turn ideas into meaningful products.
          </p>

          <InfoGrid>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              theme={theme}
            >
              <strong>University:</strong> SLIIT
            </InfoItem>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              theme={theme}
            >
              <strong>Faculty:</strong> Computing
            </InfoItem>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              theme={theme}
            >
              <strong>Specialization:</strong> Software Engineering
            </InfoItem>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              theme={theme}
            >
              <strong>Year:</strong> 4th Year, 1st Semester
            </InfoItem>
          </InfoGrid>
        </AboutText>

        <ProfileImage
          src="/presentation2.jpg"
          alt="Tharushika Rukshani - Software Engineering Student"
          theme={theme}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        />
      </AboutContent>
    </AboutSection>
  )
}

export default About