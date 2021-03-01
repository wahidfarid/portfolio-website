import React from "react"
import PropTypes from "prop-types"
import tw from "tailwind-styled-components"

import '../styles/global.css';
import SEO from "./seo"

const StyledLayout = tw.div`
  dark
  bg-gray-800
  w-screen
  h-full
  text-white
`

const Layout = ({ children }) => {

  return (
    <StyledLayout>
      <SEO title="Home" />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
