import React from "react"
import { Container } from "react-materialize"
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"
import { H2 } from "../components/Elements/Elements"




export default function Projects({ aos }) {
    return (
        <>
            <Container className="portfolio-container center-align">
                <H2
                    id="projects"
                    className="left-align"
                    dataAos={aos.project}
                    text='Projects'
                />

                {projectList.map((x, idx) => <ProjectCard key={idx} idx={idx} data={x} aos={aos} />)}
            </Container >
        </>
    )
}