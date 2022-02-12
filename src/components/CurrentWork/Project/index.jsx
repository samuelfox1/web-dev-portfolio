import React, { useContext } from "react";
import { v4 } from "uuid";

import Shield from "../../Shield";
import ProjectImages from "../ProjectImages";
import ProjectLinks from "../../ProjectLinks";
import { AppContext } from "../../../context/AppProvider";

import "./style.css";

const Project = ({ project }) => {
  const { myTechnologies } = useContext(AppContext);

  const {
    appName,
    deploymentURL,
    description,
    gitHubURL,
    technologies,
    images,
  } = project;

  return (
    <>
      <h5 className="left-align pt-1">Welcome to {appName}</h5>
      <ProjectImages images={images} />
      <ProjectLinks deployment={deploymentURL} github={gitHubURL} />
      <p>{description}</p>
      <p className="left-align py-0">Tools & Tech:</p>
      {technologies.map((technology) => (
        <Shield key={v4()} technology={myTechnologies[technology]} />
      ))}
    </>
  );
};

export default Project;
