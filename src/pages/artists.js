import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtistModal from "../components/modal"
import { rhythm, scale } from "../utils/typography"

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalOpen: false,
      whichrank: false,
    }
  }

  openModal(e) {
    e.preventDefault();
    this.setState({
      modalOpen: true,
      whichRank: e.target.dataset.rank,
    });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      modalOpen: false,
      whichRank: false,
    });
  }

  render() {
    const { data } = this.props
    console.log(data);
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allAlbumsYaml.edges

    const images = data.allImageSharp.nodes;

    let modal
    if(this.state.modalOpen) {
      let key = 50 - this.state.whichRank
      modal = <div><div onClick={this.closeModal} className="modalBackdrop"></div><ArtistModal isOpen="true" rank={this.state.whichRank} artistData={posts[key]} /></div>
    }
    else {
      modal = <ArtistModal isOpen="false" rank={null} artistData={null} />
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {modal}
        <SEO title="50 Artists that defined my decade" />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        >
          The 50 Artists That Defined My Decade
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          <strong>This was the decade that got me back into music.</strong> After the influx of
        </p>
        {posts.map(({ node }) => {
          const title = node.artist || node.id
          let img_src
          if(node.external_image) {
            img_src = node.external_image
            //look in our thumbs array
            images.forEach(function (item, index) {
              console.log(item, index);
              if(node.external_image == item.thumb.originalName) {
                img_src = item.thumb.src;
                node.header = item.modal.src;
              }
            });
          }
          else {
            img_src = 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png'
          }
          return (
            <article className="artistThumb" key={node.id} style={{
              backgroundImage: `url(${img_src})`,
            }}>
              <header>
                <div className="over" style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                }}></div>
                  <a style={{
                    textDecoration: 'none',
                    color: 'white',
                    boxShadow: 'none',
                    display: 'block',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 36,
                    paddingTop: '40%',
                    paddingBottom: '40%',
                    position: 'relative'
                  }} onClick={this.openModal} data-rank={node.rank} href="#">{node.rank}</a>
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
    allImageSharp {
      nodes {
        thumb: fixed(width: 400) {
          src
          originalName
        }
        modal: fixed(width: 1100) {
          src
          originalName
        }
      }
    }
    allAlbumsYaml(sort: { fields: [rank], order: DESC }) {
      edges {
        node {
          id
          artist
          album
          rank
          external_image
          spotify
        }
      }
    }
  }
`
