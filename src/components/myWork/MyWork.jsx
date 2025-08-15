import React from 'react'
import './MyWork.css'
import {theme} from '../../assets/theme.js'
import myWorkData from '../../assets/myWorkData.js'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={theme} alt="Theme on my work" />
        </div>
        <div className="mywork-container">
            {myWorkData.map((item)=>(
              <a key={item.id} className='work-card'href={item.github} target='_blank' rel="noopener noreferrer">
                <img className='work-img' src={item.w_img} alt={item.title} key={item.id} loading='lazy'/>
                <div className="work-overlay">
                  <h3 className="work-title">{item.title}</h3>
                  <span className="work-cta">View</span>
                </div>
              </a>
                 
            ))}
        </div>
        
    </div>
  )
}

export default MyWork