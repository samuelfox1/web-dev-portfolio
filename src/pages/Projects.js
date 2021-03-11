import React from "react"
import { Container, Row, Col } from "react-materialize"
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"




export default function Projects() {
    return (
        <Container className="portfolio-container center-align">
            <h2 id="projects">Projects</h2>
            <Row>{projectList.map((x, idx) => <ProjectCard key={idx} idx={idx} data={x} />)}</Row>
        </Container >
    )
}