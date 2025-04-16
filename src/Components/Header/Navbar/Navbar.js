import React, { useState } from 'react';
import './Navbar.css';
import './Navbarmobile.css'; // Mobile styles

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State for mobile menu

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the menu visibility
  };

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsActive(false); // Close the menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`navbar-links ${isActive ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>About Me</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
