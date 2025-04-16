import React from 'react';
import './AboutMe.css';
import './AboutMeMobile.css';

import Pic1Ai from '../assets/images/Pic1Ai.jpeg'; // Correct image path

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={Pic1Ai} alt="Circular Image" class="Circular-image" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          Hi, I’m AJ, a passionate Freelance Fullstack Developer and Security Researcher. With expertise in both frontend and backend technologies, I create dynamic, user-friendly applications that provide seamless experiences across various platforms. My skill set includes working with modern frameworks and technologies like React, Node.js, Express, and more, allowing me to build everything from simple websites to complex, scalable web applications.
          </p>
          <p>
          In addition to development, I have a strong interest in cybersecurity. As a Security Researcher, I focus on identifying vulnerabilities and enhancing system defenses to protect applications and data. I enjoy staying updated with the latest security trends and best practices to ensure the solutions I develop are robust and secure.
          </p>
          <p>
            When I’m not coding, you can find me exploring the latest tech trends, reading about 
            software development, or contributing to open-source projects. I believe in lifelong 
            learning and i'm always looking to improve my skills and knowledge in the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
