import React from 'react'
import './Skills.css'
import {theme} from '../../assets/theme.js'
import {
  SiReact, SiJavascript, SiNodedotjs, SiGit, SiSelenium, SiFigma,
  SiPython, SiMysql, SiTailwindcss
} from "react-icons/si";
import { nodeLogo,reactlogo,javascriptLogo,GitLogo,pythonLogo,javaLogo,mysqlLogo,tailwindLogo,awsLogo } from '../../assets/skillsLogo.js'




const SKILLS = [
  { name: "React", img: reactlogo },
  { name: "JavaScript", img: javascriptLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "Git", img: GitLogo },
  { name: "Python", img: pythonLogo },
  { name: "Java", img: javaLogo },
  { name: "MySQL", img: mysqlLogo },
  { name: "Tailwind", img: tailwindLogo },
  { name: "AWS", img: awsLogo },
];

const EXPERIENCE = [
  { year: "2024–Present", role: "Master's Informatik (Student)", company: "RPTU Kaiserslautern" },
  { year: "2023–2024", role: "Software Engineer", company: "Accenture", badge: "Full-time" },
  { year: "2022–2023", role: "ML Developer Intern", company: "RIA Advisory", badge: "Internship" },
  { year: "2022", role: "Web Developer Intern", company: "Oasis Infobyte", badge: "Internship" }
];

const Skills = () => {
  return (
    <div>
        <div id="skills" className="skills-page">
            <div className="title">
                <h1>Skills and experience</h1>
                <img src={theme} alt="Theme on skills" />
            </div>
            <div className="skills-layout">
                <div className="skills-grid">
                  {SKILLS.map(({name,img})=>(
                    <div className="skill-chip" key={name} title={name}>
                      <div className="icon-wrap">
                        {img ? (<img src={img} alt={`${name} logo`} className="icon-img" />) :
                        null}
                      </div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
                <ol className='exp-col'>
                  {EXPERIENCE.map(({year,role,company,badge})=>(
                    <li className='exp-items' key={role + year}>
                      <div className="year">{year}</div>
                      <div className="exp-body">
                        <div className="role-row">
                          <h3 className="role">{role}</h3>
                          {/* {badge && <span className="badge">{badge}</span>} */}
                        </div>
                        <div className="company">{company}</div>
                      </div>
                    </li>
                  ))}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Skills