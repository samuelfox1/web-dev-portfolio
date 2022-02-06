import React from 'react';
import Shield from '../Shield';
import ProjectImages from '../ProjectImages';
import ProjectLinks from '../ProjectLinks';
import './style.css'

const Project = ({ aos, project }) => {

    const {
        appName,
        deploymentURL,
        description,
        gitHubURL,
        shields,
        screenshots,
    } = project

    return (
        <>
            <div data-aos="fade">
                <h4 className="pt-1">
                    Welcome to {appName}
                </h4>
                <ProjectImages screenshots={screenshots} />
                <div data-aos="fade">
                    <p >{description}</p>
                    <ProjectLinks deploymentURL={deploymentURL} gitHubURL={gitHubURL} />
                    <p>A project built utilizing:</p>
                    {shields.map((x, idx) => <Shield key={idx} data={x} />)}
                </div>
            </div>
        </>
    )
};

export default Project;
