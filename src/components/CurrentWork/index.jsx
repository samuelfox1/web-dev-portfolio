import React from "react";
import SectionHeader from "../SectionHeader";
import WorkSection from "../WorkSection";
import Project from "./Project";

const CurrentWork = () => {
  return (
    <WorkSection id="current-work">
      <SectionHeader>Current Work</SectionHeader>
      <Project />
    </WorkSection>
  );
};

export default CurrentWork;
