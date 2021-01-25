import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      borderTop: '1px solid #eee',
      marginTop: '2rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1280,
        padding: '1rem',
        textAlign: 'right'
      }}
    >
      © {new Date().getFullYear()} {siteTitle}
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
