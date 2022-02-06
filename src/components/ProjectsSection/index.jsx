import React from "react"
import { Container } from "react-materialize"

import projectList from "../../utils/projectList.json"
import ProjectCard from "../Project Card"
import { Div, H3, } from "../Elements/Elements"
import currentProject from '../../utils/currentProject.json'
import CurrentProject from "../CurrentProject"
import './style.css'
import { v4 } from "uuid"


const ProjectsSection = ({ aos }) => {

    return (
        <>
            <Container
                id="projects"
                className="portfolio-container center-align"
            >
                <CurrentProject aos={aos} project={currentProject} />
                <H3
                    id="projects"
                    className="left-align pt-3"
                    dataAos={aos.project}
                >
                    Previous Projects
                </H3>
                <Div className="divider"></Div>

                {projectList.map((x, idx) => <ProjectCard key={v4()} idx={idx} data={x} aos={aos} />)}
            </Container >
        </>
    )
}

export default ProjectsSection;