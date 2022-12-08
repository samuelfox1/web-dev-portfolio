import React from 'react';

import './style.css';

const Button = ({ children, href }) => {
  return (
    <a href={href} className="btn-custom" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Button;
