import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import tw from 'tailwind-styled-components'

const StyledSectionTitle = tw.h1`
  font-semibold
  text-3xl
  border-dashed
  border-b-4
  border-gray-400
  pb-2
  mx-auto
`

const StyledProjectTitle = tw.h2`
  font-semibold
  text-4xl
  text-gray-200
  pb-2
  `
const StyledProject = tw.div`
  flex
  flex-wrap
  py-12
  ${p=> p.reverse ? 'flex-col-reverse lg:flex-row text-left lg:text-right' : ''}
`
const StyledDescription = tw.p`
  w-full
  lg:w-1/2
  p-6
  lg:pt-32
  text-md
  text-left
  whitespace-pre-line
`
const PortfolioSection = () => {

  const data = useStaticQuery(graphql`
    query {
      tyroLaptop: file(relativePath: { eq: "tyro-laptop.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, quality: 85)
        }
      },
      tyroPhone:file(relativePath: { eq: "tyro-phone.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, quality: 85)
        }
      },
      hanakolTablet:file(relativePath: { eq: "hanakoleh-tablet.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, quality: 85)
        }
      },
      toyotaDesktop:file(relativePath: { eq: "toyota.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, quality: 85)
        }
      },
      tablecheck:file(relativePath: { eq: "tablecheck.svg" }) {
        publicURL
      }
    }
  `);

  return <div className="bg-gray-800 pt-16 pb-4 w-full text-gray-200 pattern-stripes">
    <div className="container mx-auto flex flex-col">
    <StyledSectionTitle>What I've done</StyledSectionTitle>
    <div className="divide-y-2 divide-gray-600 divide-dashed">

      <StyledProject>
        <div className="w-full lg:w-1/2 p-6 relative">
            <StyledProjectTitle>TableCheck</StyledProjectTitle>
            <span className="text-lg"> 2021</span>
            <img src={data.tablecheck.publicURL} alt="Laptop image of TableCheck"/>    
        </div>
        <StyledDescription>
          <a href="https://tablecheck.com/en/join" className="underline">TableCheck</a> is a cohesive B2B platform for managing restaurants and other high end venues' reservations, table seating, reviews, bills, payments, loyalty programs, etc...
          <br/><br/>
          During my time with Tablecheck, i've worked on multiple products offered for both B2B and B2C in both an IC and EM capacity to achieve the following milestones:
          <br/><br/>
          - Drive a team of 4 engineers to UI/UX rewrite for critical B2B management  software with 10k restaurants and 35k daily active users
            <br/>
          - Design and implement a custom solution for publishing articles, press releases, and a B2B marketing funnel with 5K~ organic daily visitors
            <br/>
          - Ensuring global language support with 23 languages supported including full RTL/LTR layout shifts
            <br/>
          - Integrate Multiple payment gateways serving 45+ countries
            <br/>
          - Host an annual Hackathon event to foster connections between IT and non-IT and generate new ideas leading to new production features
            <br/>
          - Upgrade tooling and frameworks across the organization (webpack -> vite, Upgrade React, Upgrade EmberJS, Convert JS to Typescript, Optimize CI/CD pipelines) to improve build times by 65~%
        </StyledDescription>
      </StyledProject>
      <StyledProject>
        <div className="w-full lg:w-1/2 p-6 relative">
          <StyledProjectTitle>Nafham by Tyro</StyledProjectTitle>
          <span className="text-lg">2016</span>
          <GatsbyImage image={getImage(data.tyroLaptop)!} alt="Laptop image of Tyro-app.com"/>
        </div>
        <StyledDescription>
          <a href="https://nafhambytyro.com" className="underline">Nafham by Tyro</a> is an online e-learning startup based in Egypt that I co-founded with friends in the last year of university.
          <br/><br/>
          It's a platform that connects people who want to learn something with tutors who can teach them that thing (be it languages, arts, etc...). Essentially it's a crowd-sourced tutoring service.
          <br/><br/>
          It has an AngularIO frontend with a (semi-)monolithic Rails backend handling most of everything. There are a few micro-services that service the "Session" which is an in-house video conferencing solution based on WebRTC/websockets. The session also includes an interactive real-time shared whiteboard written in javascript where the participants of the session can draw and write together to explain concepts and ideas effortlessly
          <br/><br/>
          Over the years, we've redesigned the website three times to increase conversion rates, refactored and upgraded the frontend (from AngularJS in the beginning to AngularIO) and the backend (from Rails 4 to 5)
        </StyledDescription>
      </StyledProject>

    </div>
  </div>
  </div>
}

export default PortfolioSection
