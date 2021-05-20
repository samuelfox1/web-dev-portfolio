import React from "react"
import { Container } from "react-materialize"
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"
import { A, Div, H3, Image, Li, P, Ul } from "../components/Elements/Elements"
import Shield from "../components/Shield"




export default function Projects({ aos }) {

    const currentProjectTechnologies = [{
        "src": "https://img.shields.io/badge/-Javascript-yellow?logo=javascript",
        "alt": "JavaScript"
    },
    {
        "src": "https://img.shields.io/badge/-ReactJS-000000?logo=React&logoColor=61DAFB",
        "alt": "ReactJS"
    },
    {
        "src": "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white",
        "alt": "Node.js"
    },
    {
        "src": "https://img.shields.io/badge/-Express-000000?logo=JavaScript&logoColor=yellow",
        "alt": "ExpressJS"
    },
    {
        "src": "https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white",
        "alt": "MongoDB"
    },
    {
        "src": "https://img.shields.io/badge/-Postman-FF6C37?logo=Postman&logoColor=white",
        "alt": "Postman"
    },
    {
        "src": "https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white",
        "alt": "Git"
    },
    {
        "src": "https://img.shields.io/badge/-npm-CB3837?logo=NPM",
        "alt": "npm"
    },
    {
        "src": "https://img.shields.io/badge/-GitHub-181717?logo=GitHub&logoColor=white",
        "alt": "GitHub"
    }, {
        "src": "https://img.shields.io/badge/-HTML5-blue?logo=html5",
        "alt": "HTML5"
    },
    {
        "src": "https://img.shields.io/badge/-CSS3-red?logo=css3",
        "alt": "CSS3"
    }]
    return (
        <>
            <Container className="portfolio-container center-align">
                <br />
                <br />
                <H3
                    id="projects"
                    className="left-align"
                    dataAos={aos.project}
                >What Am I working on now?
                 <Div className="divider"></Div>
                </H3>
                <br />
                <Image src='https://i.imgur.com/hTrf4wk.gif' alt='project screenshot' dataAos='fade' />
                <P> A full stack application to track the progress of future projects.
                Organize notes for solutions to tricky problems and save valuable resources discovered along the way.
                A project built utilizing:
                    <br />
                    {currentProjectTechnologies.map((x, idx) => <Shield key={idx} data={x} />)}
                    <br />
                </P>
                <Ul>
                    <Li>Deployed Site</Li>
                    <Li><A href='http://www.trakmyproject.com/'>trakmyproject.com </A></Li>
                    <Li>(sorry for slow loading times - currently deployed on free heroku service)</Li>
                    <br />
                    <Li>Github</Li>
                    <Li><A href='https://github.com/samuelfox1/trakmyproject'>Website Repo </A></Li>
                    <Li><A href='https://github.com/samuelfox1/trakmyproject-api'>API Repo </A></Li>
                </Ul>
                <br />
                <br />

                <H3
                    id="projects"
                    className="left-align"
                    dataAos={aos.project}
                >Previous Projects
                <Div className="divider"></Div>
                </H3>

                {projectList.map((x, idx) => <ProjectCard key={idx} idx={idx} data={x} aos={aos} />)}
            </Container >
        </>
    )
}