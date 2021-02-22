import React from "react"
import projectList from "../projectList.json"
import ProjectCard from "../components/Project Card"


const projects = projectList


export default function Projects() {
    return (
        <main className="portfolio-container">
            <div className="container">
                <div className="row">
                    {projects.map((x, idx) =>
                        <ProjectCard key={idx} data={x} />)}
                </div>
            </div>
        </main >
    )
}