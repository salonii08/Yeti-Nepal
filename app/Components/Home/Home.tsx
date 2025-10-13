import React from 'react'
import Hero from './Hero/Hero'
import Technology from './Technology/Technology'
import Services from './Services/Services'
import Project from './Project/Project'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Technology/>
      <Services />
      <Project/>
    </div>
  )
}

export default Home
