import React, { useState } from 'react';
import CourseCard from './components/CourseCard';
import './components/CourseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isHorizontal, setIsHorizontal] = useState(true);

  const toggleLayout = () => {
    setIsHorizontal(!isHorizontal);
  };

  return (
    <div className="app-container">
  <header className="header">
    <div className="logo">
      <h1 className="text-yellow-50000">My Courses for "All Courses"</h1>
    </div>

    <div className="toggle-layout" onClick={toggleLayout}>
      {isHorizontal ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTh} />} 
    </div>
  </header>
    <div className={`course-container ${isHorizontal ? 'horizontal' : 'vertical'}`}>
        <CourseCard
          title="Node.js"
          subtitle="Backend Development"
          description="Master the backend development using Node.js and Express framework."
          instructorName="Jane Doe"
          instructorImage="https://randomuser.me/api/portraits/women/2.jpg"
        />
        <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
        <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
         <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
             <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
             <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
             <CourseCard
          title="Angular JS"
          subtitle="Frontend Development"
          description="Learn the fundamentals of AngularJS for building dynamic web applications."
          instructorName="Alice Smith"
          instructorImage="https://randomuser.me/api/portraits/women/3.jpg"
        />
        
      </div>
    </div>
  );
}

export default App;