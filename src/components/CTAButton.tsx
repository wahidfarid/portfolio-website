import React from 'react';
import tw from 'tailwind-styled-components';

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

type CTAProps ={
  text?: string
}
const CTAButton = (props: CTAProps) => (
  <StyledGetInTouchButton href="mailto:hello@wahidfarid.dev" target="_blank">{props.text || "Get in touch"}</StyledGetInTouchButton>
)

export default CTAButton;