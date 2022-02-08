import React from 'react';
import { aosOptions } from '../../utils/aosConfig';
const { fade } = aosOptions

const ProjectLinks = ({ deployment, github }) => {
    return (
        <div className="carousel-project-links" data-aos={fade} >
            <h3>
                <a href={github} target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
            </h3>
            <h3>
                <a href={deployment} target="_blank" rel="noreferrer"><i className="fas fa-mobile-alt"></i></a>
            </h3>
        </div>
    );
};

export default ProjectLinks;
