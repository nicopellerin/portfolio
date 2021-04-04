import * as React from 'react'
import styled from 'styled-components'

import Card from './Card'

import { projectsData } from './data'

const Projects = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Projects &mdash;</Title>
        <Tagline>
          Here are a couple of personal projects I've recently been working on.
          All the frontend dev, backend dev and design was created with a lot of
          coffee.
        </Tagline>
        <CardList>
          {projectsData.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </CardList>
      </Container>
    </Wrapper>
  )
}

export default Projects

// Styles
const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  padding: 10rem 0 10rem;
  max-width: 130rem;
  margin: 0 auto;

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

const Tagline = styled.p`
  font-size: 2rem;
  font-weight: 500;
  max-width: 80ch;
  line-height: 1.5em;
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 10rem;
  margin-top: 8rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 6rem;
    margin-top: 4rem;
  }
`
