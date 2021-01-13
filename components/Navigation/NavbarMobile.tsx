import * as React from "react"
import styled from "styled-components"

interface Props {
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarMobile: React.FC<Props> = ({ setToggleDropdown }) => {
  return (
    <Wrapper>
      <Container>
        <img src="/logo.svg" alt="logo" width={180} />
        <div onClick={() => setToggleDropdown(prevState => !prevState)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
            <path
              d="M 1 2 C 1 1.448 1.448 1 2 1 L 22 1 C 22.552 1 23 1.448 23 2 L 23 3 C 23 3.552 22.552 4 22 4 L 2 4 C 1.448 4 1 3.552 1 3 Z"
              fill="#f4f4f4"
            ></path>
            <path
              d="M 1 7 C 1 6.448 1.448 6 2 6 L 17 6 C 17.552 6 18 6.448 18 7 L 18 8 C 18 8.552 17.552 9 17 9 L 2 9 C 1.448 9 1 8.552 1 8 Z"
              fill="#f4f4f4"
            ></path>
            <path
              d="M 1 12 C 1 11.448 1.448 11 2 11 L 20 11 C 20.552 11 21 11.448 21 12 L 21 13 C 21 13.552 20.552 14 20 14 L 2 14 C 1.448 14 1 13.552 1 13 Z"
              fill="#f4f4f4"
            ></path>
            <path
              d="M 1 17 C 1 16.448 1.448 16 2 16 L 13 16 C 13.552 16 14 16.448 14 17 L 14 18 C 14 18.552 13.552 19 13 19 L 2 19 C 1.448 19 1 18.552 1 18 Z"
              fill="#f4f4f4"
            ></path>
          </svg>
        </div>
      </Container>
    </Wrapper>
  )
}

export default NavbarMobile

// Styles
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  /* z-index: 30; */

  @media (min-width: 500px) {
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
    padding: 4rem 3rem;
  }
`
