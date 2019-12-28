import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO title="Matt Hensley | Nostradamus es su stradamus" />
        <Image
          fixed={data.background.childImageSharp.fluid}
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
        }}></div>
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
  }
`
