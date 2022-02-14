import React, { useContext } from "react";
import { v4 } from "uuid";

import ListOfItems from "../../../components/ListOfItems";
import Section from "../../../components/Section";
import Shield from "../../../components/Shield";

import { AppContext } from "../../../context/AppProvider";
import BlurBox from "../../BlurBox";

import "./style.css";

const SkillsSection = () => {
  const { skills, myTechnologies } = useContext(AppContext);
  return (
    <Section className="skills">
      <BlurBox />
      <ListOfItems title="Technologies">
        {Object.values(myTechnologies).map((technology) => (
          <Shield key={v4()} technology={technology} />
        ))}
      </ListOfItems>

      <ListOfItems title="Skills">
        {skills.map((skill) => (
          <li key={v4()} className="skill">
            {skill}
          </li>
        ))}
      </ListOfItems>
    </Section>
  );
};

export default SkillsSection;
