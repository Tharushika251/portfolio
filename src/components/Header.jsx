// import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import styled from 'styled-components'
// import ThemeToggle from './ThemeToggle'
// import { useTheme } from '../context/ThemeContext'
// import { FiMenu, FiX } from 'react-icons/fi'

// const HeaderContainer = styled(motion.header)`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   padding: 1rem 0; /* Changed from 1rem 5% to remove side padding */
//   background: ${({ theme }) => theme.body}99;
//   backdrop-filter: blur(10px);
//   z-index: 1000;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid ${({ theme }) => theme.cardShadow};
// `

// const HeaderContent = styled.div`
//   width: 100%;
//   max-width: 1400px; /* Match section max-width */
//   margin: 0 auto;
//   padding: 0 5%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const Logo = styled(motion.div)`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: ${({ theme }) => theme.primary};
//   background: ${({ theme }) => theme.gradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `

// const Nav = styled.nav`
//   display: flex;
//   gap: 2rem;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// const NavLink = styled(motion.a)`
//   color: ${({ theme }) => theme.text};
//   text-decoration: none;
//   font-weight: 500;
//   cursor: pointer;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;
//   transition: all 0.3s ease;
  
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//     background: ${({ theme }) => theme.card};
//     transform: translateY(-2px);
//   }
// `

// const MobileMenuIcon = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: ${({ theme }) => theme.text};
//   }
// `

// const MobileNav = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 70%;
//   max-width: 300px;
//   height: 100vh;
//   background: ${({ theme }) => theme.body};
//   backdrop-filter: blur(10px);
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   z-index: 1002;
//   box-shadow: -4px 0 15px ${({ theme }) => theme.cardShadow};
// `

// const MobileNavLink = styled(NavLink)`
//   margin-bottom: 1.5rem;
//   font-size: 1.2rem;
// `

// const Header = () => {
//     const { theme } = useTheme()
//     const [menuOpen, setMenuOpen] = useState(false)
//     const mobileNavRef = useRef(null)

//     useEffect(() => {
//       const handleResize = () => {
//         if (window.innerWidth > 768) {
//           setMenuOpen(false)
//         }
//       }

//       window.addEventListener('resize', handleResize)

//       return () => {
//         window.removeEventListener('resize', handleResize)
//       }
//     }, [])

//     useEffect(() => {
//       document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

//       return () => {
//         document.body.style.overflow = 'auto'
//       }
//     }, [menuOpen])

//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (
//           menuOpen &&
//           mobileNavRef.current &&
//           !mobileNavRef.current.contains(event.target)
//         ) {
//           setMenuOpen(false)
//         }
//       }

//       document.addEventListener('mousedown', handleClickOutside)

//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside)
//       }
//     }, [menuOpen])

//     return (
//         <HeaderContainer
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.5 }}
//             theme={theme}
//         >
//             <HeaderContent>
//                 <Logo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} theme={theme}>
//                     TR
//                 </Logo>

//                 <Nav>
//                     <NavLink href="#home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Home</NavLink>
//                     <NavLink href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>About</NavLink>
//                     <NavLink href="#education" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Education</NavLink>
//                     <NavLink href="#skills" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Skills</NavLink>
//                     <NavLink href="#projects" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Projects</NavLink>
//                     <NavLink href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Contact</NavLink>
//                     <ThemeToggle />
//                 </Nav>

//                 <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)} theme={theme}>
//                     {menuOpen ? <FiX /> : <FiMenu />}
//                 </MobileMenuIcon>
//             </HeaderContent>

//             <AnimatePresence>
//               {menuOpen && (
//                 <>
//                   <MobileNav
//                     ref={mobileNavRef}
//                     initial={{ x: '100%' }}
//                     animate={{ x: 0 }}
//                     exit={{ x: '100%' }}
//                     transition={{
//                       type: 'spring',
//                       stiffness: 300,
//                       damping: 30
//                     }}
//                     theme={theme}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <MobileNavLink
//                       href="#home"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       Home
//                     </MobileNavLink>

//                     <MobileNavLink
//                       href="#about"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       About
//                     </MobileNavLink>

//                     <MobileNavLink
//                       href="#education"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       Education
//                     </MobileNavLink>

//                     <MobileNavLink
//                       href="#skills"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       Skills
//                     </MobileNavLink>

//                     <MobileNavLink
//                       href="#projects"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       Projects
//                     </MobileNavLink>

//                     <MobileNavLink
//                       href="#contact"
//                       onClick={() => setMenuOpen(false)}
//                       theme={theme}
//                     >
//                       Contact
//                     </MobileNavLink>

//                     <ThemeToggle />
//                   </MobileNav>
//                 </>
//               )}
//             </AnimatePresence>
//         </HeaderContainer>
//     )
// }

// export default Header

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'
import { FiMenu, FiX } from 'react-icons/fi'

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background: ${({ theme }) => theme.body}99;
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.cardShadow};
`

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card};
    transform: translateY(-2px);
  }

  /* Active state indicator for desktop */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 60%;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.card};
    }
  }
`

// Overlay for better UX when menu is open
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1001;
`

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem;
  z-index: 1002;
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.2);
  border-left: 1px solid ${({ theme }) => theme.cardShadow};
`

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* Hover state - professional */
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    transform: translateX(8px);
    padding-left: 1.5rem;
  }

  /* Active/selected state */
  &.active {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}10;
    font-weight: 600;
    border-left: 3px solid ${({ theme }) => theme.primary};
    padding-left: 1.5rem;
  }

  /* Hover with active indicator */
  &:hover::before {
    content: '→';
    position: absolute;
    left: 0;
    opacity: 1;
    transform: translateX(0);
  }

  &::before {
    content: '→';
    position: absolute;
    left: -10px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.primary};
  }

  /* Divider between links */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: ${({ theme }) => theme.cardShadow};
    opacity: 0.3;
  }
`

const MobileNavFooter = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.cardShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Position ThemeToggle inside footer */
  > div {
    margin-left: auto;
  }
`

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    transform: rotate(90deg);
  }
`

const Header = () => {
    const { theme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const mobileNavRef = useRef(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                setMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [menuOpen])

    // Scroll to section with smooth behavior
    const handleNavClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            theme={theme}
        >
            <HeaderContent>
                <Logo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} theme={theme}>
                    TR
                </Logo>

                <Nav>
                    <NavLink href="#home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Home</NavLink>
                    <NavLink href="#about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>About</NavLink>
                    <NavLink href="#education" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Education</NavLink>
                    <NavLink href="#skills" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Skills</NavLink>
                    <NavLink href="#projects" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Projects</NavLink>
                    <NavLink href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} theme={theme}>Contact</NavLink>
                    <ThemeToggle />
                </Nav>

                <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)} theme={theme}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </MobileMenuIcon>
            </HeaderContent>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />
                        <MobileNav
                            ref={mobileNavRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                            theme={theme}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <CloseButton
                                onClick={() => setMenuOpen(false)}
                                whileHover={{ rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                theme={theme}
                            >
                                <FiX />
                            </CloseButton>

                            <MobileNavLink
                                href="#home"
                                onClick={(e) => handleNavClick(e, '#home')}
                                theme={theme}
                            >
                                🏠 Home
                            </MobileNavLink>

                            <MobileNavLink
                                href="#about"
                                onClick={(e) => handleNavClick(e, '#about')}
                                theme={theme}
                            >
                                👤 About
                            </MobileNavLink>

                            <MobileNavLink
                                href="#education"
                                onClick={(e) => handleNavClick(e, '#education')}
                                theme={theme}
                            >
                                🎓 Education
                            </MobileNavLink>

                            <MobileNavLink
                                href="#skills"
                                onClick={(e) => handleNavClick(e, '#skills')}
                                theme={theme}
                            >
                                💡 Skills
                            </MobileNavLink>

                            <MobileNavLink
                                href="#projects"
                                onClick={(e) => handleNavClick(e, '#projects')}
                                theme={theme}
                            >
                                🚀 Projects
                            </MobileNavLink>

                            <MobileNavLink
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                theme={theme}
                            >
                                📧 Contact
                            </MobileNavLink>

                            <MobileNavFooter>
                                <div style={{ fontSize: '0.85rem', color: theme.textSecondary || '#888', marginRight:'135px'}}>
                                    {new Date().getFullYear()} TR
                                </div>
                                <ThemeToggle />
                            </MobileNavFooter>
                        </MobileNav>
                    </>
                )}
            </AnimatePresence>
        </HeaderContainer>
    )
}

export default Header