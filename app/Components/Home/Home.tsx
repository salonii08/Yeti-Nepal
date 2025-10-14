import React from 'react'
import Hero from './Hero/Hero'
import Technology from './Technology/Technology'
import Services from './Services/Services'
import Team from './Team/Team'
import Project from './Project/Project'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Technology/>
      <Services />
      <Team/>
      <Project/>
    </div>
  )
}

export default Home
