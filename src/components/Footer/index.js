import React from 'react'
import { Container, Row, Col } from "react-materialize"


export default function index() {
    return (
        <footer className="page-footer bg-dark">


            <h2 id="contact">Contact</h2>
            <div className="divider"></div>

            <Container>
                <Row >
                    <h4>Samuel Fox</h4>

                    <Col s={12} l={4}>
                        <ul>
                            <li>
                                <a
                                    // className="grey-text text-lighten-3"
                                    href="https://github.com/samuelfox1"
                                    target="_blank"
                                >GitHub</a>
                            </li>

                            <li>
                                <a
                                    // className="grey-text text-lighten-3"
                                    href="https://www.linkedin.com/in/samuel-fox-tacoma/"
                                >Linkedin</a>
                            </li>

                            <li>
                                <a
                                    // className="grey-text text-lighten-3"
                                    href="https://drive.google.com/file/d/1tCUOLkL3cPXool2wgQ8vxuJoYEIwJ46h/view?usp=sharing"
                                >Resume</a>
                            </li>

                            {/* <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="divider"></div>
            <h6 className="center-align">2021</h6>
        </footer>
    )
}
