import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import SEO from '../layouts/seo'
import SideBar from '../components/sidebar/SideBar'
import FullPost from '../components/posts/FullPost'

import '../styles/prismTheme.css'

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`
export default function blogTemplate(props) {
  const {html, frontmatter: { title, date } } = props.data.markdownRemark
  return (
    <Layout>
      <SEO title={title} />
      <SideBar showGoHome/>
      <FullPost post={{title, date, html}} />
    </Layout>
  )
}