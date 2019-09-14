import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class ArtistIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allAlbumsYaml.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="50 Artists that defined my decade" />
        <Bio />
        <div>Test</div>
        {posts.map(({ node }) => {
          const title = node.artist || node.id
          return (
            <article key={node.id} style={{
              float: 'left',
              maxWidth: rhythm(12),
            }}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                   {node.rank}. {title}
                </h3>
                <img src={node.external_image} />
                <iframe src={node.spotify} style={{
                  maxWidth: rhythm(12),
                }} width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default ArtistIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allAlbumsYaml(sort: { fields: [rank], order: DESC }) {
      edges {
        node {
          id
          artist
          rank
          external_image
          spotify
        }
      }
    }
  }
`
