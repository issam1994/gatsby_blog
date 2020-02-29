import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

import Posts from "../components/posts/PostsList"
import SideBar from "../components/sidebar/SideBar"

import '../styles/postStyles.css'

export const query = graphql`
query ($filter: String!) {
  allMarkdownRemark(filter: {frontmatter: {tags: {regex: $filter}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
          thumbnail
        }
        fields {
          slug
        }
      }
    }
  }
  }
`
export default function TagTemplate({data, pathContext}) {
  const {edges} = data.allMarkdownRemark
  return (
    <Layout>
    <SEO title={pathContext.tag} />
      <SideBar />
      <Posts posts={edges} />
  </Layout>
  )
}