import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}


export default Logo
