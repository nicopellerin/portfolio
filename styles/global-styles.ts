import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Space Grotesk", sans-serif;
  color: #272730;
}

[id] {
  scroll-margin-top: 0.5em;
}

h1 {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #272730;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 10rem;
  line-height: 1em;
  letter-spacing: -4px;
  width: 0;
}

h2 {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #272730;
  /* font-size: 62px;
  line-height: 62px; */
  letter-spacing: -1px;
  margin-top: 0;
  margin-bottom: 3rem;
}

h3 {
  font-style: normal;
  font-weight: 600;
  color: #272730;
  font-size: 20px;
  line-height: 20px;
  margin-top: 2rem;
  margin-bottom: 0;
}

h4 {
  font-family: "Inter", sans-serif;
  color: #272730;
}

p {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5em;
  margin-top: 1rem;
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}
`

export default GlobalStyles
