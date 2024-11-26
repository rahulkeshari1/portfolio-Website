import React from 'react'

export default function Projects() {

  const projects = [
    {
      title: "PWA APPLICATION OF DMRC MOMENTUM 2.0",
      description: "A project related to Delhi Metro Rail Corporation (DMRC), showcasing a platform or application for metro users. ",
      link: "http://34.93.164.215/msite/",
    },
  
 
    {
      title: "Event Ticketing Website for ITPO and HT City",
      description: "A robust ticketing system developed for ITPO and HT City, enabling seamless event ticket booking and management.",
    },
    {
      title: " Quiz Website",
      description: "A quiz platform where users can test their knowledge in a variety of topics, featuring interactive and engaging quizzes.",
    },
    {
      title: "Game Application",
      description: "A fun and engaging mobile game designed for entertainment, featuring exciting gameplay and immersive experiences.",
      link: "https://link-to-game-project.com", // Optional
    }
  ];

  return (
    <div id='Projects'>
      <h3>PROJECTS</h3>
      <div className='project_grid'>
        {projects.map((project, index) => (
          <div key={index} className="project_card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
}
