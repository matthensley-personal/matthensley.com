import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location}>
        <SEO title="Matt Hensley | Nostradamus es su stradamus" />
        <Image
          fixed={data.background.childImageSharp.fluid}
          className="home-background-image"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <div style={{
          position: "relative",
          zIndex: 2,
          color:"white",
          backgroundColor:"rgba(0,0,0,.3)",
          display:"inline-block"
        }}><
        /div>

        <div className="toc" style={{
            position:`relative`,
            display:`flex`,
            flexWrap: `wrap`,
            flexDirection: `column`,
            alignItems: `flex-end`,
        }}
        >
          <div className="toc_inner" style={{
            paddingRight: 80
          }}
        >
          <h4>Blog</h4>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>

              </div>
            )
          })}
          <div>
            October 2020 (Coming Soon)
          </div>
          <h4>Features</h4>
          <Link style={{ boxShadow: `none` }} to="/decade-in-review">
            My Decade In Music (2010-2019)
          </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    background: file(absolutePath: { regex: "/headshot2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC,}, filter: {frontmatter: { published: {eq: true} }}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
