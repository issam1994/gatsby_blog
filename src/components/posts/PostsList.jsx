import React from 'react'
import PostListItem from './PostListItem'

export default function PostsList({posts = []}) {
    return (
        <div className="flex flex-center flex-wrap flex-1">
        {posts.map((p, i) => (
            <PostListItem post={p} key={i}/>
        ))}
        </div>
    )
}