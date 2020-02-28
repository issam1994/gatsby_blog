import React from "react"

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

import Posts from "../components/posts/PostsList"
import SideBar from "../components/sidebar/SideBar"

const Home = () => (
  <Layout>
    <SEO title="Home" />
      <SideBar />
      <Posts />
  </Layout>
)

export default Home