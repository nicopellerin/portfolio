import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaLaptopCode, FaTimes } from 'react-icons/fa'
import { useMedia } from 'react-use-media'

import Navbar from '../Navigation/Navbar'
import Background from './Background'
import NavbarMobile from '../Navigation/NavbarMobile'
import Parallax from '../Parallax'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
}

const Hero = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const isDesktop = useMedia({
    minWidth: 500,
  })

  return (
    <Wrapper>
      <Navbar />
      <NavbarMobile setToggleDropdown={setToggleDropdown} />
      <Parallax offset={isDesktop ? 100 : 70} offsetInitial={30}>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', damping: 6, stiffness: 20 }}
        >
          <Title>maker of things.</Title>
          <Tagline
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 6, stiffness: 20 }}
          >
            <span style={{ color: '#cc4bc2' }}>code</span> +{' '}
            <span style={{ color: '#DD5E98' }}>music</span> +{' '}
            <span style={{ color: '#E16F7C' }}>design</span>
          </Tagline>
        </Content>
      </Parallax>
      <div>
        <AnimatePresence>
          {toggleDropdown && (
            <>
              <DropdownWrapper
                initial={{ y: 300, x: '-50%' }}
                animate={{ y: 0 }}
                exit={{ y: 300 }}
                transition={{ type: 'spring', damping: 18 }}
              >
                <DropdownList
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <DropdownItem
                    onClick={() => setToggleDropdown(false)}
                    variants={itemVariants}
                    style={{
                      borderBottom: '1px solid rgba(221,94,152, 0.2)',
                      paddingBottom: '2rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <FaLaptopCode
                      color="#dd5e98"
                      size={24}
                      style={{ marginRight: 15 }}
                    />
                    <LinkStyled href="#courses">Courses</LinkStyled>
                  </DropdownItem>
                  <DropdownItem variants={itemVariants}>
                    <LinkStyled
                      href="https://github.com/nicopellerin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Github"
                    >
                      <FiGithub
                        color="#dd5e98"
                        size={24}
                        style={{ marginRight: 15 }}
                      />{' '}
                      Github
                    </LinkStyled>
                  </DropdownItem>
                  <DropdownItem variants={itemVariants}>
                    <LinkStyled
                      href="https://twitter.com/nicopellerin_io"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <FiTwitter
                        color="#dd5e98"
                        size={24}
                        style={{ marginRight: 15 }}
                      />{' '}
                      Twitter
                    </LinkStyled>
                  </DropdownItem>
                  <DropdownItem variants={itemVariants}>
                    <LinkStyled
                      href="https://twitter.com/nicopellerin_io"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FiInstagram
                        color="#dd5e98"
                        size={24}
                        style={{ marginRight: 15 }}
                      />{' '}
                      Instagram
                    </LinkStyled>
                  </DropdownItem>
                </DropdownList>
                <CloseWrapper
                  initial={{ x: '-50%', y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ type: 'spring', damping: 18, delay: 0.1 }}
                  onClick={() => setToggleDropdown(false)}
                >
                  <FaTimes
                    style={{
                      fontSize: '2.4rem',
                      color: '#dd5e98',
                    }}
                  />
                </CloseWrapper>
              </DropdownWrapper>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggleDropdown(false)}
                transition={{ type: 'spring', damping: 18, delay: 0.1 }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
      <Background />
    </Wrapper>
  )
}

export default Hero

// Styles
const Wrapper = styled(motion.div)`
  background: none;
  width: 100%;
  height: 100vh;
  position: relative;
`

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 9999;
`

const Title = styled(motion.h1)`
  color: #f4f4f4;
  width: 320px;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    font-size: 9rem;
  }
`

const Tagline = styled(motion.h2)`
  color: #f4f4f4;
  font-weight: 600;
  font-size: 3.2rem;
`

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  opacity: 0;
`

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  height: 33rem;
  width: 100%;
  background: #112;
  bottom: 0;
  left: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 5px solid #dd5e98;
  z-index: 3;
`

const DropdownList = styled(motion.ul)`
  padding: 3rem;
`

const DropdownItem = styled(motion.li)`
  display: flex;
  font-size: 1.8rem;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`

const LinkStyled = styled.a`
  color: #dd5e98;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1.2px;
`

const CloseWrapper = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #112;
  position: absolute;
  bottom: 36rem;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 0 10px 5px rgba(89, 86, 213, 0.2); */
  border: 2px solid var(--primaryColor);
  cursor: pointer;
  z-index: 2;
`
