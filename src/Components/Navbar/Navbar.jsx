import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import arrow_icon from '../Assets/arrow.png'
import { Link } from 'react-router-dom';
import open_icon from '../Assets/icons8-menu-30.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
      setIsOpen(false); 
    }
  };

  return (
    <div>
      <nav className='navbar'> 
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <img src={open_icon}></img> : <img src={open_icon}></img> }
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/#home-section" onClick={() => scrollToSection('home-section')}>Home</Link></li>
          <li><Link to="/#introduction-section" onClick={() => scrollToSection('introduction-section')}>Introduction</Link></li>
          <li><Link to="/#about-section" onClick={() => scrollToSection('about-section')}>About</Link></li>
          <li><Link to="/#portfolio-section" onClick={() => scrollToSection('portfolio-section')}>Portfolio</Link></li>
        </ul>
        <div className='nav-btn'>
            <button><Link to='/#contact-section' onClick={() => scrollToSection('contact-section')}>Connect</Link></button>
            <img src={arrow_icon} alt="" />
        </ div>

      </nav>
    </div>
  )
}

export default Navbar
