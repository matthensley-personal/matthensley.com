import React from "react"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"


function ArtistModal({ isOpen, rank, artistData }) {
  console.log(artistData);
  if(isOpen == 'true') {
    return (
      <div
        style={{
          position:'fixed',
          zIndex:'3',
          top:'10%',
          bottom:'10%',
          left: '10%',
          right: '10%',
          backgroundImage: `url(${artistData.node.header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '25px',
          maxWidth: '80%',
          width: '900px',
          margin: 'auto',
          padding: '20px'
        }}
      ><div className="modal-inner" style={{
        maxHeight: '100%',
        overflowY: 'scroll'
      }}>
        <h2
          style={{
            color: 'white',
            marginTop: '.5rem',
          }}>{artistData.node.artist}</h2>
          <h3 style={{
            color: 'white',
            marginTop: '.5rem',
          }}>{artistData.node.album}</h3>
          <iframe
            src={artistData.node.spotify}
            title={artistData.node.artist}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media">
          </iframe>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

ArtistModal.defaultProps = {
  isOpen: 'false',
  rank: 0,
  artistData: {}
}



export default ArtistModal
