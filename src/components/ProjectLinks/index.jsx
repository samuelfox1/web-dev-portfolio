import React from 'react';

const ProjectLinks = ({ deploymentURL, gitHubURL }) => {
    return (
        <ul >
            <li><a href={deploymentURL} target='_blank' rel="noreferrer" >{deploymentURL.split('://')[1]}</a></li>
            <li><a href={gitHubURL} target='_blank' rel="noreferrer" >github</a></li>
        </ul>
    );
};

export default ProjectLinks;
