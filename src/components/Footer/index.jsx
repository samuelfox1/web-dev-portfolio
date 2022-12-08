import React, { useEffect } from 'react';
import { Divider } from 'react-materialize';

import BlurBox from '../BlurBox';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import ContactUl from './ContactUl';
import './style.css';

const Footer = () => {
  return (
    <footer id="contact">
      <Section>
        <BlurBox />
        <SectionHeader className="ml-1">Contact</SectionHeader>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div id="badge" className="hover mr-3">
            <a
              target="_blank"
              href="https://www.credly.com/badges/be423242-abda-493c-9691-80ffed673c46/embedded"
            >
              <img
                width="230"
                height="230"
                alt=""
                src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
              />
            </a>
          </div>
          <ContactUl />
        </div>
        <Divider />
        <h6 className="center-align">2023</h6>
      </Section>
    </footer>
  );
};

export default Footer;
