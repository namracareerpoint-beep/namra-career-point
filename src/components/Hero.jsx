import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Namra Career Point</h1>
          <h2>Best IT Training Institute in Surat</h2>
          <p>Providing corporate training in trendy IT courses with 100% job assistance.</p>
          <div className="hero-buttons">
            <a href="#courses" className="btn-primary">View Courses</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
      {/* Wave shape divider at the bottom */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.35,191.07,106.5Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
