import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-about">
            <h2>NAMRA <span style={{color: 'var(--primary)'}}>Career Point</span></h2>
            <p>Namra Career Point is a premium IT training institute in Surat providing Corporate IT training in professional IT courses with 100% job assistance.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#placement">Placement</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><FaPhoneAlt className="f-icon" /> <a href="tel:+919157929797">+91 9157 92 9797</a></li>
              <li><FaEnvelope className="f-icon" /> <a href="mailto:info@namracareerpoint.com">info@namracareerpoint.com</a></li>
              <li><FaMapMarkerAlt className="f-icon" /> Surat, Gujarat, India</li>
            </ul>
          </div>

          <div className="footer-hours">
            <h3>Working Hours</h3>
            <ul>
              <li>Monday - Saturday: 9 AM to 7 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Namra Career Point. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
