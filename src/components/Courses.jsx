import React from 'react';
import { FaPython, FaAngular, FaReact, FaNodeJs, FaDesktop, FaCode, FaWordpress, FaMobileAlt } from 'react-icons/fa';
import './Courses.css';

const courseData = [
  { id: 1, title: 'Machine Learning with Python', icon: <FaPython />, color: '#306998' },
  { id: 2, title: 'Angular Development', icon: <FaAngular />, color: '#dd1b16' },
  { id: 3, title: 'React JS', icon: <FaReact />, color: '#61dafb' },
  { id: 4, title: 'Node JS', icon: <FaNodeJs />, color: '#68a063' },
  { id: 5, title: 'Flutter Development', icon: <FaMobileAlt />, color: '#02569B' },
  { id: 6, title: 'React Native', icon: <FaReact />, color: '#61dafb' },
  { id: 7, title: 'UI / UX Designing', icon: <FaDesktop />, color: '#ff5722' },
  { id: 8, title: 'Web Designing', icon: <FaCode />, color: '#4caf50' },
  { id: 9, title: 'WordPress Development', icon: <FaWordpress />, color: '#21759b' },
];

const Courses = () => {
  return (
    <section id="courses" className="courses-section section-padding">
      <div className="container">
        <h2 className="section-title">Top Courses</h2>
        <p className="section-subtitle">Courses are designed as per the latest skills required in company.</p>
        
        <div className="courses-grid">
          {courseData.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-icon" style={{ color: course.color }}>
                {course.icon}
              </div>
              <div className="course-info">
                <h3>{course.title}</h3>
                <a href="#contact" className="course-link">Read More <span>&rarr;</span></a>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#contact" className="btn-primary">View All Courses</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
