import React, { useContext } from 'react';
import { v4 } from 'uuid';
import Section from '../../../components/Section';
import { AppContext } from '../../../context/AppProvider';
import './style.css'

const AboutSection = () => {
    const {
        about: {
            introduction,
            bio,
            profilePicture
        }
    } = useContext(AppContext)
    return (
        <Section className="about-container mt-3">
            <img
                src={profilePicture}
                className="portrait"
                alt="my profile"
            />
            < h5 className='left-align mt-0' >{introduction}</h5>
            {bio.map(statement => <p key={v4()} >{statement}</p>)}
        </Section>
    );
};

export default AboutSection;
