import React from 'react';

const ProjectLinks = ({ deployment, github }) => {
    return (
        <div className="carousel-project-links">
            <h3>
                <a href={github} target="_blank" rel="noreferrer"><i class="fab fa-github" /></a>
            </h3>
            <h3>
                <a href={deployment} target="_blank" rel="noreferrer"><i class="fas fa-mobile-alt"></i></a>
            </h3>
        </div>
    );
};

export default ProjectLinks;
