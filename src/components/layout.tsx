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
      <footer className="bg-gray-900 text-center pb-4">
        © {new Date().getFullYear()}, Built with ❤️, Located in 🇪🇬, Powered by 🍟
      </footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
