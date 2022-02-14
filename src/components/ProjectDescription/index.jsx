import React from "react";

const ProjectDescription = ({ children, className }) => {
  return <p className={`align center ${className || ""}`}>{children}</p>;
};

export default ProjectDescription;
