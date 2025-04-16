import React from 'react';
import { FaHome } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const handleReload = () => {
    // eslint-disable-next-line no-self-assign
    window.location.href = window.location.href.split('?')[0]; // Prevents assigning to itself
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="copyright">&copy; 2024 Created by Aj</span>
        <button className="home-button" onClick={handleReload}>
          <FaHome size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
