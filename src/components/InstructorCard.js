import React from 'react';

const InstructorCard = ({ name, image }) => {
  return (
    <div className="flex items-center">
      <img src={image} alt="Instructor" className="w-10 h-10 rounded-full mr-2" />
      <div>
        <a href="#" className="text-gray-700">{name}</a>
        <span className="ml-2 text-gray-500">(Continue)</span>
      </div>
    </div>
  );
};

export default InstructorCard;