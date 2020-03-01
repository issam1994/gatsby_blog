import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import '../../styles/tags.css'

export default function Tags() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `)
    const generateTags = () => {
        let tags = []
        data.allMarkdownRemark.edges.forEach(({ node }) => {
            // each post has a string of tags so we need to turn it into an array
            const tagsArray = node.frontmatter.tags.split(",");
            //we loop through each array to construct one array of unique tags
            tagsArray.forEach(currentTag => {
                //we make sure we avoid adding duplicate tags
                if (tags.some(tag => tag === currentTag.trim()) === false) {
                    //if current tag is not already in the main tags array, we push it.
                    tags.push(currentTag.trim());
                }
            })
        })
        return tags
    }
    const tags = generateTags()
    return (
        <div className="flex flex-wrap my-4">
            {tags.map((name, i) => (
                <Link to={`/tag/${name}`} key={name} className={`tag ${name}`}>
                    {name}
                </Link>
            ))}
        </div>
    )
}

// const tagsData = [
//         {name: 'javascript'},
//         {name: 'react'},
//         {name: 'vue'},
//         {name: 'css'},
//         {name: 'html'},
//         {name: 'node'},
//         {name: 'express'},
//         {name: 'database'},
//     ]