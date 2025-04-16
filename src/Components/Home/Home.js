import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/ContactForm';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        {/* Additional content or introductory section can go here */}
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
