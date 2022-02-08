import React from 'react';
import Project from '../Project';
import Header from './Header';

const CurrentProject = ({ currentProject }) => {
    return (
        <>
            <Header />
            <Project project={currentProject} />
        </>
    );
};

export default CurrentProject;
