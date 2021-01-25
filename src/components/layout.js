import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import "@fontsource/pt-sans"
import "@fontsource/pt-sans/700.css"


const Layout = ({ children }) => {
  const { title, menuLinks } = useSiteMetadata()
  return (
    <>
      <Header siteTitle={title || 'Title'}  menuLinks={menuLinks} />
      <main
        style={{
          margin: '0 auto',
          maxWidth: 1280,
          padding: '7rem 1rem',
        }}
      >
        {children}
      </main>
      <Footer siteTitle={title || 'Title'} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
