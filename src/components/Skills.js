import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import images (ensure these are in your project's assets)
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  // Responsive configuration for the carousel
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Skill data 
  const skills = [
    { 
      image: meter1, 
      title: 'Full Stack Development', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      titleColor: 'text-primary', 
      descColor: 'text-gray-300' 
    },
    { 
      image: meter2, 
      title: 'UI/UX Design', 
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      titleColor: 'text-secondary', 
      descColor: 'text-gray-200' 
    },
    { 
      image: meter3, 
      title: 'Brand Strategy', 
      description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip.', 
      titleColor: 'text-success', 
      descColor: 'text-gray-100' 
    },
    { 
      image: meter1, 
      title: 'Cloud Solutions', 
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit.', 
      titleColor: 'text-warning', 
      descColor: 'text-white' 
    }
  ];

  // Custom arrows for carousel
  const CustomLeftArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="custom-left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      &#8249;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="custom-right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      &#8250;
    </button>
  );

  return (
    <section 
      className="skills py-5 relative" 
      style={{ 
        background: 'linear-gradient(to right, #FFA490,#FF4D00)', 
        minHeight: '80vh' 
      }}
    >
      <div className="container relative z-10">
        <div className="row">
          <div className="col-12">
            <div className="skills-box text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">Professional Skills</h2>
              <p className="lead text-gray-400 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.
              </p>
              
              <Carousel 
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                itemClass="px-3"
              >
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item text-center"
                  >
                    <img 
                      src={skill.image} 
                      alt={skill.title} 
                      className="skill-icon mb-3 mx-auto" 
                      style={{ maxWidth: '100px', height: 'auto' }}
                    />
                    <h5 className={`skill-title text-xl font-semibold ${skill.titleColor}`}>
                      {skill.title}
                    </h5>
                    <p className={`skill-description ${skill.descColor} mt-2`}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};