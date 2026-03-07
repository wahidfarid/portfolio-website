import React from "react"

import Layout from "../components/layout"
import HomeSection from "../components/HomeSection"
import SkillsSection from "../components/SkillsSection"
import PortfolioSection from "../components/PortfolioSection"
import CTASection from "../components/CTASection";
import ServicesSection from "../components/ServicesSection"
import SectionDivider from "../components/SectionDivider"
import AnimateOnScroll from "../components/AnimateOnScroll"

const GRAY_800 = '#1f2937'
const GRAY_900 = '#111827'

export default () => {

  return <Layout>
    <HomeSection/>
    <SectionDivider variant="wave" topColor={GRAY_800} bottomColor={GRAY_900} />
    <AnimateOnScroll backgroundColor={GRAY_900}><ServicesSection/></AnimateOnScroll>
    <SectionDivider variant="curve" topColor={GRAY_900} bottomColor={GRAY_800} />
    <AnimateOnScroll backgroundColor={GRAY_800}><PortfolioSection/></AnimateOnScroll>
    <SectionDivider variant="tilt" topColor={GRAY_800} bottomColor={GRAY_900} />
    <AnimateOnScroll backgroundColor={GRAY_900}><SkillsSection/></AnimateOnScroll>
    <AnimateOnScroll><CTASection/></AnimateOnScroll>
  </Layout>
}
