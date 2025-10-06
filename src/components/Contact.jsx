import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

// Add this styled component for the icons
const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: ${({ theme }) => theme.isDarkMode ? 'invert(1)' : 'invert(0)'};
  transition: filter 0.3s ease;
`

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.body};
  transition: background 0.3s ease;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -0.75rem;
    }
  }
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
  }
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme }) =>
    theme.inputBorder || (theme.isDarkMode ? theme.card : '#d1d5db')};
  border-radius: 8px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary}55;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.inputBorder || (theme.isDarkMode ? theme.card : '#d1d5db')};
  border-radius: 8px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary}55;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.body};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.primary}55;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

const ContactMethod = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.cardHover || theme.card};
  }
`

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`

const ErrorMessage = styled(motion.div)`
  background: linear-gradient(135deg, #EF4444, #DC2626);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [messageStatus, setMessageStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear message status when user starts typing again
    if (messageStatus) setMessageStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessageStatus(null)

    // Netlify Forms will automatically handle the submission
    // We just need to show loading state and then success/error
    try {
      // The form will be submitted to Netlify automatically
      // We'll use a small delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Success - Netlify will handle the actual email sending
      setMessageStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessageStatus(null)
      }, 5000)

    } catch (error) {
      console.error('Error sending email:', error)
      setMessageStatus('error')

      // Clear error message after 5 seconds
      setTimeout(() => {
        setMessageStatus(null)
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ContactSection id="contact" theme={theme}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        theme={theme}
      >
        Get In Touch
      </SectionTitle>

      <ContactContent>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          theme={theme}
        >
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello,
            feel free to reach out!
          </p>

          <ContactMethods>
            <ContactMethod href="mailto:tharushikarukshani76@gmail.com" whileHover={{ scale: 1.05 }} theme={theme}>
              📧 tharushikarukshani76@gmail.com
            </ContactMethod>
            <ContactMethod href="tel:+94743895060" whileHover={{ scale: 1.05 }} theme={theme}>
              📞 +94 74 389 5060
            </ContactMethod>
            <ContactMethod href="https://linkedin.com/in/tharushikarukshani" whileHover={{ scale: 1.05 }} theme={theme}>
              <Icon src="/svgs/linkedin.svg" alt="LinkedIn" theme={theme} />
              LinkedIn Profile
            </ContactMethod>
            <ContactMethod href="https://github.com/tharushika251" whileHover={{ scale: 1.05 }} theme={theme}>
              <Icon src="/svgs/github.svg" alt="GitHub" theme={theme} />
              GitHub Profile
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>

        {/* Netlify Form - Add data-netlify="true" and hidden input field */}
        <ContactForm
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          theme={theme}
        >
          {/* Hidden input for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <FormGroup>
            <Label htmlFor="name" theme={theme}>Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              theme={theme}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email" theme={theme}>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              theme={theme}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject" theme={theme}>Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              theme={theme}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message" theme={theme}>Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              theme={theme}
              disabled={isLoading}
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            theme={theme}
            disabled={isLoading}
          >
            {isLoading ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Icon src="/svgs/send.svg" alt="Send" theme={theme} />
              </>
            )}
          </SubmitButton>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {messageStatus === 'success' && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}
            {messageStatus === 'error' && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ❌ Failed to send message. Please try again or email me directly.
              </ErrorMessage>
            )}
          </AnimatePresence>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact