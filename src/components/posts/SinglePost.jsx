import React from 'react'
import {Link} from 'gatsby'

export default function SinglePost({ post }) {
    const { title, date, tags, thumbnail } = post.node.frontmatter
    const {slug} = post.node.fields
    return (
        <Link to={`/blog/${slug}`} className="p-2 w-full lg:w-1/2">
            <div className="relative h-48 w-full shadow-lg rounded-lg overflow-hidden">
                {/* thumbnail  */}
                <img className="h-full h-full w-full object-cover object-center" alt="thumbnail" src={thumbnail || 'https://zocada.com/wp-content/uploads/2019/01/gatsby_blog-740x370.png'} />
                {/* end thumbnail  */}
                <div className="absolute inset-0 flex items-end">
                    {/* tags */}
                    <div className="absolute flex top-0 right-0">
                        {tags.split(",").map(t => <div className={'tag ' + t}>{t}</div>)}
                    </div>
                    {/* end tags */}
                    {/* date  */}
                    <div className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-800 rounded-lg opacity-75">{date}</div>
                    {/* end date  */}
                    <div className="relative flex-auto p-2 text-lg font-semibold text-white">
                        {/* title background  */}
                        <div className="absolute inset-0 bg-indigo-700 opacity-75"></div>
                        {/* end title background  */}
                        {/* title  */}
                        <h1 className="relative">{title}</h1>
                        {/* end title  */}
                    </div>
                </div>
            </div>
        </Link>
    )
}