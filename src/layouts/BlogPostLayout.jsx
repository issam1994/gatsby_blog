import React from 'react'
import Layout from './layout'
import SEO from './seo'
import SideBar from '../components/sidebar/SideBar'

export default function blogTemplate({ title, children }) {
    return (
        <Layout>
            <SEO title={title} />
                    <SideBar />
                {/* single post details  */}
                    {children}
                {/* end single post details  */}
        </Layout>
    )
}