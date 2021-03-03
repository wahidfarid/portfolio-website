import React from 'react'
import tw from 'tailwind-styled-components'

import skills from './skills'

const StyledSectionTitle = tw.h1`
  font-semibold
  text-3xl
  border-dashed
  border-b-4
  border-gray-400
  pb-2
  mx-auto
`

const StyledCategoryTitle = tw.h2`
  font-semibold
  text-5xl
  text-gray-300
  py-8
  text-center
`

const StyledSkill = tw.span`
  text-xl
  mx-4
  my-4
  px-4
  py-2
  rounded-full
  ${p => "bg-"+p.color+"-600"}
  ${p => ( p.great ? '' : 'bg-opacity-50' )}
`

const SkillsSection = () => (
<div className="bg-gray-800 pt-16 pb-4 w-full">
  <div className="container mx-auto flex flex-col text-gray-200">
    <StyledSectionTitle>How i do it</StyledSectionTitle>

    <div className="flex flex-wrap justify-center sm:divide-y-4 lg:divide-y-0 divide-dashed divide-gray-800 my-8">

      <div id="frontend" className="sm:w-full lg:w-1/2 lg:border-r-4 border-dashed border-gray-800">
        <StyledCategoryTitle>Frontend</StyledCategoryTitle>
        <div className="flex flex-wrap justify-center pb-8">
          {skills.frontend.great.map(skill => <StyledSkill key={skill} color="yellow" great={+true}>{skill}</StyledSkill>)}
          {skills.frontend.average.map(skill => <StyledSkill key={skill} color="yellow" great={+false}>{skill}</StyledSkill>)}
        </div>
      </div>
      <div id="backend" className="sm:w-full lg:w-1/2">
        <StyledCategoryTitle>Backend</StyledCategoryTitle>
        <div className="flex flex-wrap justify-center pb-8">
          {skills.backend.great.map(skill => <StyledSkill key={skill} color="blue" great={+true}>{skill}</StyledSkill>)}
          {skills.backend.average.map(skill => <StyledSkill key={skill} color="blue" great={+false}>{skill}</StyledSkill>)}
        </div>
      </div>
      <div id="inbetween" className="sm:w-full lg:w-1/2 lg:border-r-4 border-dashed border-gray-800 ">
        <StyledCategoryTitle>Inbetween</StyledCategoryTitle>
        <div className="flex flex-wrap justify-center pb-8">
          {skills.inbetween.great.map(skill => <StyledSkill key={skill} color="purple" great={+true}>{skill}</StyledSkill>)}
          {skills.inbetween.average.map(skill => <StyledSkill key={skill} color="purple" great={+false}>{skill}</StyledSkill>)}
        </div>
      </div>
      <div id="devops" className="sm:w-full lg:w-1/2">
        <StyledCategoryTitle>Devops / Architecture</StyledCategoryTitle>
        <div className="flex flex-wrap justify-center pb-8">
          {skills.devops.great.map(skill => <StyledSkill key={skill} color="red" great={+true}>{skill}</StyledSkill>)}
          {skills.devops.average.map(skill => <StyledSkill key={skill} color="red" great={+false}>{skill}</StyledSkill>)}
        </div>
      </div>
      <div id="other" className="sm:w-full lg:w-1/2">
        <StyledCategoryTitle>Other</StyledCategoryTitle>
        <div className="flex flex-wrap justify-center pb-8">
          {skills.other.great.map(skill => <StyledSkill key={skill} color="pink" great={+true}>{skill}</StyledSkill>)}
          {skills.other.average.map(skill => <StyledSkill key={skill} color="pink" great={+false}>{skill}</StyledSkill>)}
        </div>
      </div>

    </div>

  </div>
</div>
)

export default SkillsSection