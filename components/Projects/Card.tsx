import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FiGlobe, FiCode } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useMedia } from 'react-use-media'

interface Props {
  title: string
  image: string
  description: string
  website: string
  github: string
  techStack: Tech[]
}

interface Tech {
  tech: string
  logo: string
  width: number
}

const Card: React.FC<Props> = ({
  title,
  image,
  description,
  website,
  github,
  techStack,
}) => {
  const [showTechStack, setShowTechStack] = useState(false)
  const [showMobileTechStack, setShowMobileTechStack] = useState(false)

  const isDesktop = useMedia({
    minWidth: 500,
  })

  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <ImageStyled
            layout
            src={image}
            alt="logo"
            showTechStack={showTechStack ? true : false}
          />
          <AnimatePresence>
            {showTechStack && (
              <TechStack
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TechStackList>
                  {techStack.map(({ logo, tech, width }) => (
                    <img key={tech} src={logo} alt={tech} width={width} />
                  ))}
                </TechStackList>
              </TechStack>
            )}
          </AnimatePresence>
        </ImageWrapper>
        <Content>
          <HeadingWrapper>
            <Title>{title}</Title>
            <ViewTechStack
              onMouseEnter={() => (isDesktop ? setShowTechStack(true) : null)}
              onMouseLeave={() => (isDesktop ? setShowTechStack(false) : null)}
              onClick={() =>
                isDesktop
                  ? null
                  : setShowMobileTechStack((prevState) => !prevState)
              }
            >
              View tech stack
            </ViewTechStack>
            {showMobileTechStack && (
              <TechStackList>
                {techStack.map(({ tech, width }) => (
                  <img
                    key={tech}
                    src={`https://images.weserv.nl/?url=${encodeURI(
                      `https://nicopellerin.io/icons/${tech}.png`
                    )}&w=${width / 1.5}`}
                    alt={tech}
                    width={width / 2}
                  />
                ))}
              </TechStackList>
            )}
          </HeadingWrapper>
          <Description>{description}</Description>
          <ButtonGroup>
            {website ? (
              <a href={website} target="_blank" rel="noopener">
                <Button whileHover={{ y: -1 }}>
                  <FiGlobe style={{ marginRight: 7 }} /> Visit website
                </Button>
              </a>
            ) : (
              <Button whileHover={{ y: -1 }}>
                <FiGlobe style={{ marginRight: 7 }} /> Coming soon!
              </Button>
            )}
            {github ? (
              <a href={github} target="_blank" rel="noopener">
                <ButtonSource whileHover={{ y: -1 }}>
                  <FiCode style={{ marginRight: 7 }} /> View source code
                </ButtonSource>
              </a>
            ) : null}
          </ButtonGroup>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Card

// Styles
const Wrapper = styled.div`
  width: 100%;
`
const Container = styled.div``

const Content = styled.div``

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 0.8rem;
  border-radius: 5px;
`

const ImageStyled = styled(motion.img)`
  max-width: 100%;
  border-radius: 5px;
  transition: 300ms opacity ease-in-out;
  opacity: ${(props: { showTechStack: boolean }) =>
    props.showTechStack ? 0.08 : 1};
`

const TechStack = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`

const TechStackList = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

  & > :not(:last-child) {
    margin-right: 2.4rem;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    justify-content: flex-start;
    margin-left: 1rem;
  }
`

const HeadingWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Title = styled.h4`
  font-size: 4.2rem;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 3.7rem;
  }
`

const ViewTechStack = styled.span`
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: rgba(204, 75, 194, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #cc4bc2;
  cursor: pointer;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
`

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 2rem 0 4rem 0;
`

const ButtonGroup = styled.div`
  margin: 3rem 0 0;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
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
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem rgba(204, 75, 194, 0.5));

  &:first-of-type {
    margin-right: 2.5rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;

    &:first-of-type {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`

const ButtonSource = styled(motion.button)`
  border: none;
  padding: 0.9em 1.3em;
  font-size: 1.8rem;
  border-radius: 5px;
  background: #dd5e98;
  color: #f4f4f4;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem rgba(221, 94, 152, 0.5));

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;

    &:first-of-type {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`
