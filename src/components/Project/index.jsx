import React, { useContext } from 'react';
import Shield from '../Shield';
import ProjectImages from '../ProjectImages';
import ProjectLinks from '../ProjectLinks';
import { aosOptions } from '../../utils/aosConfig';
import './style.css'
import { v4 } from 'uuid';
import { AppContext } from '../../context/AppProvider';

const { fade } = aosOptions

const Project = ({ project }) => {
    const { myTechnologies } = useContext(AppContext)

    const {
        appName,
        deploymentURL,
        description,
        gitHubURL,
        technologies,
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
                {technologies.map((technology) => <Shield key={v4()} technology={myTechnologies[technology]} />)}
            </div>
        </div>
    )
};

export default Project;
