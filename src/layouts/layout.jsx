import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/Footer"
// import Header from "../components/Header"

//global styles
import '../styles/tailwindcss.css'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  
  return (
    <div className="min-h-screen w-full text-gray-800">
      {/* <Header /> */}
      <main className=" max-w-screen-xl mx-auto p-2 flex flex-wrap flex-col md:flex-row">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
