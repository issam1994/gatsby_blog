import React from 'react'
import '../../styles/postStyles.css'

export default function FullPost({ post }) {
  // post = {title, date, html}
  return (
    <div className="flex-1 mx-4 pt-4 max-w-3xl">
      <div className="text-4xl font-bold tracking-wide">{post.title}</div>
      <div className="text-sm font-light mt-6 opacity-50">Published on {post.date}</div>
      <hr className="mb-6 opacity-50" />
      <div className="text-lg md:text-xl text-gray-700 post-html" dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <hr />
    </div>
  )
}