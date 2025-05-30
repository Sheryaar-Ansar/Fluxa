import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import HomeSection from '../components/HomeSection'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import HomeSection4 from '../components/HomeSection4'
import Testimonial from '../components/Testimonial'
import AboutTeam from '../components/AboutTeam'

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsSection/>
      <HomeSection/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <Testimonial/>
      <AboutTeam/>
    </div>
  )
}

export default Home
