import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import Carousel, { getCarouselLocation } from "../../Carousel";
import ProjectDescription from "../../ProjectDescription";
import ProjectLinks from "../../ProjectLinks";
import ProjectTitle from "../../ProjectTitle";

import "./style.css";

const Project = () => {
  const {
    projects: { other },
  } = useContext(AppContext);
  const id = "previous-project";
  const [index, setIndex] = useState(getCarouselLocation(id) || 0);
  const [{ description, title, github, deployment }, setProject] = useState(
    other[index]
  );
  useEffect(() => {
    setProject(other[index]);
  }, [other, index]);
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <Carousel id={id} index={index} setIndex={setIndex} images={other} />
      <ProjectLinks className="my-1" github={github} deployment={deployment} />
      <ProjectDescription>{description}</ProjectDescription>
    </>
  );
};

export default Project;
