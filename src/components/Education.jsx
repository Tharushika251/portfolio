import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const EducationSection = styled.section`
  min-height: 100vh;
  padding: 6rem 5%;
  background: ${({ theme }) => theme.sectionEducation};
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
  margin-bottom: 4rem;
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
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`

const EducationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const EducationCategory = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const CategoryTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const EducationGrid = styled.div`
  display: grid;
  gap: 2rem;
`

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.cardShadow};
  border-left: 5px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.primary}20;

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`

const EducationLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

// Updated to use circular shape
const InstituteLogo = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%; /* Changed from 15px to 50% for perfect circle */
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.primary}33;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`

// Updated for circular images
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Changed from 12px to 50% for perfect circle */
`

// Updated for circular placeholder
const PlaceholderLogo = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  border-radius: 50%; /* Changed from 12px to 50% for perfect circle */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`

const EducationInfo = styled.div`
  flex: 1;
`

const EducationTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0 0 0.5rem 0;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const InstitutionName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: block;
  margin-bottom: 0.3rem;
`

const InstitutionDetails = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  display: block;
`

const EducationRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
`

const EducationDuration = styled.div`
  background: ${({ theme }) => theme.gradient};
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const StatusBadge = styled.span`
  background: ${({ theme }) => theme.success};
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`

const EducationDescription = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.7;
  opacity: 0.9;
  margin-top: 1rem;
  font-size: 1rem;
  border-top: 1px solid ${({ theme }) => theme.cardShadow};
  padding-top: 1rem;
`

const Education = () => {
    const { theme } = useTheme()

    const educationData = {
        university: [
            {
                id: 1,
                title: "BSC (Hons) in Information Technology",
                institution: "Sri Lanka Institute of Information Technology (SLIIT)",
                details: "GPA - 3.0",
                duration: "July 2022 - Current",
                status: "Ongoing",
                description: "Specializing in software engineering, web development, and database management systems.",
                logo: "/institutes/sliit-logo.png"
            }
        ],
        certificates: [
            {
                id: 1,
                title: "Short Course in Human Resource Management",
                institution: "Open University of Sri Lanka",
                details: "Professional Development",
                duration: "May 2022 - Aug 2022",
                description: "Comprehensive understanding of HR principles, recruitment, and organizational management.",
                logo: "/institutes/ousl-logo.png"
            },
            {
                id: 2,
                title: "Advanced Certificate in English",
                institution: "Rajarata University of Sri Lanka",
                details: "Language Proficiency",
                duration: "Apr 2022 - Apr 2023",
                description: "Advanced English language skills focusing on professional communication and writing.",
                logo: "/institutes/rajarata-logo.png"
            }
        ],
        school: [
            {
                id: 1,
                title: "Science Stream",
                institution: "Royal College, Polonnaruwa",
                details: "GCE Advanced Level",
                duration: "Jan 2018 - Jan 2020",
                description: "Focused on Physical Science stream with mathematics, physics, and chemistry as main subjects.",
                logo: "/institutes/royal-college-logo.jpeg"
            }
        ],
        courses: [
            {
                id: 1,
                title: "A Beginner's Guide to Enterprise Resource Planning (ERP) Systems",
                institution: "Alison",
                details: "Online Course",
                duration: "July 2025",
                description: "Understanding ERP systems, their implementation, and business process integration.",
                logo: "/institutes/alison-logo.png"
            }
        ]
    }

    const getInitials = (institutionName) => {
        return institutionName
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 3)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const logoVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    }

    return (
        <EducationSection id="education" theme={theme}>
            <SectionTitle
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                theme={theme}
            >
                Education
            </SectionTitle>

            <EducationContainer>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* University Education */}
                    <EducationCategory>
                        <CategoryTitle theme={theme}>University Education</CategoryTitle>
                        <EducationGrid>
                            {educationData.university.map((edu) => (
                                <EducationCard
                                    key={edu.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    theme={theme}
                                >
                                    <EducationHeader>
                                        <EducationLeft>
                                            <InstituteLogo
                                                variants={logoVariants}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                {edu.logo ? (
                                                    <LogoImage
                                                        src={edu.logo}
                                                        alt={`${edu.institution} logo`}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none'
                                                            e.target.nextSibling.style.display = 'flex'
                                                        }}
                                                    />
                                                ) : (
                                                    <PlaceholderLogo theme={theme}>
                                                        {getInitials(edu.institution)}
                                                    </PlaceholderLogo>
                                                )}
                                            </InstituteLogo>
                                            <EducationInfo>
                                                <EducationTitle theme={theme}>
                                                    {edu.title}
                                                </EducationTitle>
                                                <InstitutionName theme={theme}>
                                                    {edu.institution}
                                                </InstitutionName>
                                                <InstitutionDetails theme={theme}>
                                                    {edu.details}
                                                </InstitutionDetails>
                                            </EducationInfo>
                                        </EducationLeft>
                                        <EducationRight>
                                            <EducationDuration theme={theme}>
                                                {edu.duration}
                                            </EducationDuration>
                                            {edu.status && <StatusBadge theme={theme}>{edu.status}</StatusBadge>}
                                        </EducationRight>
                                    </EducationHeader>
                                    <EducationDescription theme={theme}>
                                        {edu.description}
                                    </EducationDescription>
                                </EducationCard>
                            ))}
                        </EducationGrid>
                    </EducationCategory>

                    {/* Professional Certificates */}
                    <EducationCategory>
                        <CategoryTitle theme={theme}>Professional Certificates</CategoryTitle>
                        <EducationGrid>
                            {educationData.certificates.map((cert) => (
                                <EducationCard
                                    key={cert.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    theme={theme}
                                >
                                    <EducationHeader>
                                        <EducationLeft>
                                            <InstituteLogo
                                                variants={logoVariants}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                {cert.logo ? (
                                                    <LogoImage
                                                        src={cert.logo}
                                                        alt={`${cert.institution} logo`}
                                                    />
                                                ) : (
                                                    <PlaceholderLogo theme={theme}>
                                                        {getInitials(cert.institution)}
                                                    </PlaceholderLogo>
                                                )}
                                            </InstituteLogo>
                                            <EducationInfo>
                                                <EducationTitle theme={theme}>
                                                    {cert.title}
                                                </EducationTitle>
                                                <InstitutionName theme={theme}>
                                                    {cert.institution}
                                                </InstitutionName>
                                                <InstitutionDetails theme={theme}>
                                                    {cert.details}
                                                </InstitutionDetails>
                                            </EducationInfo>
                                        </EducationLeft>
                                        <EducationRight>
                                            <EducationDuration theme={theme}>
                                                {cert.duration}
                                            </EducationDuration>
                                        </EducationRight>
                                    </EducationHeader>
                                    <EducationDescription theme={theme}>
                                        {cert.description}
                                    </EducationDescription>
                                </EducationCard>
                            ))}
                        </EducationGrid>
                    </EducationCategory>

                    {/* School Education */}
                    <EducationCategory>
                        <CategoryTitle theme={theme}>School Education</CategoryTitle>
                        <EducationGrid>
                            {educationData.school.map((school) => (
                                <EducationCard
                                    key={school.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    theme={theme}
                                >
                                    <EducationHeader>
                                        <EducationLeft>
                                            <InstituteLogo
                                                variants={logoVariants}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                {school.logo ? (
                                                    <LogoImage
                                                        src={school.logo}
                                                        alt={`${school.institution} logo`}
                                                    />
                                                ) : (
                                                    <PlaceholderLogo theme={theme}>
                                                        {getInitials(school.institution)}
                                                    </PlaceholderLogo>
                                                )}
                                            </InstituteLogo>
                                            <EducationInfo>
                                                <EducationTitle theme={theme}>
                                                    {school.title}
                                                </EducationTitle>
                                                <InstitutionName theme={theme}>
                                                    {school.institution}
                                                </InstitutionName>
                                                <InstitutionDetails theme={theme}>
                                                    {school.details}
                                                </InstitutionDetails>
                                            </EducationInfo>
                                        </EducationLeft>
                                        <EducationRight>
                                            <EducationDuration theme={theme}>
                                                {school.duration}
                                            </EducationDuration>
                                        </EducationRight>
                                    </EducationHeader>
                                    <EducationDescription theme={theme}>
                                        {school.description}
                                    </EducationDescription>
                                </EducationCard>
                            ))}
                        </EducationGrid>
                    </EducationCategory>

                    {/* Online Courses */}
                    <EducationCategory>
                        <CategoryTitle theme={theme}>Online Courses</CategoryTitle>
                        <EducationGrid>
                            {educationData.courses.map((course) => (
                                <EducationCard
                                    key={course.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    theme={theme}
                                >
                                    <EducationHeader>
                                        <EducationLeft>
                                            <InstituteLogo
                                                variants={logoVariants}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                {course.logo ? (
                                                    <LogoImage
                                                        src={course.logo}
                                                        alt={`${course.institution} logo`}
                                                    />
                                                ) : (
                                                    <PlaceholderLogo theme={theme}>
                                                        {getInitials(course.institution)}
                                                    </PlaceholderLogo>
                                                )}
                                            </InstituteLogo>
                                            <EducationInfo>
                                                <EducationTitle theme={theme}>
                                                    {course.title}
                                                </EducationTitle>
                                                <InstitutionName theme={theme}>
                                                    {course.institution}
                                                </InstitutionName>
                                                <InstitutionDetails theme={theme}>
                                                    {course.details}
                                                </InstitutionDetails>
                                            </EducationInfo>
                                        </EducationLeft>
                                        <EducationRight>
                                            <EducationDuration theme={theme}>
                                                {course.duration}
                                            </EducationDuration>
                                        </EducationRight>
                                    </EducationHeader>
                                    <EducationDescription theme={theme}>
                                        {course.description}
                                    </EducationDescription>
                                </EducationCard>
                            ))}
                        </EducationGrid>
                    </EducationCategory>
                </motion.div>
            </EducationContainer>
        </EducationSection>
    )
}

export default Education