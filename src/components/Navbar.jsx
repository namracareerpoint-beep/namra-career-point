import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <h2>NAMRA <span className="logo-highlight">Career Point</span></h2>
        </div>
        <nav className={isOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#courses" onClick={() => setIsOpen(false)}>Courses</a>
          <a href="#placement" onClick={() => setIsOpen(false)}>Placement</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
          <a href="#" className="btn-primary brochure-btn" onClick={() => setIsOpen(false)}>Download Brochure</a>
        </nav>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
