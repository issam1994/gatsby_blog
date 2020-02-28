import React from "react"
import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

import { graphql, useStaticQuery } from 'gatsby'

const Test = () => {
    const {allMarkdownRemark : {edges}} = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                html
              }
            }
          }
    }
    `)
    console.log("quered data", edges)
    return (
        <Layout>
            <SEO title="test" />
            <div className="container mx-auto text-center">
                {edges.map((e, i) => (
                    <div className="border my-4 p-2">
                        <div className="">{e.node.frontmatter.title}</div>
                        <div className="">{e.node.frontmatter.date}</div>
                        <div className="" dangerouslySetInnerHTML={{__html: e.node.html}}></div>
                    </div>
                ))}
        </div>
        </Layout>
    )
}

export default Test
