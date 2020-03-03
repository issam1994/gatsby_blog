import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"
import SEO from "../layouts/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go Home</Link>
  </Layout>
)

export default About
