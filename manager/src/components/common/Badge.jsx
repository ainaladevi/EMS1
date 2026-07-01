import React from 'react';

const Badge = ({ children, variant = 'primary', className = '', rounded = true }) => {
  const roundedClass = rounded ? 'rounded-pill' : 'rounded-1';
  return (
    <span className={`badge bg-${variant} ${roundedClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
