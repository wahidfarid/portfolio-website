import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { Ref, useEffect, useRef } from "react"
import tw from 'tailwind-styled-components'
import PixelBanner from 'pixel-banner'

import GithubLastCommit from "../components/GithubLastCommit"
import CTAButton from "./CTAButton"


const StyledAvatarWrapper = tw.div`
  border-4
  border-dashed
  border-gray-400
  rounded-full
  avatar-spin
  `
const StyledAvatar = tw(GatsbyImage)`
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

const HomeSection = () => {
    const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "wahid.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, quality: 85)
        }
      }
    }
    `);

    let isPixelBannerInitialized = false;
    let PixelBannerDiv = useRef(null);

    const yearsOfExperience = (new Date).getFullYear() - 2014;

    useEffect(()=>{
      if(!isPixelBannerInitialized && PixelBannerDiv.current){
        new PixelBanner({
          target: "#pixel_banner_div",
          opacity: "0.2",
          pixel_options:{
              probability:{
                y_axis: "distance"
              }
          }
        }, PixelBannerDiv.current);
        isPixelBannerInitialized = true;
      }
    });

    return <div ref={PixelBannerDiv}>
      <div className="container mx-auto flex flex-wrap pt-12 lg:pt-40 pb-16 px-2">
        <div className="left w-full lg:w-3/5 flex flex-col justify-end items-center md:items-start z-10">
          
          <StyledAvatarWrapper style={{maxWidth: 250}}>
            <StyledAvatar
            image={getImage(data.fileName)!}
            alt="Picture of wahid"/>
          </StyledAvatarWrapper>
          
          <StyledName>Wahid M. Farid</StyledName>

          <StyledJobTitle>Full-stack web developer</StyledJobTitle>

          <StyledDescription>
            {yearsOfExperience} years of experience across multiple frameworks,
            Successfully cofounded a <a href="https://nafhambytyro.com/" className="underline">startup</a> in Egypt,
            Bsc. in Computer Science,
            Love the challenge of developing technical solutions within business constraints that help real users.
          </StyledDescription>

          <CTAButton/>

        </div>
        <div className="right w-full lg:w-2/5 my-12 lg:my-0 z-10">
          {/* <GithubLastCommit/> */}
        </div>
      </div>
    </div>
}
export default HomeSection;
