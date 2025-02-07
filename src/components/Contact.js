import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contactBg from "../assets/img/contact-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [resultMessage, setResultMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setResultMessage("Sending message...");
    setMessageType('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formDetails,
          access_key: "829d1fe2-d0b3-445e-9171-96d58637e07f",
          subject: "New Contact Form Submission"
        })
      });

      const responseData = await response.json();

      setButtonText("Send Message");

      if (response.status === 200) {
        setResultMessage(responseData.message);
        setMessageType('success');
        setFormDetails(formInitialDetails);

        // Clear message after 3 seconds
        setTimeout(() => {
          setResultMessage('');
        }, 3000);
      } else {
        setResultMessage(responseData.message || "Something went wrong!");
        setMessageType('error');
      }
    } catch (error) {
      console.error(error);
      setButtonText("Send Message");
      setResultMessage("Something went wrong! Please try again.");
      setMessageType('error');
    }
  };

  return (
    <section 
      className="contact py-5" 
      id="connect" 
      style={{ 
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh' 
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <img 
                  className={`mx-auto ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`} 
                  src={contactImg} 
                  alt="Contact Us" 
                  style={{ maxWidth: '80%', height: 'auto' }}
                />
              )}
            </TrackVisibility>  
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div 
                  className={`text-center ${isVisible ? "animate__animated animate__fadeIn" : ""}`}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                      <input 
                        type="text" 
                        name="name"
                        value={formDetails.name} 
                        placeholder="Full Name" 
                        onChange={(e) => onFormUpdate('name', e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        type="email" 
                        name="email"
                        value={formDetails.email} 
                        placeholder="Email Address" 
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        className="w-full p-3 bg-gray-800  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        type="tel" 
                        name="phone"
                        value={formDetails.phone} 
                        placeholder="Phone Number" 
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                        className="w-full p-3 bg-gray-800  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <textarea 
                        name="message"
                        value={formDetails.message} 
                        placeholder="Your Message" 
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <button 
      type="submit"

      className={`
        relative z-0 px-10 py-4 text-white 
        rounded-xl overflow-hidden group
        transition-all duration-300 ease-in-out
        
        # Base button style
        bg-gray-800 
        
        # Hover and active states
        hover:text-black
        active:text-black active:font-bold
        
        # Glow effect pseudo-elements
        before:absolute before:z-[-1] before:-inset-1
        before:bg-gradient-to-r 
        before:from-red-500 before:via-yellow-500 before:to-purple-500
        before:animate-[glowing_20s_linear_infinite]
        before:opacity-0 hover:before:opacity-100
        before:blur-lg
        before:rounded-xl
        
        # Background pseudo-element
        after:absolute after:z-[-2] after:inset-0
        after:bg-gray-700 after:rounded-lg
        
        # Active state background
        active:after:bg-transparent
      `}
    >
      {buttonText}
    </button>
                    {resultMessage && (
                      <div 
                        className={`
                          mt-4 
                          p-3 
                          rounded-lg 
                          ${messageType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}
                        `}
                      >
                        {resultMessage}
                      </div>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};