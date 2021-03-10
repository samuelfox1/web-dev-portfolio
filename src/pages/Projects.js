import React from "react"
import { Container, Row, Col } from "react-materialize"
import projectList from "../projectList.json"
import ProjectCard from "../components/Project Card"


const projects = projectList


export default function Projects() {
    return (
        <Container className="portfolio-container">
            <Row>{projects.map((x, idx) => <ProjectCard key={idx} data={x} />)}</Row>
        </Container >
    )
}