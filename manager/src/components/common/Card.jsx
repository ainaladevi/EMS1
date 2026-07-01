import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  return (
    <div
      className={`ems-card ${hoverable ? 'hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
