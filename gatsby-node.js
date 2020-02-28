const path = require('path')
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const BlogTemplate = path.resolve('./src/template/BlogTemplate.jsx')
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    res.data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.fields.slug
        createPage({
            component: BlogTemplate,
            path: `/blog/${slug}`,
            context: {
                slug
            }
        })
    })
}