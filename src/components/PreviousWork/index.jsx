import React, { useContext } from "react";
import { Col } from "react-materialize";
import { AppContext } from "../../context/AppProvider";
import BlurBox from "../BlurBox";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Carousel from "./Carousel";

const PreviousWork = () => {
  const {
    projects: { other },
  } = useContext(AppContext);
  return (
    <Section id="previous-work">
      <BlurBox />
      <div className="p-1">
        <SectionHeader>Previous Work</SectionHeader>
        <Carousel projects={other} />
      </div>
    </Section>
  );
};

export default PreviousWork;
