import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        
        {/* Features Highlight */}
        <div className="features-grid">
          <div className="feature-card primary-bg">
            <FaLaptopCode className="feature-icon" />
            <h3>Corporate IT Courses</h3>
            <p>Industry-oriented curriculum designed by experts.</p>
          </div>
          <div className="feature-card dark-bg">
            <FaChalkboardTeacher className="feature-icon" />
            <h3>Experienced Faculty</h3>
            <p>Learn directly from professionals actively working in the industry.</p>
          </div>
          <div className="feature-card primary-bg">
            <FaUserTie className="feature-icon" />
            <h3>100% JOB Assistance</h3>
            <p>We prepare you for interviews and provide guaranteed placement support.</p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="who-we-are">
          <div className="who-we-are-text">
            <h2 className="section-title" style={{textAlign: 'left'}}>WHO WE ARE?</h2>
            <p>
              <strong>Namra Career Point</strong> is a premier IT training institute in Surat committed to providing Corporate IT training in all types of company-oriented professional IT courses with 100% job assistance.
            </p>
            <p>
              With extensive experience spanning years in the IT Development industry, Namra Career Point has focused on training freshers and students of IT, Computer Science, BCA, MCA, B.Sc IT, M.Sc IT, Degree & Diploma programs. We help students chart their career journey with a brilliant start in the industry.
            </p>
            <a href="#contact" className="btn-primary" style={{marginTop: '20px', display: 'inline-block'}}>Know More</a>
          </div>
          <div className="who-we-are-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="About Namra Career Point" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
