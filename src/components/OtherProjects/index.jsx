import React from 'react';
import { Container } from 'react-materialize';
import Carousel from '../Carousel';

const OtherProjects = ({ aos, projects }) => {
    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
        >
            <h3
                id="projects"
                className="left-align pt-3"
                data-aos={aos.project}
            >
                Previous Work
            </h3>
            <div className="divider"></div>
            <Carousel aos={aos} projects={projects} />
        </Container >
    );
};

export default OtherProjects;
