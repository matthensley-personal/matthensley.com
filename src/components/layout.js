import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {

  render() {
    const { location, title, children, data } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Matt Hensley
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >

            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{
          position: "relative",
          zIndex: '2',
          display: "inline-block",
          backgroundColor: "rgba(0,0,0,.6)",
          borderRadius: "0px 20px 20px 0px",
          paddingLeft: "430px",
          paddingTop: "30px",
          paddingRight: "30px",
          marginLeft: "-400px",
          color: "white"
        }}>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
