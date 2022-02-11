import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import SectionHeader from "../SectionHeader";
import Project from "./Project";

const CurrentWork = () => {
  const {
    projects: { current },
  } = useContext(AppContext);
  return (
    <div id="current-work" className="my-3">
      <SectionHeader>Current Work</SectionHeader>
      <Project project={current} />
    </div>
  );
};

export default CurrentWork;
