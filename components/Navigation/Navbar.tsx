import * as React from 'react'
import styled from 'styled-components'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <img src="/logo.svg" alt="logo" width={200} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: 20,
          }}
        >
          <motion.a
            whileHover={{ rotate: 7 }}
            href="https://github.com/nicopellerin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span hidden>Github</span>
            <FiGithub color="#f4f4f4" size={24} />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 7 }}
            href="https://twitter.com/nicopellerin_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span hidden>Twitter</span>
            <FiTwitter color="#f4f4f4" size={24} />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 7 }}
            href="https://www.instagram.com/nicopellerin_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span hidden>Instagram</span>
            <FiInstagram color="#f4f4f4" size={24} />
          </motion.a>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: 1600px) {
    padding: 0rem 2rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }
`
