// src/Components/Header/Header.js

import React from 'react';
import Logo from './Logo/Logo'; // Import the Logo component
import Navbar from './Navbar/Navbar'; // Import the Navbar component
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo /> {/* Renders Logo */}
      <Navbar /> {/* Renders Navbar */}
    </header>
  );
};

export default Header; // Only export Header
