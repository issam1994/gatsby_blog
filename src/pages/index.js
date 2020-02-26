import React from "react"

import Layout from "../layouts/layout"
import Posts from "../components/posts/PostsList"
import SEO from "../layouts/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto p-2 flex flex-wrap">
    <Posts />
    </div>
  </Layout>
)

export default Home
