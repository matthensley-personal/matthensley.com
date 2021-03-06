import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

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
          <h4>Features</h4>
          <Link style={{ boxShadow: `none` }} to="/decade-in-review">
            My Decade In Music (2010-2019)
          </Link>

          </div>

        </div>
      <div className="social-links" style={{
        position: 'absolute',
        bottom:30,
        left:30,
      }}>
      <a href="https://www.twitter.com/kindaintense" target="_blank" style={{
        boxShadow: 'none'
      }}>
        <FontAwesomeIcon style={{color:"#9CC3D5FF", paddingRight: 20}} size="4x" icon={faTwitterSquare} />
      </a>
      <a href="https://www.instagram.com/matthensley" target="_blank" style={{
        boxShadow: 'none'
      }}>
        <FontAwesomeIcon style={{color:"#9CC3D5FF", paddingRight: 20}} size="4x" icon={faInstagramSquare} />
      </a>
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
