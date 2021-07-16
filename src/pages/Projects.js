import React, { useState, useEffect } from "react"
import { Container } from "react-materialize"
import currentProjectTechnologies from '../utils/currentProjectTechnologies.json'
import projectList from "../utils/projectList.json"
import ProjectCard from "../components/Project Card"
import { A, Div, H3, Image, Li, P, Ul } from "../components/Elements/Elements"
import Shield from "../components/Shield"
import Ping from 'ping-url';


export default function Projects({ aos }) {

    const [trakMyProjectURL, setTrackMyProjectURL] = useState('https://www.trakmyproject.com')
    const AWSCloudFrontURL = 'https://d3nllbgl86n32k.cloudfront.net/'

    const checkIfDomainNameIsWorkingYet = (URL, replaceWithURL) => {
        Ping.check(URL)
            .then(({ status }) => status ? console.log(`${URL} works`) : setTrackMyProjectURL(replaceWithURL))
            .catch(err => console.log(err))
    }

    useEffect(() => { checkIfDomainNameIsWorkingYet(trakMyProjectURL, AWSCloudFrontURL) }, [])

    return (
        <>
            <Container id="projects"
                className="portfolio-container center-align">
                <br />
                <br />
                <H3
                    className="left-align"
                    dataAos={aos.project}
                >What am I working on now?
                    <Div className="divider"></Div>
                </H3>
                <br />
                <Image
                    className='current-project-img'
                    src='https://i.imgur.com/hTrf4wk.gif'
                    alt='project screenshot'
                    dataAos="fade"
                />
                <P dataAos="fade"
                > A full stack application to track the progress of future projects.
                    Organize notes for solutions to tricky problems and save valuable resources discovered along the way.
                    A project built utilizing:
                    <br />
                    {currentProjectTechnologies.map((x, idx) => <Shield key={idx} data={x} />)}
                    <br />
                </P>
                <Ul dataAos="fade"
                >
                    <Li><A href={trakMyProjectURL}>trakmyproject.com </A></Li>
                    <br />
                    <Li>Github</Li>
                    <Li><hr /></Li>
                    <Li><A href='https://github.com/samuelfox1/trakmyproject'>trakmyproject</A></Li>
                    <Li><A href='https://github.com/samuelfox1/trakmyproject-api'>trackmyproject-api</A></Li>
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