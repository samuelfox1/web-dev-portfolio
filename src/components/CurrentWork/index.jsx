import React, { useContext } from "react";
import { Col } from "react-materialize";
import { AppContext } from "../../context/AppProvider";
import BlurBox from "../BlurBox";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Project from "./Project";

const CurrentWork = () => {
  const {
    projects: { current },
  } = useContext(AppContext);
  return (
    <Section id="current-work">
      <BlurBox />
      <Col className="mb-1">
        <SectionHeader>Current Work</SectionHeader>
        <Project project={current} />
      </Col>
    </Section>
  );
};

export default CurrentWork;
