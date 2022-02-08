import React from 'react';
import { Container } from 'react-materialize';
import { aosOptions } from '../../utils/aosConfig';
import Carousel from '../Carousel';
const { fade } = aosOptions

const OtherProjects = ({ projects }) => {
    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
        >
            <h3
                id="projects"
                className="left-align pt-3"
                data-aos={fade}
            >
                Previous Work
            </h3>
            <div className="divider"></div>
            <Carousel projects={projects} />
        </Container >
    );
};

export default OtherProjects;
