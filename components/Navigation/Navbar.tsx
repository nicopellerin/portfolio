import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <img src="/logo_new.svg" alt="logo" width={200} />
        <Menu>
          <Link href="#courses">
            <StyledLink
              data-scroll
              whileHover={{ textDecoration: 'underline' }}
            >
              <FaLaptopCode
                color="#dd5e98"
                size={24}
                style={{ marginRight: 12 }}
              />{' '}
              <span style={{ fontWeight: 600 }}>Courses</span>
            </StyledLink>
          </Link>
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
              style={{ lineHeight: 1 }}
              aria-label="Github"
            >
              <span hidden>Github</span>
              <FiGithub color="#f4f4f4" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ rotate: 7 }}
              href="https://twitter.com/nicopellerin_io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ lineHeight: 1 }}
              aria-label="Twitter"
            >
              <span hidden>Twitter</span>
              <FiTwitter color="#f4f4f4" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ rotate: 7 }}
              href="https://www.instagram.com/nicopellerin_io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ lineHeight: 1 }}
              aria-label="Instagram"
            >
              <span hidden>Instagram</span>
              <FiInstagram color="#f4f4f4" size={24} />
            </motion.a>
          </div>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2000;

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
  padding: 3rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(motion.a)`
  font-size: 1.8rem;
  color: rgba(221, 94, 152, 1);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 6rem;

    &::after {
      content: '';
      position: absolute;
      height: 110%;
      width: 2px;
      background: rgba(221, 94, 152, 0.3);
      right: -3rem;
      top: 0;
      border-radius: 5px;
    }
  }
`
