import React, { useContext } from "react";
import { v4 } from "uuid";

import { AppContext } from "../../context/AppProvider";
import Shield from "../Shield";

import "./style.css";

const ProjectTechnologies = ({ className, technologies }) => {
  const { myTechnologies } = useContext(AppContext);

  return (
    <div className={`project-technologies ${className || ""}`}>
      {technologies.map((technology) => (
        <Shield key={v4()} technology={myTechnologies[technology]} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
