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
    if(e.target.dataset.artist === 'Coming Soon') {
      return false;
    }
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
          <strong>This was the decade that got me back into music.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis egestas. Amet dictum sit amet justo donec. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Tempus egestas sed sed risus pretium quam. Sed vulputate mi sit amet mauris commodo quis. Viverra nibh cras pulvinar mattis nunc sed blandit. Aenean pharetra magna ac placerat. Tincidunt vitae semper quis lectus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Est velit egestas dui id ornare. Pharetra sit amet aliquam id diam maecenas. Id faucibus nisl tincidunt eget nullam.</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >Ante metus dictum at tempor commodo. Aliquet nec ullamcorper sit amet risus nullam. Venenatis lectus magna fringilla urna porttitor. Placerat duis ultricies lacus sed. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Cursus in hac habitasse platea dictumst quisque sagittis purus. Lorem donec massa sapien faucibus et molestie ac. Vel facilisis volutpat est velit egestas. Elit at imperdiet dui accumsan sit. Leo a diam sollicitudin tempor. Tincidunt id aliquet risus feugiat in ante metus. Purus sit amet volutpat consequat mauris nunc congue nisi. Massa id neque aliquam vestibulum morbi blandit. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Nisi vitae suscipit tellus mauris a. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Varius vel pharetra vel turpis nunc eget lorem dolor.</p>
          <hr />
        {posts.map(({ node }) => {

          let img_src
          if(node.external_image) {
            img_src = node.external_image
            //look in our thumbs array
            images.forEach(function (item, index) {
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
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 36,
                    paddingTop: '40%',
                    paddingBottom: '40%',
                    position: 'relative'
                  }} onClick={this.openModal} data-artist={node.artist} data-rank={node.rank} href="#">{node.rank}</a>
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
          description
          album
          rank
          external_image
          spotify
        }
      }
    }
  }
`
