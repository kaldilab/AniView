import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      backgroundColor: '#333',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 999
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1280,
        padding: '1rem',
        overflow: 'hidden'
      }}
    >
      <h1
        style={{
          float: 'left',
          margin: 0
        }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          float: 'right'
        }}
      >
        <ul style={{
          display: 'flex',
          margin: 0
        }}>
          {
            menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: 'none',
                  padding: '0.5rem 1rem',
                  marginBottom: 0
                }}
              >
                <Link
                  style={{
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none'
                  }}
                  to={link.link}
                  activeClassName={'active'}
                >
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
