import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../layouts/default"
import SEO from "../layouts/seo"

import Posts from "../components/posts/PostsList"
import SideBar from "../components/sidebar/SideBar"

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
export default function TagTemplate({ data, pathContext }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title={pathContext.tag} />
      <SideBar showGoHome/>
      <Posts posts={edges} />
    </Layout>
  )
}