import React from "react"
import { Container } from "react-materialize"

import projectList from "../../utils/projectList.json"
import ProjectCard from "../../components/Project Card"
import { Div, H3, } from "../../components/Elements/Elements"
import currentProject from '../../utils/currentProject.json'
import './style.css'
import { v4 } from "uuid"
import CurrentProject from "../CurrentProject"


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
                    className="left-align"
                    dataAos={aos.project}
                >Previous Projects
                    <Div className="divider"></Div>
                </H3>

                {projectList.map((x, idx) => <ProjectCard key={v4()} idx={idx} data={x} aos={aos} />)}
            </Container >
        </>
    )
}

export default ProjectsSection;