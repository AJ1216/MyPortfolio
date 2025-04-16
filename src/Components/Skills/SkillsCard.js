import React from 'react';

const SkillsCard = ({ skill }) => {
  return (
    <div className="skills-card">
      <img src={skill.icon} alt={`${skill.name} icon`} className="devicon" />
      <p>{skill.name}</p>
    </div>
  );
};

export default SkillsCard;
