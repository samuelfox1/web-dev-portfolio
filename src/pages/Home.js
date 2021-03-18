import React, { useEffect } from "react"
import { Container, Row, Col } from "react-materialize"
import "aos/dist/aos.css"

export default function Home({ aos }) {

    useEffect(() => {

    }, [])
    return (

        <Container>
            <Row className="about-container center-align">
                <Col s={12} m={12} l={12} >
                    <h3
                        id="hello"
                        className="left-align"
                        data-aos={aos.hello}
                    >Hello!
                    </h3>
                    <br />
                    <img
                        className="rounded portrait z-depth-5"
                        width="300"
                        src="https://i.imgur.com/7TOJf0lm.jpg"
                        alt="profile picture" />
                    <br />
                    <h5>My name is Sam.</h5>
                    <p>Graduate of the University of Washington's <a
                        href="https://bootcamp.uw.edu/coding/" target="_blank" className="portfolio-link">Fullstack
                            Flex</a> web development Coding Bootcamp.</p>
                    <p>Pursuing a Bachelors Degree in Computer Sciences.</p>
                </Col>
            </Row>
            <Row className="skills-container center-align">
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <ul>
                        <li><h5>❯ Skills ❮</h5></li>
                        <li><div className="divider"></div></li>
                        <li>▷ Attention to detail</li>
                        <li>▷ Order of Operations</li>
                        <li>▷ Critical Thinking</li>
                        <li>▷ Creative Problem Solving</li>
                        <li>▷ Efficienct Systems</li>
                        <li>▷ Spotting Points of Failure</li>
                        <li>▷ Project Management</li>
                        <li>▷ Engineering and design</li>
                        <li>▷ Mechanics</li>
                    </ul>
                </Col>
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <h5>❯ Technologies ❮</h5>
                    <div className="divider"></div>
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-HTML5-blue?logo=html5"
                        alt="HTML5" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-CSS-red?logo=css3"
                        alt="CSS" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=Bootstrap&logoColor=white"
                        alt="BootstrapCSS" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-MaterializeCSS-FF7F7F?logo=Material%20Design&logoColor=white"
                        alt="MaterializeCSS" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-javascript-yellow?logo=javascript"
                        alt="JavaScript" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-node.js-339933?logo=node.js&logoColor=white"
                        alt="node.js" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-Express-000000?logo=JavaScript&logoColor=yellow"
                        alt="ExpressJS" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white"
                        alt="MySQL" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white"
                        alt="MongoDB" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-handlebars.js-FF7D00"
                        alt="handlebars.js" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-ReactJS-000000?logo=React&logoColor=61DAFB"
                        alt="ReactJS" />
                    <img
                        className="z-depth-3 shield"
                        src="https://img.shields.io/badge/-npm-CB3837?logo=NPM"
                        alt="npm" />
                </Col>
            </Row >
        </Container >
    )
}