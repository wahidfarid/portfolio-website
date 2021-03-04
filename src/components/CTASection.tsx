import React from 'react';
import CTAButton from './CTAButton';

const CTASection = () =>(
  <div className="bg-gray-900 py-16 w-full border-t-4 border-gray-400 border-dashed">
    <div className="container mx-auto flex flex-col justify-center items-center text-gray-200">      

      <h2 className="text-3xl">Do you have questions? I've got answers!</h2>
      <h3 className="text-xl mt-3">Get in touch to figure out how I can help you</h3>
      <CTAButton text="Send email"/>
    </div>
  </div>
)

export default CTASection;