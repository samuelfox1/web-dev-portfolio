import React, { useContext } from 'react';
import { Col, Row } from 'react-materialize';
import { v4 } from 'uuid';
import { AppContext } from '../../../context/AppProvider';
import { aosOptions } from '../../../utils/aosConfig';
import './style.css'

const { fade } = aosOptions

const AboutSection = () => {
    const {
        about: {
            introduction,
            bio,
            profilePicture
        }
    } = useContext(AppContext)
    return (
        <Row className="about-container">
            <Col data-aos={fade}
                s={12} m={12} l={12} >
                <img
                    src={profilePicture}
                    className="portrait"
                    alt="my profile"
                />

                < h5 className='left-align mt-0' >{introduction}</h5>

                {bio.map(statement => <p key={v4()} >{statement}</p>)}
            </Col>
        </Row>

    );
};

export default AboutSection;
