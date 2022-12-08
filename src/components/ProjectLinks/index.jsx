import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

import Button from '../Button';
import './style.css';

const ProjectLinks = ({ className, deployment, github }) => {
    return (
        <div className={`project-links ${className || ''}`}>
            <Button href={github}>
                Github
                <FaGithubSquare className="ml-1" size={30} />
            </Button>
            <Button href={deployment}>
                Deployment
                <IoIosRocket className="ml-1" size={30} />
            </Button>
        </div>
    );
};

export default ProjectLinks;
