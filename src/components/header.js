import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const pages = [
    {name: "Home", path: '/'},
    {name: "About", path: '/about'},
  ]
  return (
    <header>
      <div>
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header