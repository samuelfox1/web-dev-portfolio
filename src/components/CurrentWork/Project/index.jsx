import React, { useState } from "react";

import { useAppContext } from "../../../context/AppProvider";
import Carousel, { getCarouselLocation } from "../../Carousel";
import ProjectDescription from "../../ProjectDescription";
import ProjectLinks from "../../ProjectLinks";
import ProjectTechnologies from "../../ProjectTechnologies";
import ProjectTitle from "../../ProjectTitle";

import "./style.css";

const Project = () => {
  const {
    projects: {
      current: {
        appName,
        deploymentURL,
        description,
        gitHubURL,
        technologies,
        images,
      },
    },
  } = useAppContext();
  const id = "current-project";
  const [index, setIndex] = useState(getCarouselLocation(id));

  return (
    <>
      <ProjectTitle>{appName}</ProjectTitle>
      <ProjectDescription className="mb-0">{description}</ProjectDescription>
      <Carousel id={id} index={index} setIndex={setIndex} images={images} />
      <ProjectLinks
        className="my-1"
        deployment={deploymentURL}
        github={gitHubURL}
      />
      <ProjectTechnologies className="mb-1" technologies={technologies} />
    </>
  );
};

export default Project;
