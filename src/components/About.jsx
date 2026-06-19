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
  order: 1;

  @media (max-width: 768px) {
    order: 2;
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
      isDarkMode ? theme.text : theme.text};
    opacity: 0.95;
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    font-size: 1.1rem;
  }
`

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  order: 2;

  @media (max-width: 768px) {
    order: 1;
  }
`

const MainImage = styled(motion.img)`
  width: 100%;
  max-width: 420px;
  height: 520px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 35px ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    height: 450px;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    height: 380px;
    max-width: 300px;
  }
`

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`

const Thumbnail = styled(motion.img)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  border: ${({ active, theme }) =>
    active
      ? `3px solid ${theme.primary}`
      : '2px solid transparent'};

  opacity: ${({ active }) => (active ? 1 : 0.7)};

  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-4px);
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
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
  const { theme, isDarkMode } = useTheme()
  const [selectedImage, setSelectedImage] = React.useState(0)

  const images = [
    "/about/batchPhoto.jpg",
    "/about/presentation.jpg",
    "/about/casual.jpeg",
    "/about/formal.jpg"
    
  ]

  return (
    <AboutSection id="about" theme={theme} isDarkMode={isDarkMode}>
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
          isDarkMode={isDarkMode}
        >
          <h3>Software Engineering Graduate</h3>
          <p>
            I'm a result-oriented Software Engineering graduate from the Sri Lanka Institute of 
            Information Technology (SLIIT) with a BSc (Hons) in Information Technology, 
            specializing in Software Engineering. I'm passionate about crafting clean, 
            efficient, and user-focused software solutions.
          </p>
          <p>
            With hands-on experience in full-stack development from my 6-month remote internship 
            at QMatrixAI (UK-based), I've worked with modern web technologies and agile 
            development practices. I'm currently seeking an Associate Software Engineer / 
            Frontend Developer position to leverage my technical skills in building 
            scalable, user-centric applications.
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
              <strong>Degree:</strong> BSc (Hons) IT
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
              <strong>Status:</strong> Coursework Completed
            </InfoItem>
          </InfoGrid>
        </AboutText>

        <ImageGallery>
          <MainImage
            key={selectedImage}
            src={images[selectedImage]}
            alt="Tharushika Rukshani"
            theme={theme}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          <ThumbnailContainer>
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                active={selectedImage === index}
                theme={theme}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </ThumbnailContainer>
        </ImageGallery>
      </AboutContent>
    </AboutSection>
  )
}

export default About