import React from 'react';
import { Divider } from 'react-materialize';

import BlurBox from '../BlurBox';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import ContactUl from './ContactUl';

import './style.css';

export default function index() {
  return (
    <footer id="contact">
      <Section>
        <BlurBox />
        <SectionHeader className="ml-1">Contact</SectionHeader>
        <ContactUl />
        <Divider />
        <h6 className="center-align">2022</h6>
      </Section>
    </footer>
  );
}
