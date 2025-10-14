import React from 'react'
import Hero from './Hero/Hero'
import Technology from './Technology/Technology'
import Services from './Services/Services'
import Team from './Team/Team'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Technology/>
      <Services />
      <Team/>
    </div>
  )
}

export default Home
