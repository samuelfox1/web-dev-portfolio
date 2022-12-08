import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/AppProvider';
import Carousel, { getCarouselLocation } from '../../Carousel';
import ProjectDescription from '../../ProjectDescription';
import ProjectLinks from '../../ProjectLinks';
import ProjectTechnologies from '../../ProjectTechnologies';
import ProjectTitle from '../../ProjectTitle';

import './style.css';

const Project = () => {
  const {
    projects: { other },
  } = useAppContext();
  const id = 'previous-project';
  const [index, setIndex] = useState(getCarouselLocation(id) || 0);
  const [{ deployment, description, github, technologies, title }, setProject] =
    useState(other[index]);

  useEffect(() => {
    setProject(other[index]);
  }, [other, index]);
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <Carousel id={id} index={index} setIndex={setIndex} images={other} />
      <ProjectLinks className="my-1" github={github} deployment={deployment} />
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectTechnologies className="mb-1" technologies={technologies} />
    </>
  );
};

export default Project;
