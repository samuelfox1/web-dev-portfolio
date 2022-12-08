import React from 'react';

import './style.css';

const ProjectTitle = ({ children, className }) => {
  return <h4 className={`project-title ${className || ''}`}>{children}</h4>;
};

export default ProjectTitle;
