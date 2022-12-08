import React from 'react';
import { Col } from 'react-materialize';

import Section from '../../../components/Section';
import { useAppContext } from '../../../context/AppProvider';
import BlurBox from '../../BlurBox';
import './style.css';

const AboutSection = () => {
    const {
        about: { introduction, bio, profilePicture },
    } = useAppContext();
    return (
        <Section className="about">
            <BlurBox />
            <Col s={12} m={12} l={12}>
                <img
                    src={profilePicture}
                    className="portrait mt-1"
                    alt="my profile"
                />
                <h5 className="left-align mt-1">{introduction}</h5>
                {bio.map((statement, idx) => (
                    <p key={idx}>{statement}</p>
                ))}
            </Col>
        </Section>
    );
};

export default AboutSection;
