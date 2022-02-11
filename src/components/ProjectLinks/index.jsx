import React from 'react';
import { FaGithubSquare } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'

import Button from '../Button';

import { aosOptions } from '../../utils/aosConfig';
import './style.css'

const { fade } = aosOptions

const ProjectLinks = ({ deployment, github }) => {

    return (
        <div className="project-links" data-aos={fade} >
            <Button href={github}>
                Github
                <FaGithubSquare className='ml-1' size={30} />
            </Button>
            <Button
                href={deployment}
            >
                Deployment
                <IoIosRocket className='ml-1' size={30} />
            </Button>
            {/* <a className="btn">test</a> */}
        </div>
    );
};

export default ProjectLinks;
