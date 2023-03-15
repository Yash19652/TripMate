import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const About = () => {
  return (
    <>
    <Hero 
    cName="hero-mid" 
    heroImg="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    title="About"
    url="/"
    btnClass="hide"
    />
    <AboutUs />
    <Footer />
    </>
  )
}

export default About