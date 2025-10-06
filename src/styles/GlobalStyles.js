// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components'

// Safe fallback theme
const fallbackTheme = {
  body: '#FFFFFF',
  text: '#363537',
  primary: '#007BFF',
  background: '#FAFAFA',
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => (theme ? theme.body : fallbackTheme.body)};
    color: ${({ theme }) => (theme ? theme.text : fallbackTheme.text)};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${({ theme }) => (theme ? theme.primary : fallbackTheme.primary)};
    color: ${({ theme }) => (theme ? theme.body : fallbackTheme.body)};
  }
`