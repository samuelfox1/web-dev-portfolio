import React, { useContext } from 'react';
import { Container } from 'react-materialize';
import { AppContext } from '../../context/AppProvider';
import { aosOptions } from '../../utils/aosConfig';
import Carousel from './Carousel';
const { fade } = aosOptions

const OtherProjects = () => {
    const { projects: { other } } = useContext(AppContext)
    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
            data-aos={fade}
        >
            <h3
                id="projects"
                className="left-align pt-3"
            >
                Previous Work
            </h3>
            <div className="divider"></div>
            <Carousel projects={other} />
        </Container >
    );
};

export default OtherProjects;
