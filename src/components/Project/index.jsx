import React from 'react';
import Shield from '../Shield';
import ProjectImages from '../ProjectImages';
import ProjectLinks from '../ProjectLinks';
import { aosOptions } from '../../utils/aosConfig';
import './style.css'
import { v4 } from 'uuid';

const { fade } = aosOptions

const Project = ({ project }) => {

    const {
        appName,
        deploymentURL,
        description,
        gitHubURL,
        shields,
        images,
    } = project

    return (
        <div data-aos={fade}>
            <h5 className="pt-1">
                Welcome to {appName}
            </h5>
            <ProjectImages images={images} />
            <div data-aos={fade}>
                <ProjectLinks deployment={deploymentURL} github={gitHubURL} />
                <p >{description}</p>
                <p>A project built utilizing:</p>
                {shields.map((technology) => <Shield key={v4()} technology={technology} />)}
            </div>
        </div>
    )
};

export default Project;
