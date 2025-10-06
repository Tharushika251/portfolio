import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'
import { FiMenu, FiX } from 'react-icons/fi'

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0; /* Changed from 1rem 5% to remove side padding */
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
  max-width: 1400px; /* Match section max-width */
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
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card};
    transform: translateY(-2px);
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 999;
  box-shadow: -4px 0 15px ${({ theme }) => theme.cardShadow};
`

const MobileNavLink = styled(NavLink)`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`

const Header = () => {
    const { theme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            theme={theme}
        >
            <HeaderContent>
                <Logo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} theme={theme}>
                    Tharushika Rukshani
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
                    <MobileNav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        theme={theme}
                    >
                        <MobileNavLink href="#home" onClick={() => setMenuOpen(false)} theme={theme}>Home</MobileNavLink>
                        <MobileNavLink href="#about" onClick={() => setMenuOpen(false)} theme={theme}>About</MobileNavLink>
                        <MobileNavLink href="#education" onClick={() => setMenuOpen(false)} theme={theme}>Education</MobileNavLink>
                        <MobileNavLink href="#skills" onClick={() => setMenuOpen(false)} theme={theme}>Skills</MobileNavLink>
                        <MobileNavLink href="#projects" onClick={() => setMenuOpen(false)} theme={theme}>Projects</MobileNavLink>
                        <MobileNavLink href="#contact" onClick={() => setMenuOpen(false)} theme={theme}>Contact</MobileNavLink>
                        <ThemeToggle />
                    </MobileNav>
                )}
            </AnimatePresence>
        </HeaderContainer>
    )
}

export default Header