import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 5%;
  background: ${({ theme }) => theme.sectionProjects};
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

  @media (max-width: 480px) {
    padding: 4rem 1rem;
    margin: 1rem auto;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px ${({ theme }) => theme.cardShadow};
  transition: all 0.4s ease;
  border: 1px solid ${({ theme }) => theme.card}33;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px ${({ theme }) => theme.primary}30;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme, status }) =>
    status === 'current'
      ? '#22C55E'
      : status === 'recent'
        ? '#3B82F6'
        : '#8B5CF6'};
    z-index: 2;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex: 1;
  margin-right: 1rem;
`

const ProjectDate = styled(motion.span)`
  background: ${({ theme, status }) =>
    status === 'current'
      ? 'linear-gradient(135deg, #22C55E, #16A34A)'
      : status === 'recent'
        ? 'linear-gradient(135deg, #3B82F6, #2563EB)'
        : 'linear-gradient(135deg, #8B5CF6, #7C3AED)'};
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`

const ProjectImage = styled(motion.div)`
  height: 220px;
  background: ${({ theme, gradient, imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : (gradient || theme.gradient)};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg, 
      rgba(0,0,0,0.7) 0%,
      rgba(0,0,0,0.3) 50%,
      rgba(0,0,0,0.7) 100%
    );
    transition: all 0.8s ease;
  }

  &::after {
    content: '${({ title }) => title}';
    position: relative;
    z-index: 2;
    padding: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    transition: all 0.3s ease;
  }

  ${ProjectCard}:hover &::before {
    background: linear-gradient(
      45deg, 
      rgba(0,0,0,0.5) 0%,
      rgba(0,0,0,0.2) 50%,
      rgba(0,0,0,0.5) 100%
    );
  }

  ${ProjectCard}:hover &::after {
    transform: translateY(-5px);
  }
`

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.7;
  opacity: 0.9;
  flex: 1;
  font-size: 1rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled(motion.span)`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.primary}33;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px ${({ theme }) => theme.primary}40;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: auto;
`

const ProjectLink = styled(motion.a)`
  background: ${({ theme }) => theme.gradient};
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  flex: 1;
  justify-content: center;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px ${({ theme }) => theme.primary}50;
    text-decoration: none;
  }
`

const SecondaryLink = styled(ProjectLink)`
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px) scale(1.05);
  }
`

const ProjectHighlight = styled(motion.div)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ status }) =>
    status === 'current'
      ? 'linear-gradient(135deg, #22C55E, #16A34A)'
      : status === 'recent'
        ? 'linear-gradient(135deg, #3B82F6, #2563EB)'
        : 'linear-gradient(135deg, #8B5CF6, #7C3AED)'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 3;
`

const Projects = () => {
  const { theme, isDarkMode } = useTheme()

  // Projects in chronological order (newest first)
  const projects = [
    {
      title: "EV Charging Station Booking System - EVConnect",
      shortTitle: "EVConnect",
      date: "Oct 2025 - Present",
      status: "current",
      description: "Full-stack client-server EV Charging Station Booking System with enterprise-grade specifications. Features user management, charging station operations, and booking lifecycle management.",
      tech: ["C# (.NET)", "Web API", "MongoDB", "React.js", "Bootstrap", "IIS", "Android", "SQLite"],
      demoLink: 'https://mysliit-my.sharepoint.com/personal/it22077110_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit22077110%5Fmy%5Fsliit%5Flk%2FDocuments%2FRecording%2D20251014%5F113226%2Ewebm&nav=%7B%22defaultNavPanel%22%3A%7B%22pluginName%22%3A%22MediaSettingsLayer%22%7D%7D&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ec1c14768%2Dba42%2D4007%2D91e9%2D2ebcbbb624ca',
      codeLink: "https://github.com/Tharushika251/EVConnect",
      gradient: "linear-gradient(135deg, #7C3AED, #9D4EDD, #C084FC)",
      imageUrl: "/projects/evconnect.png"
    },
    {
      title: "Social Media Application - Pingy",
      shortTitle: "Pingy",
      date: "Aug 2025",
      status: "recent",
      description: "Modern social media platform with real-time chat, posts, stories, and user engagement features. Integrated authentication and media optimization.",
      tech: ["React.js", "Clerk Auth", "Supabase", "Node.js", "Express.js", "MongoDB"],
      demoLink: 'https://mysliit-my.sharepoint.com/personal/it22077110_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit22077110_my_sliit_lk%2FDocuments%2FRecording-20251013_184432%2Ewebm&nav=%7B"defaultNavPanel"%3A%7B"pluginName"%3A"MediaSettingsLayer"%7D%7D&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edcad44e4-fc08-41c5-ba66-784f87726ff2',
      codeLink: "https://github.com/Tharushika251/Pingy",
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA, #93C5FD)",
      imageUrl: "/projects/pingy.png"
    },
    {
      title: "Quiz Management System - AcademIQ",
      shortTitle: "AcademIQ",
      date: "June 2025",
      status: "recent",
      description: "Role-based quiz platform for teachers and students with real-time timers, performance analytics, and global leaderboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      demoLink: 'https://mysliit-my.sharepoint.com/personal/it22077110_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit22077110_my_sliit_lk%2FDocuments%2FRecording-20251013_193410%2Ewebm&nav=%7B"defaultNavPanel"%3A%7B"pluginName"%3A"MediaSettingsLayer"%7D%7D&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E61ee40de-0a35-4e5d-9c4b-c700da41b558',
      codeLink: "https://github.com/Tharushika251/AcademIQ",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA, #C4B5FD)",
      imageUrl: "/projects/academiq.png"
    },
    {
      title: "Cloud-Native Food Ordering System - Foodie",
      shortTitle: "Foodie",
      date: "Apr 2025",
      status: "completed",
      description: "Microservices-based food ordering and delivery system with containerization, Kubernetes orchestration, and role-based authentication.",
      tech: ["React.js", "Node.js", "Docker", "Kubernetes", "MongoDB", "Supabase"],
      demoLink: 'https://mysliit-my.sharepoint.com/personal/it22077110_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit22077110%5Fmy%5Fsliit%5Flk%2FDocuments%2FRecording%2D20251006%5F032606%2Ewebm&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E04a823cc%2D9302%2D4af5%2D9cb5%2D7d3bd48269af',
      codeLink: "https://github.com/Tharushika251/Foodie",
      gradient: "linear-gradient(135deg, #EC4899, #F472B6, #F9A8D4)",
      imageUrl: "/projects/foodie.png"
    },
    {
      title: "Rest Countries API",
      shortTitle: "Rest Countries API",
      date: "Mar 2025",
      status: "completed",
      description: "Responsive React application integrating REST Countries API with detailed country views, search functionality, and user session management.",
      tech: ["React.js", "REST API", "CSS3", "Local Storage"],
      demoLink: 'https://mysliit-my.sharepoint.com/personal/it22077110_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit22077110_my_sliit_lk%2FDocuments%2FRecording-20251013_175416%2Ewebm&nav=%7B"defaultNavPanel"%3A%7B"pluginName"%3A"MediaSettingsLayer"%7D%7D&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3394ea60-e6e0-4946-a05b-239c7c29120a',
      codeLink: "https://github.com/Tharushika251/Rest_Countries_API",
      gradient: "linear-gradient(135deg, #10B981, #34D399, #6EE7B7)",
      imageUrl: "/projects/restCountriesAPI.png"
    }
  ]

  const getStatusLabel = (status) => {
    switch (status) {
      case 'current': return '🚀 Current Project';
      case 'recent': return '⭐ Recent';
      case 'completed': return '✅ Completed';
      default: return '📁 Project';
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  return (
    <ProjectsSection id="projects" theme={theme} isDarkMode={isDarkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true, margin: "-100px" }}
        theme={theme}
      >
        Featured Projects
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              theme={theme}
              status={project.status}
            >
              <ProjectHighlight
                status={project.status}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {getStatusLabel(project.status)}
              </ProjectHighlight>

              <ProjectImage
                theme={theme}
                gradient={project.gradient}
                imageUrl={project.imageUrl}
                title={project.shortTitle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle theme={theme}>
                    {project.title.split(' - ')[0]}
                    {project.title.split(' - ')[1] && (
                      <div style={{ fontSize: '1rem', opacity: 0.8, marginTop: '0.2rem' }}>
                        {project.title.split(' - ')[1]}
                      </div>
                    )}
                  </ProjectTitle>
                  <ProjectDate
                    theme={theme}
                    status={project.status}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.date}
                  </ProjectDate>
                </ProjectHeader>

                <ProjectDescription theme={theme}>
                  {project.description}
                </ProjectDescription>

                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag
                      key={tech}
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05 + techIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      theme={theme}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>

                <ProjectLinks>
                  <ProjectLink
                    href={project.demoLink}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    theme={theme}
                  >
                    🌐 Live Demo
                  </ProjectLink>
                  <SecondaryLink
                    href={project.codeLink}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    theme={theme}
                  >
                    💻 Source Code
                  </SecondaryLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsSection>
  )
}

export default Projects