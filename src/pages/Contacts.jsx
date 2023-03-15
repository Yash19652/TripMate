import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Contacts = () => {
  return (
    <>
    <Hero 
    cName="hero-mid" 
    heroImg="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    title="Contact"
    url="/"
    btnClass="hide"
    />
    <ContactForm />
<Footer />
</>

  )
}

export default Contacts