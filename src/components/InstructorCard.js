import React from 'react';
//dsmcn
const InstructorCard = ({image }) => {
  return (
    <div className="flex items-center">
      <img src={image} alt="Instructor" className="w-10 h-10 rounded-full mr-2" />
    </div>
  );
  };

export default InstructorCard;