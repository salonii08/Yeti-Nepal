import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white px-6 text-center">
   
      <p className="text-[#3094CD] mb-2 inline-flex items-center gap-2">
        <IoBagHandleOutline />Professional Services
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent">
        Innovative Tech Solutions, <br /> For Modern Businesses!
      </h1>

      <p className="text-[#fefefe] max-w-2xl mb-10">
        From startups to enterprises, we deliver cutting-edge technology
        solutions that drive growth, efficiency, and competitive advantage.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <button className="bg-[#39B6FD] text-[#FEFEFE] px-6 py-3 rounded-md transition text-[20px]">
          Start Your Project
        </button>
        <button className="border border-[#39B6FD] text-[#3296CF] px-6 py-3 rounded-md transition text-[20px]">
          Discover Our Work
        </button>
      </div>
      <h2 className="text-[42px] font-bold mb-15">
        Our Services
      </h2>
    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto text-left">
        <div className="flex-1 min-w-[300px] max-w-[350px] border border-gray-700 rounded-lg p-6 bg-[#0b0b14] hover:border-blue-400 transition">
        <h3 className="text-lg font-semibold mb-3 text-white">Web Development</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>React/Next.js Apps</li>
        <li>E-Commerce Solutions</li>
        <li>Progressive Web Apps</li>
        <li>Full-Stack Development</li>
        </ul>
        </div>
    </div>
    
      
      
    </section>
  )
}

export default Services
