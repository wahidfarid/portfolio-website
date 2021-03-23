import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      tyroPhone:file(relativePath: { eq: "tyro-phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      hanakolTablet:file(relativePath: { eq: "hanakoleh-tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      toyotaDesktop:file(relativePath: { eq: "toyota.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `);

  return <div className="bg-gray-900 pt-16 pb-4 w-full text-gray-200">
    <div className="container mx-auto flex flex-col">
    <StyledSectionTitle>What I've done</StyledSectionTitle>
    <div className="divide-y-2 divide-gray-600 divide-dashed">

      <StyledProject>
        <div className="w-full lg:w-1/2 p-6 relative">
          <StyledProjectTitle>Tyro-app</StyledProjectTitle>
          <span className="text-lg">2016</span>
          <Img fluid={data.tyroLaptop.childImageSharp.fluid} alt="Laptop image of Tyro-app.com"/>
          <Img 
          fluid={data.tyroPhone.childImageSharp.fluid}
          alt="Phone image of Tyro-app.com"
          style={{position: "absolute", width: 120}}
          className="right-8 top-44 hidden xl:block"
          />        
        </div>
        <StyledDescription>
          <a href="https://tyro-app.com" className="underline">Tyro-app</a> is an online e-learning startup based in Egypt that I co-founded with friends in the last year of university.
          <br/><br/>
          It's a platform that connects people who want to learn something with tutors who can teach them that thing (be it languages, arts, etc...). Essentially it's a crowd-sourced tutoring service.
          <br/><br/>
          It has an AngularIO frontend with a (semi-)monolithic Rails backend handling most of everything. There are a few micro-services that service the "Session" which is an in-house video conferencing solution based on WebRTC/websockets. The session also includes an interactive real-time shared whiteboard written in javascript where the participants of the session can draw and write together to explain concepts and ideas effortlessly
          <br/><br/>
          Over the years, we've redesigned the website three times to increase conversion rates, refactored and upgraded the frontend (from AngularJS in the beginning to AngularIO) and the backend (from Rails 4 to 5)
        </StyledDescription>
      </StyledProject>

      <StyledProject reverse={+true}>
        <StyledDescription>
          <a href="http://toyotaelobour.com/" className="underline">Toyota el-Obour</a> is a freelance project for UMC, a Toyota dealership based in el-obour in cairo.
          <br/><br/>
          It's a Bi-lingual Wordpress website, made with Elementor, WPML, Advanced Custom Fields, Gravity forms and more tools. Design based on the international Toyota brand identity. The website was tailored to display all of the cars, models and services offered by UMC. This includes promotional material about all of the cars, information about all of the variations of the models of each car, a comparison tool to help clients to identify the ideal car for them, a maintenance scheduling form, a careers section, etc...
          <br/><br/>
          A notable achievement in this project was creating a completely custom wordpress plugin to display a 360 view of all of the cars on the website. While working with the client to bring their vision to life, i wasn't able to find an ideal already-existing solution for this component and so i've created the ideal solution myself. See it in action <a href="http://toyotaelobour.com/car/2021-corolla/" className="underline">here</a>

        </StyledDescription>
        <div className="w-full lg:w-1/2 p-6 relative">
          <StyledProjectTitle>Toyota el-Obour</StyledProjectTitle>
          <span className="text-lg">2021</span>
          <Img fluid={data.toyotaDesktop.childImageSharp.fluid} alt="Desktop image of toyotaelobour.com" className="w-2/3 mx-auto"/>
        </div>
      </StyledProject>
      
      <StyledProject>
      <div className="w-full lg:w-1/2 p-6 relative">
          <StyledProjectTitle>Hanakol-eh</StyledProjectTitle>
          <span className="text-lg">2021</span>
          <Img fluid={data.hanakolTablet.childImageSharp.fluid} alt="Tablet image of Hanakol-eh.com" className="w-2/3 mx-auto"/>
        </div>
        <StyledDescription>
          <a href="https://hanakol-eh.vercel.app/" className="underline">Hanakol-eh</a> literally means "What will we eat" in arabic. It's a small personal project built to help with the indecision of not knowing what food to order.
          <br/><br/>
          Though currently a WIP MVC, it's a simple React/NextJS SPA that displays aggregated data of many food delivery apps in the Egyptian market. The data is aggregated through a serverless function that requests APIs and crawls pages to find restaurants that deliver to the user's current location, then sort and filter them by deals and availability. The user can then know what the best deals are at a glance.
          <br/><br/>
          Open-source repo <a href="https://github.com/wahidmagdy/hanakol-eh" className="underline">here</a>. a lot of new features planned to be implemented over time, such as displaying deal information outside of food delivery apps, and caching the results geographically so not all users would have to wait as long to scrape all of the needed information.
        </StyledDescription>
      </StyledProject>
    </div>
  </div>
  </div>
}

export default PortfolioSection