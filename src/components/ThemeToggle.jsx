import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const ToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  box-shadow: 0 4px 15px ${({ theme }) => theme.primary}40;
  
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    color: white;
    
    &:first-child {
      transform: ${({ isDarkMode }) => isDarkMode ? 'translateY(100px)' : 'translateY(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ isDarkMode }) => isDarkMode ? 'translateY(0)' : 'translateY(-100px)'};
    }
  }
`

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme, theme } = useTheme()

    return (
        <ToggleButton
            isDarkMode={isDarkMode}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            theme={theme}
        >
            <motion.svg
                whileHover={{ rotate: 20 }}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                />
            </motion.svg>
            <motion.svg
                whileHover={{ rotate: -20 }}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </motion.svg>
        </ToggleButton>
    )
}

export default ThemeToggle