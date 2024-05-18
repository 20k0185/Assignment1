import React from 'react';
import './Education.css'; // Create a corresponding CSS file for styling

const Education = () => {
  // Replace with your actual education details
  const educationHistory = [
    {
      institution: 'FAST NUCES',
      degree: 'Bachelor of Science IN SOFTWRE ENGINEERING',
      year: '2020 - 2024',
      description: 'Focused on software development and data structures.'
    },
    {
      institution: 'ARMY PUBLIC DEGREE COLLGE MALIR CANTT',
      degree: 'HSSC',
      year: '2018 - 2020',
      description: 'Graduated with honors, member of the math club and soccer team.'
    },
    {
      institution: 'HITEC TAXILA CANTT',
      degree: 'SSC',
      year: '2016 - 2018',
      description: ' '}
    
    // Add more educational experiences as needed
  ];

  return (
    <div className="education-container">
      <h1>My Education</h1>
      <ul className="education-list">
        {educationHistory.map((edu, index) => (
          <li key={index} className="education-item">
            <h2>{edu.institution}</h2>
            <h3>{edu.degree}</h3>
            <p>{edu.year}</p>
            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;