import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import tw from 'tailwind-styled-components'
import GithubLastCommit from "../components/GithubLastCommit"

import Layout from "../components/layout"

const StyledAvatarWrapper = tw.div`
  border-4
  border-dashed
  border-gray-400
  rounded-full
  avatar-spin
  `
const StyledAvatar = tw(Img)`
  max-w-xs
  w-52
  m-3
  rounded-full
  ring-4
  ring-gray-600
  avatar-spin-reverse
`

const StyledName = tw.h1`
  font-medium
  text-5xl
  mt-8
`
const StyledJobTitle = tw.h2`
  font-medium
  text-4xl
  mt-2
  text-gray-400
`

const StyledDescription = tw.p`
  font-medium
  text-xl
  mt-4
  text-gray-200
`

const StyledGetInTouchButton = tw.a`
  bg-gray-600
  hover:bg-gray-500
  rounded
  py-2
  px-4
  mt-5
  text-lg
  font-medium
  cursor-pointer
  float-left
  inline-block
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
    <div className="container mx-auto flex pt-40">
      <div className="left w-1/2 flex flex-col justify-end items-start">
        
        <StyledAvatarWrapper style={{maxWidth: 250}}>
          <StyledAvatar
          fluid={data.fileName.childImageSharp.fluid} 
          alt="Picture of wahid"/>
        </StyledAvatarWrapper>
        
        <StyledName>Wahid Farid</StyledName>

        <StyledJobTitle>Full-stack web developer</StyledJobTitle>

        <StyledDescription>
          6 years of experience across multiple frameworks,
          Successfully cofounded a <a href="https://tyro-app.com" className="underline">startup</a>,
          Bsc. in Computer Science,
          Love the challenge of developing technical solutions within business constraints that help real users.
        </StyledDescription>

        <StyledGetInTouchButton>Get in Touch</StyledGetInTouchButton>


      </div>
      <div className="right w-1/2">
        <GithubLastCommit/>
      </div>
    </div>
  </Layout>
}