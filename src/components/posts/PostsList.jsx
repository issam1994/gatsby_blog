import React from 'react'
import SinglePost from './SinglePost'

import {useStaticQuery, graphql} from 'gatsby'

export default function PostsList() {
    const {allMarkdownRemark : {edges : posts}} = useStaticQuery(graphql`
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
        <div className="flex flex-center flex-wrap flex-1">
        {posts.map((p, i) => (
            <SinglePost post={p} key={i}/>
        ))}
        </div>
    )
}