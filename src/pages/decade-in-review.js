import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtistModal from "../components/modal"
import YearList from "../components/yearlist"
import { rhythm, scale } from "../utils/typography"

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showTldr = this.showTldr.bind(this);
    this.destroyTldr = this.destroyTldr.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.state = {
      modalOpen: false,
      whichrank: false,
      tldr: 'gone',
      year: '0',
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

  changeYear(e) {
    this.setState({
      year: e.target.dataset.year,
    })
  }

  showTldr(e) {
    e.preventDefault();
    this.setState({
      tldr: 'full',
    });
  }

  destroyTldr(e) {
    e.preventDefault();
    this.setState({
      tldr: 'gone',
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

    let tldr
    if(this.state.tldr === 'full') {
      tldr = <div className="tldr">
      <p
        style={{
          ...scale(6 / 32),
          display: `block`,
          marginBottom: rhythm(1),
        }}
      >
      <strong>This was the decade that got me back into music.</strong> Through happenstance, effort, and the natural progression of things, I've reinvigorated the connection to music fandom I developed in my late teens and kind of lost touch with in my mid-20's. </p>

      <p>When I got to college in the early 2000's I was hungry for culture, and in the first few years I was exposed to a lot of new stuff from new friends and dorm fileservers. but after moving up to Portland in 2007 I was feeling stuck on my collection. Every year a few new albums from old favorites would come out, but rarely would those eclipse past glories. I found myself spending most of my music-related efforts shopping the "skuf" bin at Music Millenium, buying $2-3 CD copies of albums I had only ever pirated (having come of age in the Napster era).</p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >In 2009, we bought a house and I got a record player. I had a moderate collection of cheap copies of 60's/70's vinyl + some novelty hits, but I had never in my life been someone to routinely PAY for new music / maintain a physical collection. It felt like time. Also, by late 2010/early 2011, we had developed a solid friend group in town with whom we decided to start what we called the "Mix-Tape Club". Each month(ish), we would pick a theme and each of us was responsible for contributing a song towards that theme to create a compiled mix. From this, I found some great avenues for exploration, but also felt...exposed. There was still so much I hadn't heard of, and I was getting overwhelmed with the disconnect between what </p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >In 2012, things broke wide open. We went to our first Pickathon that summer, and I began to learn the joys of trusted curation.

        Towards the end of that year, I could feel a whole world booming around me that I couldn't see into, and in a fit of desperation I forced myself to sit down and listen to 100 albums ranked highly on various music blog year-end lists. It was mostly a success


        I have now repeated this routine with only slight variation in each subsequent year- sometimes listening to roughly 250 albums in a year in order to create that final list. </p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        ><strong>Since then, things haven't really stopped.</strong> I keep up as best I can (for a father of two) with the weekly releases, music blogs etc and try and keep my ear to the ground on what's coming up. Invaluable in this process is the <a href="https://aquariumdrunkard.com/" target="_blank">Aquarium Drunkard blog</a>, a <a href="http://www.paradiseofbachelors.com/" target="_blank">few</a> <a href="https://www.mergerecords.com/" target="_blank">trusted</a> <a href="https://www.noquarter.net/" target="_blank">record</a> <a href="https://deadoceans.com/">labels</a>, a <a href="https://twitter.com/jasonpwoodbury" target="_blank">handful</a> <a href="https://twitter.com/currincy" target="_blank">of</a> <a href="https://twitter.com/totalvibration" target="_blank">music</a> <a href="https://twitter.com/en_cohen" target="_blank">writers</a> on Twitter, the <a href="https://www.npr.org/sections/allsongs/" target="_blank">All Songs Considered</a> podcast, and of course, the annual <a href="https://www.pickathon.com" target="_blank">Pickathon</a> lineup. I try not to be too deliberate about anything anymore- try to follow threads when they present themselves and not force myself to sit through something that isn't working for me. Each year, I'm recalibrating my approach, adjusting where I put in effort and where I go with the flow. Now I have "acquired" enough bands that their subsequent releases are enough to keep me busy without being forced to find something truly new, which is both a blessing and a curse. Throughout this process I have tried to chronicle my reactions without too much forethought or self-awareness, but now looking back on my comments, I frequently cringe. I'm happy to have discovered I am no critic- I like to share what I like and should let the music speak for itself as much as possible. I have run out of descriptors and no longer feel the need to try to rewrite things that someone else has said more eloquently.</p>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >I don't know where things will go from here- if at the end of 2029 I'll have a similar story to tell. Maybe I'll be living in my musical past, complaining about what the kids are listening to nowadays. Maybe then will be the time to start working my way backwards, filling in gaps of influences and underground / underappreciated stuff from the 70's. In some ways, I'm trying to embrace the idea of getting jaded on my current cycles and finding a new way in. Sometimes you gotta break it to fix it. It's also not lost on me that as the breadth of voices and perspectives in the music world expands, this list is almost comically comprised of white dudes with long hair who play guitar. I do not apologize for this, but I sure as hell don't celebrate it. Who knows what I'll be into- the only thing I can really hope for is that I'm liking what I'm listening to.</p>
        <hr />
        </div>
    }
    else if(this.state.tldr === 'gone') {
      tldr = '';
    }

    console.log(data);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {modal}
        <SEO title="My Decade In Music" />
        <div className="headerwrapper" style={{
          paddingTop: '200px',
          backgroundSize: 'cover',
          backgroundPositionY: '80%',
          backgroundImage: `url(${data.background.childImageSharp.fluid.src})`,
        }}><h1
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
            fontSize: 50,
          }}
        >
          My Decade In Music: 2010-2019
        </h1></div>

        <div className="introContainer">


        <h3><a onClick={this.showTldr} href="#">Read The Long Thing</a> or <a onClick={this.destroyTldr} href="#">Nah</a></h3>
        {tldr}
        <h1 className="sectionHead">50 Artists</h1>
          <p
            style={{
              ...scale(-1 / 8),
              display: `block`,
              marginBottom: rhythm(1),
              fontSize: '20px',
            }}
          >In retrospect, these 50 artists had the biggest impact / staying power with me over the last 10 years. They are loosely ranked by their presence in my yearly lists, with some correction for history and what I truly spent the most time listening to. For each of them, I've included a few words, plus an embed of my favorite album of theirs from this decade, and the occasional bonus material to highlight my appreciation. I hope you can find something in here that you enjoy as much as I have.</p>
        </div>
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
        <div className="introContainer"><h1 className="sectionHead">Year By Year</h1>
          <p>I've reduced my annual lists down to a more digestible 25 (as much as it breaks my heart to see what's cut). Also included my yearly playlist of favorite tunes for each year provided (2012 on).</p></div>
        <div className="yearLabelWrapper">
          <h2 onClick={this.changeYear} data-year="2012" className="yearLabel">2012</h2>
          <h2 onClick={this.changeYear} data-year="2013" className="yearLabel">2013</h2>
          <h2 onClick={this.changeYear} data-year="2014" className="yearLabel">2014</h2>
          <h2 onClick={this.changeYear} data-year="2015" className="yearLabel">2015</h2>
          <h2 onClick={this.changeYear} data-year="2016" className="yearLabel">2016</h2>
          <h2 onClick={this.changeYear} data-year="2017" className="yearLabel">2017</h2>
          <h2 onClick={this.changeYear} data-year="2018" className="yearLabel">2018</h2>
          <h2 onClick={this.changeYear} data-year="2019" className="yearLabel">2019</h2>
        </div>

        <YearList year={this.state.year} />

        <div className="introContainer"><h1 className="sectionHead">One Final Playlist</h1>

        </div>
        <div className="introContainer"><h3 className="sectionHead">Thanks for listening with me.</h3>
        <p className="closing">Hit me up on <a target="_blank" href="https://www.twitter.com/kindaintense">twitter</a>, <a target="_blank" href="https://www.facebook.com/matthensley">fb</a>, <a target="_blank" href="https://www.instagram.com/matthensley">instagram</a>, etc. and we can do it up.</p>
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
    background: file(absolutePath: { regex: "/pickathon.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          aspectRatio
          ...GatsbyImageSharpFluid
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
