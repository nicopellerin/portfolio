import React from "react"
import GlobalStyles from "../styles/global-styles"

import "typeface-inter"
// import "typeface-spacegrotesk"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <GlobalStyles />
    </>
  )
}

export default Layout
