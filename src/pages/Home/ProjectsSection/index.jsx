import React from "react"
import { Container } from "react-materialize"

import CurrentProject from "../../../components/CurrentProject"
import OtherProjects from "../../../components/OtherProjects"

import otherProjects from "../../../utils/otherProjects.json"
import currentProject from '../../../utils/currentProject.json'

import './style.css'

const ProjectsSection = () => {

    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
        >
            <CurrentProject currentProject={currentProject} />
            <OtherProjects projects={otherProjects} />
        </Container >
    )
}

export default ProjectsSection;