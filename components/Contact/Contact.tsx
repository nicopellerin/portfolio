import * as React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Say hi &mdash;</Title>
        <Tagline>
          Just wanna say hi or are interested in retaining my services for a
          project? <br />
          Hit me up using the form and I will get back to you asap.
        </Tagline>
        <ContactForm />
      </Container>
    </Wrapper>
  )
}

export default Contact

// Styles
const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  padding: 10rem 0 14rem;
  max-width: 130rem;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding: 6rem 2rem 10rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 6.2rem;
`

const Tagline = styled.h3`
  font-weight: 500;
  line-height: 2em;
  margin-bottom: 5rem;

  @media (max-width: 500px) {
    line-height: 1.5em;
  }
`
