import React, { useEffect } from "react"
import { Container, Row, Col } from "react-materialize"
import Shields from "../utils/shieldList.json"
import Shield from "../components/Shield"
import "aos/dist/aos.css"

export default function Home({ aos }) {

    useEffect(() => {

    }, [])
    return (

        <Container>
            <Row className="about-container center-align">
                <Col s={12} m={12} l={12} >
                    {/* <h1 id="top"></h1> */}
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
                        src="https://i.imgur.com/zEvf4P4m.jpg"
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
                        <li>▷ Creative Problem Solving</li>
                        <li>▷ Attention to Detail</li>
                        <li>▷ Critical Thinking</li>
                        <li>▷ UI & Ux Design</li>
                        <li>▷ Engineering</li>
                        <li>▷ Mechanics</li>
                        <li>▷ Workflow</li>
                    </ul>
                </Col>
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <h5>❯ Technologies ❮</h5>
                    <div className="divider"></div>

                    {Shields.map((x, idx) => <Shield key={idx} data={x} />)}


                </Col>
            </Row >
        </Container >
    )
}