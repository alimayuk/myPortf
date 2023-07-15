import React, { useRef,useState,useEffect } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {BiLogoInstagramAlt,BiLogoLinkedinSquare,BiLogoDiscordAlt} from "react-icons/bi" 
import {LuMailPlus} from "react-icons/lu" 
import { getTopNav } from '../../data/navbarData';

const Navbar = () => {
    const [navItem, setNavItem] = useState([]);
    useEffect(() => {
      setNavItem(getTopNav())
  }, [])
    
    const navRef = useRef();
    const showNav = () => {
      navRef.current.classList.toggle("responsive")
    }
  return (
    <nav className='navbar'>
    <div className="container">
        <a href="mailto: alimayuk22@hotmail.com" className='likeLogo'><LuMailPlus className='mail'/> <span className='mailText'>Send Me</span></a>
     <div> <ul className="links" ref={navRef}>
        {navItem.map((item)=>
          <li className='navbarLi'><a key={item.id} href={item.href} className="link">{item.label}</a></li>  
        )}
        <button className='nav-res-btn nav-close-btn' onClick={showNav}><FaTimes/></button>
      </ul>
      </div>
      <div className='social_Links'>
        <a className='socialBtn' target='_blank' href="https://www.linkedin.com/in/alimayuk22/"><BiLogoLinkedinSquare/></a>
        <a className='socialBtn' target='_blank' href="https://www.instagram.com/alimayukk/?next=%2F"><BiLogoInstagramAlt/></a>
        <a className='socialBtn' target='_blank' href="https://discordapp.com/users/319384861116858368"><BiLogoDiscordAlt/></a>
      </div>
      <button className='nav-res-btn' onClick={showNav}><FaBars/></button>
    </div>
    <hr className='line'/>
  </nav>
  )
}

export default Navbar