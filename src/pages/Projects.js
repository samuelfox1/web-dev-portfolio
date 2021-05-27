import React from "react"
import { Container } from "react-materialize"
import currentProjectTechnologies from '../utils/currentProjectTechnologies.json'
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"
import { A, Div, H3, Image, Li, P, Ul } from "../components/Elements/Elements"
import Shield from "../components/Shield"




export default function Projects({ aos }) {

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
                <Image className='current-project-img' src='https://i.imgur.com/hTrf4wk.gif' alt='project screenshot' dataAos='fade' />
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