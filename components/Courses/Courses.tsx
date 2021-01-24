import React from 'react'
import styled from 'styled-components'

import Card from '../Projects/Card'

import { projectsData } from './data'

const Courses = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title id="courses">Courses &mdash;</Title>
          <CardList>
            {projectsData.map((project, i) => (
              <Card key={i} {...project} />
            ))}
          </CardList>
        </Container>
      </Wrapper>
    </>
  )
}

export default Courses

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

// const Tagline = styled.h3`
//   font-weight: 500;

//   @media (max-width: 500px) {
//     line-height: 1.5em;
//   }
// `

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
