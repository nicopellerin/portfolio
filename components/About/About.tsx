import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { FiStopCircle, FiPlayCircle } from 'react-icons/fi'
import Photo from './Photo'
import PhotoMobile from './PhotoMobile'

const About = () => {
  const [robotSpeaking, setRobotSpeaking] = useState(false)
  const [showRibbon, setShowRibbon] = useState(false)

  let robot
  const textToSpeech = (text: string) => {
    setRobotSpeaking(true)
    robot = new SpeechSynthesisUtterance()
    robot.rate = 1
    robot.pitch = 0.5
    robot.text = text

    robot.onend = function () {
      setRobotSpeaking(false)
    }

    typeof window !== 'undefined' && window.speechSynthesis.speak(robot)
  }

  useEffect(() => {
    window.addEventListener('unload', () => window.speechSynthesis.cancel())
    return () =>
      window.removeEventListener('unload', () =>
        window.speechSynthesis.cancel()
      )
  }, [])

  const description = `Based out of Montreal, I'm a developer with a passion
  for all things tech. Currently employed as an application
  developer, I enjoy continually learning
  new concepts and staying up-to-date with the latest tech in this
  fast-paced environment. When not coding, I love to produce electronic
  music, as well as design stuff. I also recently took an interest in creating audio VST plugins.
  
  My goal is to always improve as a programmer and
  designer, and my intent is to apply the same drive I have for
  self-improvement to any projects I work on. 
  
  On the frontend side, I mostly work in React with Typescript. Designing is mostly done in Framer X. Backend wise, I tend to either use Node.js or Go, and more recently Rust, with MongoDB.
  `

  return (
    <>
      <Wrapper
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          damping: 6,
          stiffness: 20,
          delay: 0.1,
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <Wave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 70"
            width="100%"
            height="192"
          >
            <path
              d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
              fill="#fff"
            ></path>
          </Wave>
          <Container>
            <div>
              <Title>About &mdash;</Title>
              <Description>
                Based out of Montreal, I'm a developer with a passion for all
                things tech. Currently employed as an application developer, I
                enjoy continually learning new concepts and staying up-to-date
                with the latest tech in this fast-paced environment. When not
                coding, I love to produce electronic music, as well as design
                stuff. I also recently took an interest in creating audio VST
                plugins.
              </Description>
              <Description>
                My goal is to always improve as a programmer and designer, and
                my intent is to apply the same drive I have for self-improvement
                to any projects I work on.
              </Description>
              <Description>
                On the frontend side, I mostly work in React with Typescript.
                Designing is mostly done in Framer X. Backend wise, I tend to
                either use Node.js or Go, and more recently Rust, with MongoDB.
              </Description>
              <ButtonWrapper>
                <AnimateSharedLayout>
                  {robotSpeaking ? (
                    <Button
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 1 }}
                      onClick={() =>
                        typeof window !== 'undefined' &&
                        window.speechSynthesis.cancel()
                      }
                    >
                      <FiStopCircle style={{ marginRight: 5 }} />
                      <motion.span animate>Stop</motion.span>
                    </Button>
                  ) : (
                    <Button
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 1 }}
                      onClick={() => textToSpeech(description)}
                    >
                      <FiPlayCircle style={{ marginRight: 5 }} />{' '}
                      <motion.span animate>Listen while you browse</motion.span>
                    </Button>
                  )}
                </AnimateSharedLayout>
              </ButtonWrapper>
            </div>
            <Photo />
            <PhotoMobile />
          </Container>
        </div>
      </Wrapper>
      <AnimatePresence>
        {robotSpeaking && (
          <>
            <StopButtonWrapper
              initial={{ y: 100, position: 'fixed' }}
              animate={{ y: 0 }}
              exit={{ x: 100 }}
              transition={{ type: 'spring', damping: 8, stiffness: 40 }}
              onMouseOver={() => setShowRibbon(true)}
              onMouseLeave={() => setShowRibbon(false)}
              onClick={() => {
                typeof window !== 'undefined' && window.speechSynthesis.cancel()
                setShowRibbon(false)
              }}
            >
              <StopButtonContainer>
                <StopButton>
                  <FiStopCircle size={32} color="#cc4bc2" />
                </StopButton>
              </StopButtonContainer>
              <AnimatePresence>
                {showRibbon && (
                  <StopText
                    initial={{
                      width: 0,
                      x: -10,
                      y: '-50%',
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      x: -62,
                      width: 'auto',
                      scale: 1,
                    }}
                    exit={
                      robotSpeaking
                        ? { x: -15, opacity: 0 }
                        : { x: -62, opacity: 0 }
                    }
                    transition={{
                      type: 'spring',
                      damping: 50,
                      stiffness: 400,
                    }}
                  >
                    Stop voice
                  </StopText>
                )}
              </AnimatePresence>
            </StopButtonWrapper>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default About

// Styles
const Wrapper = styled(motion.div)`
  position: relative;
  background: #fff;
`

const Container = styled.div`
  padding: 12rem 0 12rem;
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1600px) {
    padding: 6rem 2rem 6rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 6.2rem;
`

const Description = styled.p`
  font-size: 1.8rem;
  max-width: 90%;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 4rem;

  @media (max-width: 500px) {
    display: none;
  }
`

const Button = styled(motion.button)`
  border: none;
  padding: 0.9em 1.3em;
  font-size: 1.8rem;
  border-radius: 5px;
  background: #cc4bc2;
  color: #f4f4f4;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  filter: drop-shadow(0 0 0.75rem rgba(204, 75, 194, 0.5));
`

const StopButtonWrapper = styled(motion.div)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  z-index: 10000;
`

const StopButtonContainer = styled.div`
  background: #fff;
  height: 5rem;
  width: 5rem;
  filter: drop-shadow(0 0 0.75rem rgba(204, 75, 194, 0.3));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
`

const StopButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
`

const StopText = styled(motion.div)`
  position: absolute;
  top: 50%;
  background: #cc4bc2;
  color: #f4f4f4;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  filter: drop-shadow(0 0 0.75rem rgba(204, 75, 194, 0.3));

  padding: 7px;
  font-weight: 600;
  width: min-content;
  white-space: nowrap;
`

const Wave = styled(motion.svg)`
  position: absolute;
  top: -190px;

  @media (max-width: 500px) {
    top: -144px;
    z-index: 3;
  }
`
