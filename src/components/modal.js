import React from "react"


function ArtistModal({ isOpen, rank, artistData }) {
  let description
  if(artistData) {
    description = {
      __html: artistData.node.description,
    }
  }
  if(isOpen === 'true') {
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
        }}
      ><div className="modalInner" style={{
        maxHeight: '100%',
        overflowY: 'scroll',
        height: '100%',
      }}>
        <div className="modalHeader">
          <h2
            style={{
              color: 'white',
              marginTop: '.5rem',
            }}>{artistData.node.artist}</h2>
        </div>
        <div className="modalContent">
          <div className="modalLeft">
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
          <div className="modalRight">
            <h3 style={{
              color: 'white',
              marginTop: '0px',
            }}>Favorite Album: {artistData.node.album}</h3>
            <div className="artistDescription" dangerouslySetInnerHTML={description}>
            </div>
          </div>
          </div>
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
