import React from "react"
import { Container } from "react-materialize"

import CurrentProject from "../../../components/CurrentProject"
import OtherProjects from "../../../components/OtherProjects"

import './style.css'

const ProjectsSection = () => {

    return (
        <Container
            id="projects"
            className="portfolio-container center-align"
        >
            <CurrentProject />
            <OtherProjects />
        </Container >
    )
}

export default ProjectsSection;