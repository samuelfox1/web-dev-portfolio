import React from 'react';
import { Col, Row } from 'react-materialize';

const AboutSection = ({ aos }) => {
    return (
        <Row className="about-container center-align">
            <Col s={12} m={12} l={12} >

                <br />
                <img
                    src="https://i.imgur.com/zEvf4P4m.jpg"
                    className="rounded portrait z-depth-5"
                    alt="user profile" />
                <h1
                    data-aos={aos.hello}
                > Hello !
                </h1>
                < h5 >My name is Sam.</h5>
                <p>Graduate of the University of Washington's
                    <a
                        href="https://bootcamp.uw.edu/coding"
                        className="portfolio-link hover"
                        target="_blank"
                        rel='noreferrer'
                    >Fullstack</a>
                    web development Coding Bootcamp.
                </p>
            </Col>
        </Row>

    );
};

export default AboutSection;
