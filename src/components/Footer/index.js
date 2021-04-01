import React from 'react'
import { Container, Row, Col, Icon } from "react-materialize"


export default function index({ aos }) {
    return (

        <>
            <h2
                id="contact"
                className="footer-title"
                data-aos={aos.footer}
            >Contact
            </h2>
            <div className="divider"></div>

            <footer className="page-footer bg-transparent" data-aos={aos.footerContainer}>
                <Container>
                    <Row >
                        <h4>Samuel Fox</h4>

                        <Col s={12} l={4}>
                            <ul>

                                <li
                                >
                                    <a
                                        className="contact-row"
                                        href="https://github.com/samuelfox1"
                                        target="_blank"
                                    >
                                        <img
                                            className="contact-link"
                                            src="./logo/github/GitHub-Mark-Light-32px.png" />
                                GitHub
                                </a>
                                </li>

                                <li>
                                    <a
                                        className="contact-row"
                                        href="https://www.linkedin.com/in/samuel-fox-tacoma/"
                                    >
                                        <img
                                            width="32"
                                            className="contact-link"
                                            src="./logo/linkedin/LI-In-Bug.png" />
                                    Linkedin
                                </a>
                                </li>

                                <li>
                                    <a
                                        className="contact-row"
                                        href="https://drive.google.com/file/d/1QxaoF3EpN5PcWEnCrzO1ialnP7on6pR7/view?usp=sharing" target="about_blank"
                                    >
                                        <Icon className="contact-icon">list_alt</Icon>
                                    Resume
                                </a>
                                </li>

                                <li>
                                    <a
                                        className="contact-row"
                                        href="#hello"
                                    >
                                        <Icon className="contact-icon">arrow_upward</Icon>
                                    Top of Page
                                </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <div className="divider"></div>
            <h6 className="center-align">2021</h6>
        </>
    )
}
