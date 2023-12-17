import React from 'react';
import logo from '../assets/images/tsl.jpg';
import { Link } from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import { useState} from 'react';

function Navbar() {
  
  const [nav, setnav] = useState(false);
  const changeBackground=()=>{
    if(window.scrollY >= 50){ 
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? "nav active":"nav"}>
        <Link to='main' className='logo' smooth={true} duration={800}>
          <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' smooth={true} duration={800}>Offer</Link></li> 
          <li><Link to='features' smooth={true} duration={800}>Features</Link></li>
          <li><Link to='about' smooth={true} duration={800}>About Us</Link></li>
          <li><Link to='contact' smooth={true} duration={800}>Contact</Link></li>
          <li><RouterLink to='/bmi' style={{color:"black",textDecoration:"none"}}>bmi</RouterLink></li>
          <li><RouterLink to='/login' style={{color:"black",textDecoration:"none"}}>login</RouterLink></li>  
        </ul>
    </nav>
  )
  
}

export default Navbar