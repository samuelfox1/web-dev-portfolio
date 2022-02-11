import React from "react";

import CurrentWork from "../../../components/CurrentWork";
import PreviousWork from "../../../components/PreviousWork";
import Section from "../../../components/Section";

import "./style.css";

const ProjectsSection = () => {
  return (
    <Section className="center-align">
      <CurrentWork />
      <PreviousWork />
    </Section>
  );
};

export default ProjectsSection;
