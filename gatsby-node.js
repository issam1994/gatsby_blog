const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    //to create slug fields
    if (node.internal.type === 'MarkdownRemark') {
        const createSlugFields = () => {
            const slug = path.basename(node.fileAbsolutePath, '.md')
            createNodeField({
                node,
                name: 'slug',
                value: slug
            })
        }
        createSlugFields();
    }


}
module.exports.createPages = async ({ graphql, actions }) => {
    // to create a page for every post
    const createPostsPages = async () => {
        const { createPage } = actions
        const BlogPostTemplate = path.resolve('./src/template/BlogPostTemplate.jsx')
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
                component: BlogPostTemplate,
                path: `/blog/${slug}`,
                context: {
                    slug
                }
            })
        })
    }

    // to create a page for each tag's posts
    const createTagsPages = async () => {
        const { createPage } = actions
        const TagPostsTemplate = path.resolve('./src/template/TagPostsTemplate.jsx')
        const res = await graphql(`
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
        //generate tags
        let tags = []
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            // each post has a string of tags so we need to turn it into an array
            const tagsArray = node.frontmatter.tags.split(",");
            //we loop through each array to construct one array of unique tags
            tagsArray.forEach(currentTag => {
                //we make sure we avoid adding duplicate tags
                if (tags.some(tag => tag == currentTag.trim()) == false) {
                    //if current tag is not already in the main tags array, we push it.
                    tags.push(currentTag.trim());
                }
            })
        })

        // create a page per tag
        tags.forEach(tag => {
            createPage({
                component: TagPostsTemplate,
                path: `/tag/${tag}`,
                context: {
                    filter: `/${tag}/`,
                    tag
                }
            })
        })
    }
    createPostsPages();
    createTagsPages();
}