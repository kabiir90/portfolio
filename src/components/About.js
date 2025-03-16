// About.jsx
import React, { useEffect, useRef } from 'react';
import './scss.scss';
import myPhoto from '../assets/img/kabirfoto.jpg'; // Update this path to your actual photo
import backgroundImage from '../assets/img/aboutback.png'; // Add your background image path here

const About = () => {
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
  
  return (
    <section 
      id="about" 
      className="about" 
      ref={sectionRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,

      }}
    >
      <div className="about__container">
        <h2 className="about__heading">About Me</h2>
        
        <div className="about__content">
          <div className="about__photo-container">
            <div className="about__photo-wrapper">
              <div className="about__photo-border"></div>
              <img src={myPhoto} alt="My Profile" className="about__photo" />
            </div>
            <div className="about__photo-details">
              <h3 className="about__name">OULKABIR MOHAMED</h3>
              <p className="about__title">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="about__info">
            <p className="about__description">
              I am a passionate developer with expertise in creating modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I bring creative solutions to complex problems.
            </p>
            <p className="about__description">
              My journey in software development began 5 years ago, and since then I've worked on various projects ranging from e-commerce platforms to real-time analytics dashboards. I'm constantly learning new technologies and frameworks to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>



  );
};

export default About;