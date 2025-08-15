import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import photo from '../../assets/cropped_circle_image.png'
import myResume from '../../assets/Sourav_Chitnis_Lebenslauf.pdf'

const Hero = () => {
  return (
    <div id="home"className='hero'>
      <img src={photo}alt='Hero me'/>
      <h1><span>Hello, I'm Sourav,</span> Software Developer</h1>
      <p>I'm a passionate developer who loves to create innovative solutions for the web.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={5} href='#contact'>Connect with me</AnchorLink></div>
        <a className="hero-resume" href={myResume} target='_blank' rel="noopener noreferrer">My Resume</a>
      </div>
      
    </div>
  )
}

export default Hero