import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import HomeSection from '../components/HomeSection'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import HomeSection4 from '../components/HomeSection4'
import Testimonial from '../components/Testimonial'
import AboutTeam from '../components/AboutTeam'
import ContactUs from '../components/ContactUs'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <HomeSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <ContactUs/>
      <Testimonial />
      <AboutTeam />
      <Contact/>

    </div>
  )
}

export default Home
