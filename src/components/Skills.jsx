// src/components/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 5%;
  background: ${({ theme }) => theme.sectionSkills};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme, isDarkMode }) =>
    isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(91, 33, 182, 0.1)'};
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1400px;
  box-shadow: ${({ theme }) =>
    theme.isDarkMode
      ? '0 20px 40px rgba(0,0,0,0.1)'
      : '0 10px 30px rgba(0,0,0,0.05)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.gradient : 'linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)'};
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
    background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.gradient : 'linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)'};
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px ${({ theme }) => theme.cardShadow};
  border: 1px solid ${({ theme }) => theme.card}33;
  transition: all 0.3s ease;
  height: fit-content;
  grid-column: ${({ isFullWidth }) => (isFullWidth ? '1 / -1' : 'auto')};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px ${({ theme }) => theme.primary}20;
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.gradient : 'linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px); /* fixed width per item */
  justify-content: center; /* center items */
  gap: 1rem; /* gap between items */

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem; /* space between icon and name */
  padding: 0.8rem; /* inner padding, responsive */
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.card}33;
  cursor: pointer;
  width: 100%;  
  max-width: 120px;
  height: 50px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.primary}15;
    border-color: ${({ theme }) => theme.primary}33;
  }

  @media (max-width: 1024px) {
    padding: 0.7rem;
    gap: 0.35rem;
  }

  @media (max-width: 768px) {
    max-width: 100px;
    height: 45px;
    padding: 0.6rem;
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    max-width: 80px;
    height: 40px;
    padding: 0.5rem;
    gap: 0.25rem;
  }
`

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: ${({ theme }) => (theme.isDarkMode ? 'invert(0.8)' : 'invert(0.3)')};
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    width: 21px;
    height: 21px;
  }
`

const SkillName = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  line-height: 1.2;

  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

const Skills = () => {
  const { theme, isDarkMode } = useTheme()

  const skillsData = [
    {
      category: 'Frontend & Languages',
      skills: [
        { name: 'HTML', icon: '/svgs/html.svg' },
        { name: 'CSS', icon: '/svgs/css.svg' },
        { name: 'JavaScript', icon: '/svgs/javascript.svg' },
        { name: 'TypeScript', icon: '/svgs/typescript.svg' },
        { name: 'PHP', icon: '/svgs/php.svg' },
        { name: 'React.js', icon: '/svgs/react.svg' },
      ],
    },
    {
      category: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: '/svgs/nodejs.svg' },
        { name: 'Express.js', icon: '/svgs/express.svg' },
        { name: 'MongoDB', icon: '/svgs/mongodb.svg' },
        { name: 'MySQL', icon: '/svgs/mysql.svg' },
        { name: 'Supabase', icon: '/svgs/supabase.svg' },
        { name: '.NET', icon: '/svgs/dotnet.svg' }, // ✅ Added .NET
      ],
    },
    {
      category: 'Mobile & Tools',
      skills: [
        { name: 'React Native', icon: '/svgs/react.svg' },
        { name: 'Android Studio', icon: '/svgs/android-studio.svg' },
        { name: 'Bootstrap', icon: '/svgs/bootstrap.svg' },
        { name: 'Tailwind', icon: '/svgs/tailwind.svg' },
        { name: 'VS Code', icon: '/svgs/vscode.svg' },
        { name: 'Visual Studio', icon: '/svgs/visual-studio.svg' },
        { name: 'IntelliJ', icon: '/svgs/intellij.svg' },
        { name: 'Postman', icon: '/svgs/postman.svg' },
        { name: 'Git', icon: '/svgs/git.svg' },
        { name: 'GitHub', icon: '/svgs/github.svg' },
        { name: 'Figma', icon: '/svgs/figma.svg' },
      ],
      isFullWidth: true,
    },
  ]

  return (
    <SkillsSection theme={theme} isDarkMode={isDarkMode} id="skills">
      <SectionTitle
        theme={theme}
        isDarkMode={isDarkMode}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </SectionTitle>

      <SkillsGrid>
        {skillsData.map((category, categoryIndex) => (
          <SkillCategory
            key={category.category}
            theme={theme}
            isFullWidth={category.isFullWidth}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle theme={theme} isDarkMode={isDarkMode}>
              {category.category}
            </CategoryTitle>

            <SkillsContainer>
              {category.skills.map((skill, index) => (
                <SkillItem
                  key={skill.name}
                  theme={theme}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SkillIcon
                    src={skill.icon}
                    alt={skill.name}
                    theme={theme}
                    onError={(e) => (e.target.src = '/svgs/default.svg')}
                  />
                  <SkillName theme={theme}>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  )
}

export default Skills
