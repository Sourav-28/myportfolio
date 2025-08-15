import React , {useState, useRef} from 'react'
import './Navbar.css'
import {underLine} from '../../assets/icons.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {menuIcon} from '../../assets/icons.js'
import { FiAlignRight, FiX } from "react-icons/fi";
import { nameLogo } from '../../assets/navbarLogo.js'
// import menuIcon  from '../../assets/menu.png'

const Navbar = () => {

  // const [open,setOpen]= React.useState(false);
  const [menu,setMenu]= React.useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img  className='nav-logo' src={nameLogo} alt="Name logo"/>
      <img src={menuIcon} onClick={openMenu} alt="Menu icon" className='nav-mob-open'/>  
      {/* <button className='nav-toggle' aria-label={open ? 'Close menu': "Open menu"} aria-expanded={open}  onClick={()=>setOpen(!open)}>
        {open ? <FiX size={28}/> : <FiAlignRight size={28}/>}
      </button> */}
      <ul ref={menuRef} className='nav-menu'>
        <img src={menuIcon} onClick={closeMenu} alt="Menu icon" className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underLine} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={5} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underLine} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={5} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={underLine} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={5} href='#work'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underLine} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={5} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underLine} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={5} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar