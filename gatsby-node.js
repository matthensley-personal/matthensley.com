const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const twentyPost = path.resolve(`./src/templates/twenty-post.js`)
  const twentyresult = await graphql(
    `
      {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "twenty"}}}) {
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (twentyresult.errors) {
    throw twentyresult.errors
  }

  // Create twenty posts pages.
  const twentyposts = twentyresult.data.allMarkdownRemark.edges

  twentyposts.forEach((post, index) => {
    const previous = index === twentyposts.length - 1 ? null : twentyposts[index + 1].node
    const next = index === 0 ? null : twentyposts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: twentyPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
