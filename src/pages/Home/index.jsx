import React from "react"
import { Container } from "react-materialize"
import "aos/dist/aos.css"
import AboutSection from "./About"
import ProjectsSection from "../../components/ProjectsSection"
import Skills from "./Skills"


export default function Home({ aos }) {
    return (
        <Container id="hello">
            <AboutSection aos={aos} />
            <Skills />
            <ProjectsSection aos={aos} />
        </Container >
    )
}