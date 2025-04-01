import React from 'react';
import './parc.scss';

const Education = () => {
  const educationData = [
    {
      period: '2024 - Present',
      degree: 'Professional Bachelor in Software Engineering',
      institution: 'ESTEM',
      description: 'Training focused on software development and design methodologies.'
    },
    {
      period: '2022 - 2024',
      degree: 'Specialized Technician Diploma in Multimedia Development',
      institution: 'Best Institute',
      description: 'Acquisition of skills in web development, interface design and multimedia content creation.'
    },
    {
      period: '2021 - 2022',
      degree: 'High School Diploma',
      institution: 'High School',
      option: 'Physics and Chemistry',
      description: 'Scientific education with specialization in physics and chemistry.'
    }
  ];

  return (
    <div className="education-timeline">
      <div className="education-title-container">
        <h2 className="education-title">EDUCATIONAL BACKGROUND</h2>
        <div className="title-underline"></div>
      </div>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-period">{item.period}</h3>
              <h4 className="timeline-degree">{item.degree}</h4>
              <p className="timeline-institution">{item.institution}</p>
              {item.option && (
                <p className="timeline-option">Option: {item.option}</p>
              )}
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;