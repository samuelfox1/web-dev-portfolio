import React from 'react';

import SectionHeader from '../SectionHeader';
import WorkSection from '../WorkSection';
import Project from './Project';

const PreviousWork = () => {
  return (
    <WorkSection id="previous-work">
      <SectionHeader>Previous Work</SectionHeader>
      <Project />
    </WorkSection>
  );
};

export default PreviousWork;
