import React from 'react'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Trip from '../components/Trip'

const Home = () => {
  return (
    <>
    <Hero 
    cName="hero" 
    heroImg="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination />
    <Trip />
    <Footer />
    </>
  )
}

export default Home