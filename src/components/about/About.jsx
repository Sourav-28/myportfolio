import React from 'react'
import './About.css'
import myImg from '../../assets/Sourav_Chitnis_Photo.jpg'
import {theme} from '../../assets/theme.js'

const About = () => {
  return (
    <div id="about"className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="Theme on about me" />
        </div>
        <div className="about-sections">
            <div className="about-left">
               <img src={myImg} alt="My photo" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate developer and I love building for the web and keeping things simple and fast. Most days I’m working on the frontend with React, and when I need a backend I use Node.js or Python, and sometimes Java. I care about clean, readable code and small details that make the experience feel smooth.</p>
                    <p>In my free time I solve LeetCode problems to keep my problem solving sharp. I’m always looking for new challenges where I can apply my skills to real projects, learn from others, and stay up to date with technology. I enjoy meeting new people and bringing steady energy and dedication to every project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>React.js</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:'65%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p>
                        <hr style={{width:'68%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python</p>
                        <hr style={{width:'60%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>DSA</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achiement">
                <h1>3+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achiement">
                <h1>1+</h1>
                <p>years of Experience</p>
            </div>
            <hr />
            <div className="about-achiement">
                <h1>100+</h1>
                <p>Leetcode problems solved</p>
            </div>
        </div>
    </div>
  )
}

export default About