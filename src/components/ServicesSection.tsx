import React from 'react'
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

const ServicesSection = () => (
  <div className="bg-gray-900 py-16 w-full">
  <div className="container mx-auto flex flex-col text-gray-200">
    <StyledSectionTitle>What i can do for you</StyledSectionTitle>

    <div className="flex flex-wrap justify-center mt-12">
      <div className="relative w-full lg:w-1/3 p-16">
        <svg className="absolute w-44 h-44 opacity-20 top-0 right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <h3 className="text-3xl font-semibold mb-4">Development</h3>
        <p className="text-lg">I build solutions with your business goals in mind, whether you need a small landing page or bigger projects like eCommerce websites or SaaS platforms. Everyone needs something different, and i strive on delivering the perfect tailor-made solution for each situation using the best tools and practicies</p>
      </div>
      <div className="relative w-full lg:w-1/3 p-16">
        <svg className="absolute w-44 h-44 opacity-20 top-0 right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <h3 className="text-3xl font-semibold mb-4">Business Strategy</h3>
        <p className="text-lg">We discuss what you are trying to achieve. Through multiple iterations, analysis and discussions, we can start to form the ideal vision of your project and how best to achieve it. Knowledge is power, and you need to plans regarding lead generations, conversions, monetization, etc... </p>
      </div>
      <div className="relative w-full lg:w-1/3 p-16">
        <svg className="absolute w-44 h-44 opacity-20 top-0 right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        <h3 className="text-3xl font-semibold mb-4">Support</h3>
        <p className="text-lg">Maybe you need some help maintaining an existing solution, or just need some advice or perspective. I can work with you to answer questions, research new ideas or concepts, maintain existing solutions, etc... If you need any kind of help, don't hesitate to get in touch to find out how i can help you</p>
      </div>

    </div>
  </div>
  </div>

)

export default ServicesSection;