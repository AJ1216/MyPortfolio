// src/Components/Header/Logo/Logo.js

import React from 'react';
import './Logo.css';

const Logo = () => {
  const handleReload = () => {
    window.location.href = window.location.href;
  };

  return (
    <div className="logo" onClick={handleReload}>
      <h1>MyPortfolio</h1>
    </div>
  );
};

export default Logo;