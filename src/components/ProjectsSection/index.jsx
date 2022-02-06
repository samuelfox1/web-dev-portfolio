import React from "react"
import { Container } from "react-materialize"

import CurrentProject from "../CurrentProject"
import OtherProjects from "../OtherProjects"

import projectList from "../../utils/projectList.json"
import currentProject from '../../utils/currentProject.json'

import './style.css'

const ProjectsSection = ({ aos }) => {

    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
        >
            <CurrentProject aos={aos} project={currentProject} />
            <OtherProjects aos={aos} projects={projectList} />
        </Container >
    )
}

export default ProjectsSection;