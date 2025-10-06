import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.sectionContact || theme.background};
  backdrop-filter: blur(10px);
  border-top: 1px solid ${({ theme }) => theme.cardShadow};
  padding: 3rem 5%;
  margin-top: 4rem;
`

const BottomFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  font-size: 0.9rem;
`

const Footer = () => {
  const { theme } = useTheme()

  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer theme={theme}>     
      <BottomFooter>
        <Copyright theme={theme}>
          © {currentYear} Tharushika Rukshani. All rights reserved.
        </Copyright>
      </BottomFooter>
    </FooterContainer>
  )
}

export default Footer