import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import Project from './Project';
import Header from './Header';

const CurrentProject = () => {
    const { projects: { current } } = useContext(AppContext)
    return (
        <>
            <Header />
            <Project project={current} />
        </>
    );
};

export default CurrentProject;
