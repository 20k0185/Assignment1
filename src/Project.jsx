import React, { useState } from 'react';
import './Project.css'; // Make sure to create a corresponding CSS file for styling

const Projects = () => {
  // Sample data for the projects
  const initialProjects = [
    {
      name: 'CHOICE BASED ADVENTURE GAME',
      description: 'This is a C# project.',
      technologies: ['C#', '.NET']
    },
    {
      name: ' CALORIES TRACKER APP',
      description: 'This is a Java project.',
      technologies: ['Java', 'Spring']
    },
    {
      name: 'BUILD EASE',
      description: 'This is a Node.js project.',
      technologies: ['Node.js', 'Express']
    },
    {
      name: 'ALGORITHM VISUALSIER',
      description: 'This is a java project.',
      technologies: ['Java']
    },
    // ... Add more projects as needed
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <input
        type="text"
        placeholder="Filter by technology..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;