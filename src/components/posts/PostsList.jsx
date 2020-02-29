import React from 'react'
import SinglePost from './SinglePost'

export default function PostsList({posts = []}) {
    return (
        <div className="flex flex-center flex-wrap flex-1">
        {posts.map((p, i) => (
            <SinglePost post={p} key={i}/>
        ))}
        </div>
    )
}