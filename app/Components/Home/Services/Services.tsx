import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <section className=" flex flex-col justify-center items-center min-h-screen bg-black text-white px-4 text-center sm:px-8 lg:px-16 gap-4">
   
      <p className="text-[#3094CD] mb-2 inline-flex items-center gap-2 mt-[38px]">
        <IoBagHandleOutline />Professional Services
      </p>

      <h1 className=" sm:text-5xl lg:text-5xl text-center font-bold mb-6 bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent">
        Innovative Tech Solutions, <br /> For Modern Businesses!
      </h1>

      <p className="text-white px-18 mb-10 max-w-[900px]  text-sm sm:text-base md:text-lg text-center sm:text-left">
        From startups to enterprises, we deliver cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
      </p>

      <div className="flex flex-wrap justify-center gap-13 max-w-6xl mx-auto text-left">
        <div className="flex-1 min-w-[300px] max-w-[350px] border border-[#444444] rounded-lg p-6 bg-[#1B1818] hover:border-blue-400 transition">
            <h3 className=" text-lg font-semibold mb-3 text-white">Web Development</h3>
            <p className="text-[#C9C9C9] mb-3">
            Custom websites and web applications that drive business growth with cutting-edge technology.
            </p>
            <ul className="list-disc list-inside text-[#C9C9C9] space-y-1">
            <li>React/Next.js Apps</li>
            <li>E-Commerce Solutions</li>
            <li>Progressive Web Apps</li>
            <li>Full-Stack Development</li>
            </ul>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[350px] border border-[#444444] rounded-lg p-6 bg-[#1B1818] hover:border-blue-400 transition">
            <h3 className="text-[#FEFEFE]text-lg font-semibold mb-3 text-white">Mobile App Development</h3>
            <p className="text-[#C9C9C9] mb-3">
            Native and cross-platform mobile solutions that engage users across all devices.
            </p>
            <ul className="list-disc list-inside text-[#C9C9C9] space-y-1">
            <li>iOS & Android Apps</li>
            <li>React Native</li>
            <li>Flutter Development</li>
            <li>App Store Optimization</li>
            </ul>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[350px] border border-[#444444] rounded-lg p-6 bg-[#1B1818] hover:border-blue-400 transition">
            <h3 className="text-lg font-semibold mb-3 text-white">Backend & API Development</h3>
            <p className="text-[#C9C9C9] mb-3">
            Robust, scalable backend systems and APIs that power modern applications.
            </p>
            <ul className="list-disc list-inside text-[#C9C9C9] space-y-1">
            <li>REST & GraphQL APIs</li>
            <li>Database Architecture</li>
            <li>Cloud Infrastructure</li>
            <li>Microservices</li>
            </ul>
        </div>
        
        <div className="max-w-4xl mx-auto pt-[38px] p-8 bg-[#1B1818] rounded-lg border border-[#444444] text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
                <img src="/images/icon.png" alt="Icon" className="w-8 h-8" />
                <h2 className="text-[#3094CD] text-xl sm:text-2xl md:text-3xl font-semibold">
                Ready to Transform Your Business?
                </h2>
            </div>

            <p className="text-[#FEFEFE] text-center text-md leading-relaxed px-6 text-bottom">
                Let's discuss your project requirements and create a custom solution
                that fits your needs and budget. Our team of experts is ready to bring
                your vision to life.
            </p>

            <div className="flex justify-center flex-wrap gap-4">
                <button className="bg-[#39B6FD] text-white p-4 rounded-lg">
                Start your Project
                </button>
                <button className="border border-[#39B6FD] text-white p-4 rounded-lg ">
                Schedule Consultation
                </button>
            </div>
        </div>
    </div>

      
      
    </section>
  )
}

export default Services
