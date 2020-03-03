import React from "react"

import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../layouts/default"
import SEO from "../layouts/seo"

import Posts from "../components/posts/PostsList"
import SideBar from "../components/sidebar/SideBar"

const Home = () => {
  const {allMarkdownRemark : {edges}} = useStaticQuery(graphql`
  query {
      allMarkdownRemark {
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
  `)
  return (
    <Layout>
      <SEO title="Home" />
        <SideBar />
        <Posts posts={edges} />
    </Layout>
  )
}

export default Home