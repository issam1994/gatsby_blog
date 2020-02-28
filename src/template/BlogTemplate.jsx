import React from 'react'
import { graphql } from 'gatsby'
import PostLayout from './PostLayout'

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
  const { id, html, frontmatter: { title, date } } = props.data.markdownRemark
  return (
    <PostLayout title={title} key={id}>
      <div className="flex-1 px-4 pt-4">
        <div className="text-4xl font-bold tracking-wide">{title}</div>
        <div className="text-sm font-light mt-6 opacity-50">Published on {date}</div>
        <hr className="border-indigo-700 mb-6 opacity-50" />
        <div className="text-xl text-gray-700 post-html" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </PostLayout>
  )
}