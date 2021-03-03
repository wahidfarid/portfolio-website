import React from "react"

import Layout from "../components/layout"
import HomeSection from "../components/HomeSection"
import SkillsSection from "../components/SkillsSection"
import PortfolioSection from "../components/PortfolioSection"
import CTASection from "../components/CTASection";
import ServicesSection from "../components/ServicesSection"

export default () => {

  return <Layout>
    <HomeSection/>
    <ServicesSection/>
    <SkillsSection/>
    <PortfolioSection/>
    <CTASection/>
  </Layout>
}