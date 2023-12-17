import React from 'react'
import Header from '../components/Header'
import Offer from '../components/Offer'
import About from '../components/About'
import Feature from '../components/Feature'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
    <Header/> 
      <Feature/>
      <Offer/>
      <About/>
      <Contact/> 
      
      </div>
  )
}
