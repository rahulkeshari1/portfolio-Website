import React from 'react';
import Html from '../Assets/HTML5.png'

// Define a component for each skill item
const SkillItem = ({ iconSrc, skillName, shadowColor }) => {
  return (
    <div className={`skill-card ${shadowColor}`}>
    
      <p>{skillName}</p>
    </div>
  );
};

// Main Skills component
const Skills = () => {
  // Define skill data
  const skills = [
    {
      iconSrc: Html,
      skillName: "HTML",
      shadowColor: "shadow-orange",
    },
    {
      iconSrc: "/static/media/css.69a82c2d9e45c933a9cb.png",
      skillName: "CSS",
      shadowColor: "shadow-blue",
    },
    {
      iconSrc: "/static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
      skillName: "JAVASCRIPT",
      shadowColor: "shadow-yellow",
    },
    {
      iconSrc: "/static/media/github.3b9e32903aa89111875d.png",
      skillName: "GITHUB",
      shadowColor: "shadow-gray",
    },
    {
      iconSrc: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAA...", // Base64 image for example
      skillName: "React",
      shadowColor: "shadow-red",
    },
    {
      iconSrc: "/static/media/css.69a82c2d9e45c933a9cb.png",
      skillName: "JQUERY",
      shadowColor: "shadow-yellow",
    },
    {
      iconSrc: "/static/media/css.69a82c2d9e45c933a9cb.png",
      skillName: "React Native",
      shadowColor: "shadow-blue",
    },
    {
      iconSrc: Html,
      skillName: "Node Js",
      shadowColor: "shadow-orange",
    },
    {
      iconSrc: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAA...", // Base64 image for example
      skillName: "Wordpress",
      shadowColor: "shadow-gray",
    },
    {
      iconSrc: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAA...", // Base64 image for example
      skillName: "Mongo DB",
      shadowColor: "shadow-red",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header text-center">
        <h3 className="section-title">
          Skills
        </h3>
        <p className="section-description">Technologies I have worked with</p>
      </div>

      {/* Grid Container */}
      <div className='skillCon'>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            iconSrc={skill.iconSrc}
            skillName={skill.skillName}
            shadowColor={skill.shadowColor}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
