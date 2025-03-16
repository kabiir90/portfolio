import React from 'react';
import './parc.scss';

const Parcours = () => {
  const educationData = [
    {
      period: '2024 - Present',
      degree: 'Licence Professionnelle en Génie Logiciel',
      institution: 'ESTEM',
      description: 'Formation axée sur le développement logiciel et les méthodologies de conception.'
    },
    {
      period: '2022 - 2024',
      degree: 'Diplôme Technicien Spécialisé en Développement Multimedia',
      institution: 'Institut Spécialisé',
      description: 'Acquisition de compétences en développement web, design d\'interfaces et création de contenu multimédia.'
    },
    {
      period: '2021 - 2022',
      degree: 'Baccalauréat',
      institution: 'Lycée',
      option: 'Physique Chimie',
      description: 'Formation scientifique avec spécialisation en physique et chimie.'
    }
  ];

  return (
    <div className="education-timeline" >
      <div className="education-title-container">
        <h2 className="education-title">PARCOURS SCOLAIRE</h2>
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

export default Parcours;