import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
//global styles
import '../styles/tailwindcss.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div className="min-h-screen w-full text-gray-800">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container mx-auto p-2 flex flex-wrap flex-col md:flex-row">
        {children}
      </main>
      <hr className="mt-4 max-w-5xl mx-auto" />
      <footer className="text-center my-4">
          © {new Date().getFullYear()}, Built By Issam Ait Ouahmane
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
