import React from "react"
import { Container } from "react-materialize"
import "aos/dist/aos.css"
import AboutSection from "./AboutSection"
import ProjectsSection from "./ProjectsSection"
import SkillsSection from "./SkillsSection"


export default function Home() {
    return (
        <Container id="hello">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </Container >
    )
}