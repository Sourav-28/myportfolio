import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import MyWork from './components/myWork/MyWork'
import Contact from './components/contact/ContactMePage.jsx'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App