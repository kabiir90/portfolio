import React, { useEffect, useRef } from 'react';
import './scss.scss';
import backgroundImage from '../assets/img/footer-bg.png';
import { 
  FaAngular, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaWindows, 
  FaJava, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaMobileAlt, 
  FaNodeJs
} from 'react-icons/fa';

const Outils = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technologies = [
    { name: "Angular", icon: <FaAngular /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "SCSS", icon: <FaSass /> },
    { name: ".NET", icon: <FaWindows /> },
    { name: "Java", icon: <FaJava /> },
    { name: "J2EE", icon: <FaJava /> },
    { name: "C#", icon: <FaCode /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "SQL Server", icon: <FaServer /> },
    { name: "TypeScript", icon: <FaCode /> },
    { name: "Ionic", icon: <FaMobileAlt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Oracle", icon: <FaDatabase /> }
  ];

  return (
    <section
      id="outils"
      className="outils"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="outils__container">
        <h2 className="outils__heading">MASTERED TECHNOLOGIES</h2>
        <div className="outils__underline"></div>
        
        <div className="outils__cards">
          {technologies.map((tech, index) => (
            <div className="outils__card" key={index}>
              <div className="outils__card-icon">
                {tech.icon}
              </div>
              <h3 className="outils__card-title">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outils;