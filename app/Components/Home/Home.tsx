import React from 'react'
import Hero from './Hero/Hero'
import Technology from './Technology/Technology'
import Services from './Services/Services'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Technology/>
      <Services />
    </div>
  )
}

export default Home
