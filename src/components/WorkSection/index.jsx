import React from 'react';
import { Col } from 'react-materialize';
import BlurBox from '../BlurBox';
import Section from '../Section';

const WorkSection = ({ children, id }) => {
  return (
    <Section id={id} className="px-1">
      <BlurBox />
      <Col className="mb-1"></Col>
      {children}
    </Section>
  );
};

export default WorkSection;
