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
        <div className="introContainer">
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        >
          50 Artists That Defined My Decade
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          <strong>This was the decade that got me back into music.</strong> I was exposed to a lot of new stuff in the first few years of college from new friends (and dorm fileservers), but after moving up to Portland in 2007 I was feeling stuck on my collection. Every year a few new albums from old favorites would come out, but rarely would those eclipse past glories. I found myself spending most of my music-related efforts shopping the "skuf" bin at Music Millenium, buying $2-3 CD copies of albums I had only ever pirated (having come of age in the Napster era).</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >In 2009, we moved into our house and I got a record player. I had a moderate collection of cheap copies of 60's/70's vinyl + some novelty hits, but I had never in my life been someone to routinely PAY for new music and the timing felt right. Also, by late 2010/early 2011, we had developed a solid friend group in town with whom we decided to start what we called the "Mix-Tape Club". Each month(ish), we would pick a theme and each of was responsible for contributing a song towards that theme to create a compiled mix. From this, I found some great avenues for exploration.</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >In 2012, things broke wide open. We went to our first Pickathon that summer, and I began to learn the joys of trusted curation.

          Towards the end of that year, I could feel a whole world booming around me that I couldn't see into, and in a fit of desperation I forced myself to sit down and listen to 100 albums ranked highly on various music blog year-end lists. I have now repeated this routine with only slight variation in each subsequent year- sometimes listening to roughly 250 albums in a year in order to create that final list.

          In this process I have tried to chronicle my reactions without too much forethought- but now looking back on my comments, I frequently cringe. I'm happy to have discovered I am no critic- I like to share what I like and should let the music speak for itself as much as possible. I have run out of descriptors and no longer feel the need to rewrite things that someone else has said more eloquently.</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          ><strong>Since then, things haven't really stopped.</strong>  I keep up as best I can (for a father of two) with the weekly releases, music blogs etc and try and keep my ear to the ground on what's coming up. Invaluable in this process is the Aquarium Drunkard blog, a few trusted record labels, a handful of music writers on Twitter, the All Songs Considered podcast, and of course, the annual Pickathon lineup. I try not to be too deliberate about anything anymore- try to follow threads when they present themselves and not force myself to sit through something that isn't working for me. Each year, I'm recalibrating my approach, adjusting where I put in effort and where I go with the flow. Now I have "acquired" enough bands that their subsequent releases are enough to keep me busy without being forced to find something truly new, which is both a blessing and a curse.<strong>I still feel a strong attachment to "new" music.</strong> I know I have blind spots that would prevent me from ever becoming a music writer / working in a record store- but if I open up my world to the entire history of recorded sound, it's too daunting. It also creates the beautiful opportunity to see a band on the way up- see an album I love on its initial tour cycle, when it's new to everyone. For me, the joy of being there for that will always beat the cred of the "wish I had been there" scene historian.</p>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >I don't know where things will go from here- if at the end of 2029 I'll have a similar story to tell. Maybe I'll be living in my musical past, complaining about what the kids are listening to nowadays. Maybe then will be the time to start working my way backwards, filling in gaps of influences and underground / underappreciated stuff from the 70's. In some ways, I'm trying to embrace the idea of getting jaded on my current cycles and finding a new way in. Sometimes you gotta break it to fix it. It's also not lost on me that as the breadth of voices and perspectives in the music world expands, this list is almost comically comprised of white dudes with long hair who play guitar. I do not apologize for this, but I sure as hell don't celebrate it. Who knows what I'll be into- the only thing I can really hope for is that I'm liking what I'm listening to.</p>
          <hr />
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >What follows is a list of 50 artists that had the biggest impact / staying power with me over the last 10 years. They are loosely ranked by their presence in my yearly lists, with some correction for history and what I truly spent the most time listening to. For each of them, I've included a few words, plus an embed of my favorite album of theirs from this decade, and the occasional bonus material to highlight my appreciation. I hope you can find something in here that you enjoy as much as I have.</p>
        <div><small>Additional note- I didn't take these photos. I lifted them from Google image search. I hope I am not sued.</small></div></div>
        <div className="artistWrap">
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
                    fontSize: 16,
                    textAlign: 'center',
                    position: 'absolute',
                    padding: '0px 10px',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }} onClick={this.openModal} data-artist={node.artist} data-rank={node.rank} href="#">{node.artist}</a>
              </header>
            </article>
          )
        })}
        </div>
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
