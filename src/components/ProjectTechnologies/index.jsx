import React from 'react';

import { useAppContext } from '../../context/AppProvider';
import Shield from '../Shield';
import './style.css';

const ProjectTechnologies = ({ className, technologies }) => {
  const { myTechnologies } = useAppContext();

  return (
    <div className={`project-technologies ${className || ''}`}>
      {technologies.map((technology, idx) => (
        <Shield key={idx} technology={myTechnologies[technology]} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
