import * as React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        &copy; {new Date().getFullYear()} Nico Pellerin. All Rights Reserved.
      </Text>
    </Wrapper>
  )
}

export default Footer

// Styles
const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  z-index: 2;
  background: #fff;
`

const Text = styled.span`
  padding: 10rem 0 6rem;
  font-size: 1.6rem;
  font-weight: 500;
`
