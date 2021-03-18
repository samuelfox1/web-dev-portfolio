import React from "react"
import { Container } from "react-materialize"
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"




export default function Projects({ aos }) {
    return (
        <>
            <Container className="portfolio-container center-align">
                <h2
                    id="projects"
                    className="left-align"
                    data-aos={aos.project}
                >
                    Projects
                 </h2>

                {projectList.map((x, idx) => <ProjectCard key={idx} idx={idx} data={x} aos={aos} />)}
            </Container >
        </>
    )
}