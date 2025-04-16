// src/Components/Projects/Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import './ProjectMobile.css';


const Projects = () => {
  // Example project data, you can modify this with your actual project details
  const projectList = [
    {
      id: 1,
      title: 'Px Studios',
      description: 'Coming Soon.',
      
    },
    {
      id: 2,
      title: 'SelfIT powered by Ai ',
      description: 'Coming Soon.',
      
    },
    {
      id: 3,
      title: 'Global Guardian',
      description: 'Coming Soon.',

      
    },
    {
      id: 4,
      title: 'Rivs Data recovery tool',
      description: 'Coming Soon.',
     
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
