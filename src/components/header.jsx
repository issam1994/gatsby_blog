import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './Logo'
const Header = () => {
  const pages = [
    { name: "Home", path: '/' },
    { name: "About", path: '/about' },
  ]

  return (
    <header className="shadow bg-white">
      <div className="container mx-auto px-2 flex">
        {/* logo */}
        <Logo />
        <div className="ml-auto"></div>
        {/* nav links disabled */}
        {false && pages.map(p => (
          <Link
          activeClassName="active-link"
          className="nav-link"
          key={p.name}
          to={p.path}>
            {p.name}
          </Link>
        ))}
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