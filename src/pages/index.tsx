import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import tw from 'tailwind-styled-components'

import Layout from "../components/layout"

const StyledAvatarWrapper = tw.div`
  border-4
  border-dashed
  border-gray-400
  rounded-full
  max-w-xs
  avatar-spin
`

const StyledAvatar = tw(Img)`
  max-w-xs
  w-xs
  m-3
  rounded-full
  ring-4
  ring-gray-600
  avatar-spin-reverse
`

export default () => {

  const data = useStaticQuery(graphql`
  query {
    fileName: file(relativePath: { eq: "wahid.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320, maxHeight: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);

  return <Layout>
    <div className="container mx-auto flex">
      <div className="left pt-80 w-1/2 flex flex-col justify-end">
        <StyledAvatarWrapper>
          <StyledAvatar
          fluid={data.fileName.childImageSharp.fluid} 
          alt="Picture of wahid"/>
        </StyledAvatarWrapper>
      </div>
      <div className="right w-1/2">

      </div>
    </div>
  </Layout>
}