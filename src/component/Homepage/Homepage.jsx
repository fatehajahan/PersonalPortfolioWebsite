import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Contactme from '../Contactme/Contactme'
import Review from '../Review/Review'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects/>
      <Review/>
      <Contactme/>
      <Footer/>
    </div>
  )
}

export default Homepage