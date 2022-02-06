import React from 'react';
import Project from '../Project';
import Header from './Header';

const CurrentProject = ({ aos, project }) => {
    return (
        <>
            <Header aos={aos} />
            <Project aos={aos} project={project} />
        </>
    );
};

export default CurrentProject;
