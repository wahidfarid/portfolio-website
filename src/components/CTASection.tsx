import React from 'react';
import CTAButton from './CTAButton';

const CTASection = () =>(
  <div className="py-24 w-full" style={{ background: 'radial-gradient(ellipse at 50% 30%, #1f2937 0%, #111827 70%)' }}>
    <div className="container mx-auto flex flex-col justify-center items-center text-gray-200 px-6 text-center">

      <div className="mb-6 p-4 rounded-full bg-gray-800 border border-gray-700">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <h2 className="text-4xl font-semibold mb-4">Let's work together</h2>
      <p className="text-xl text-gray-400 max-w-lg mb-2">Have a project in mind or just want to chat? I'd love to hear from you.</p>
      <p className="text-lg text-gray-500 mb-8">Reach out and let's figure out how I can help.</p>

      <CTAButton text="Send me an email"/>
    </div>
  </div>
)

export default CTASection;