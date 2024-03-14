//Git Testing
import React from 'react';
import { Slider } from 'antd';
import './CourseCard.css'; 
const CourseCard = ({ title, subtitle, description, instructorName, instructorImage }) => {
  return (      
    <div className="course-card">
      <div className="course-content">
        <div className="course-header">
          <h2 className="course-title">{title}</h2>
          <div>     
            <button className="status-button paused">On going</button>
          </div>
        </div>
        <p className="course-subtitle">{subtitle}</p>
        <p className="course-description">{description}</p>
        <Slider defaultValue={30} />
        <div className="instructor-info">
          <img src={instructorImage} alt="Instructor" className="instructor-image" />
          <span className="instructor-name">{instructorName}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;