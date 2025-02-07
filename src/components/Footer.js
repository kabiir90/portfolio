import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion'; // Added for enhanced animations
import logo from '../assets/img/mylogooo.png';
import fcb from '../assets/img/fcb.png';
import insta from '../assets/img/insta.png';
import linkdin from '../assets/img/linkdin.png';
import watsp from '../assets/img/watsp.png';

export const Footer = () => {
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-enter');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) observer.observe(logoRef.current);
    if (linksRef.current) observer.observe(linksRef.current);

    return () => {
      if (logoRef.current) observer.unobserve(logoRef.current);
      if (linksRef.current) observer.unobserve(linksRef.current);
    };
  }, []);

  const socialLinks = [
    { href: "https://www.instagram.com/kabir_mo1/", icon: insta, alt: "Instagram" },
    { href: "https://www.linkedin.com", icon: linkdin, alt: "LinkedIn" },
    { href: "https://wa.me/212 655-639386", icon: watsp, alt: "WhatsApp" },
    { href: "https://www.facebook.com", icon: fcb, alt: "Facebook" }
  ];

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side: Logo with enhanced animation */}
          <Col size={12} md={4} className="text-start">
            <motion.div
              ref={logoRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="logo-container"
            >
              <img
                src={logo}
                alt="Kabir Portfolio 2025"
                className="footer-logo"
                style={{ 
                  width: '150px', 
                  height: 'auto', 
                  transition: 'transform 0.5s ease',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <br/>
              <br/>
              <br/>
            </motion.div>
            <div className="contact-info mt-3">
              <p>📞 Phone: +212 655-639386</p>
              <p>✉️ Email: oulkabirmohamed90@gmail.com</p>
            </div>
          </Col>

          {/* Center: Links with staggered animation */}
          <Col size={12} md={4} className="text-center">
            <motion.div
              ref={linksRef}
              initial="hidden"
              animate="visible"
              className="footer-links"
            >
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="d-block text-decoration-none text-white my-3"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: index * 0.2,
                        duration: 0.5 
                      }
                    }
                  }}
                  whileHover={{ scale: 1.1, color: '#007bff' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </Col>

          {/* Right side: Social icons with hover effects */}
          <Col size={12} md={4} className="text-end">
            <div className="social-icon d-flex justify-content-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="mx-2"
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    style={{ 
                      width: '32px', 
                      height: 'auto', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Copyright with glowing effect */}
        <Row>
          <Col className="text-center mt-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-muted"
              style={{
                textShadow: '0 0 10px rgba(0,123,255,0.5)',
                letterSpacing: '1px'
              }}
            >
              © 2025 Kabir Portfolio. All Rights Reserved
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};