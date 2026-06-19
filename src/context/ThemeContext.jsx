import React, { createContext, useContext, useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../styles/GlobalStyles'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      const newIsDarkMode = savedTheme === 'dark'
      setIsDarkMode(newIsDarkMode)
      setTheme(newIsDarkMode ? darkTheme : lightTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
      setTheme(prefersDark ? darkTheme : lightTheme)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev
      localStorage.setItem('portfolio-theme', newTheme ? 'dark' : 'light')
      setTheme(newTheme ? darkTheme : lightTheme)
      return newTheme
    })
  }

  const value = {
    theme,
    isDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}