import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Trip from '../components/Trip'

const Services = () => {
  return (
    <>
    <Hero 
    cName="hero-mid" 
    heroImg="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    title="Services"
    url="/"
    btnClass="hide"
    />
    <Trip />
    <Footer />
    </>
  )
}

export default Services