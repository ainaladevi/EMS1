import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  outline = false,
  loading = false,
  disabled = false,
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseClass = 'btn-ems';
  const variantClass = outline
    ? `btn-ems-outline-${variant}`
    : `btn-ems-${variant}`;

  let sizeClass = '';
  switch (size) {
    case 'sm': sizeClass = 'px-2 py-1 text-sm'; break;
    case 'lg': sizeClass = 'px-4 py-2 text-lg'; break;
    default: sizeClass = 'px-3 py-1.5'; break;
  }

  const spinner = loading ? (
    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  ) : null;

  const finalVariantClass = outline ? 'btn-ems-outline' : `btn-ems-${variant}`;

  return (
    <button
      className={`${baseClass} ${finalVariantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {spinner}
      {!loading && Icon && <Icon className="me-2" size={size === 'sm' ? 14 : 18} />}
      {children}
    </button>
  );
};

export default Button;
