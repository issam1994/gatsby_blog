import React from "react"
import {Link} from 'gatsby'
import Layout from "../layouts/default"
import SEO from "../layouts/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="w-full flex-center flex-col min-h-screen">
    <div className="text-6xl font-black">
      <span className="text-red-600">Error</span> 404
    </div>
    <div className="text-2xl">
      Not Found!<span className="ml-2" role="img">😔</span>
    </div>
    <Link className="px-4 py-2 rounded bg-green-600 text-white shadow mt-4" to="/">GO HOME</Link>
    </div>
  </Layout>
)

export default NotFoundPage
