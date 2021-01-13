import * as React from "react"
import styled from "styled-components"

const PhotoMobile = () => {
  return <PersonalImage src="/nico.jpg" alt="me" />
}

export default PhotoMobile

// Styles
const PersonalImage = styled.img`
  clip-path: polygon(
    0% 0%,
    0% 100%,
    25% 100%,
    25% 25%,
    75% 25%,
    75% 75%,
    25% 75%,
    25% 100%,
    100% 100%,
    100% 0%
  );
  max-width: 100%;

  @media (min-width: 1200px) {
    display: none;
  }
`
