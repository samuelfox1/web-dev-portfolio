import React from 'react';

import ListOfItems from '../../../components/ListOfItems';
import Section from '../../../components/Section';
import Shield from '../../../components/Shield';
import { useAppContext } from '../../../context/AppProvider';
import BlurBox from '../../BlurBox';
import './style.css';

const SkillsSection = () => {
  const { skills, myTechnologies } = useAppContext();
  return (
    <Section className="skills">
      <BlurBox />
      <ListOfItems title="Technologies">
        {Object.values(myTechnologies).map((technology, idx) => (
          <Shield key={idx} technology={technology} />
        ))}
      </ListOfItems>

      <ListOfItems title="Skills">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill">
            {skill}
          </li>
        ))}
      </ListOfItems>
    </Section>
  );
};

export default SkillsSection;
