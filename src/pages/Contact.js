import React from "react"
import SlideToggle from "react-slide-toggle"
import { Container, Row } from "react-materialize"


export default function Contact() {
    return (
        <Container className="contact-container center-align">

            <h2 id="contact">Contact</h2>


            <Row className="contact-h1">
                <h1>👨‍💻</h1>
            </Row>

            <Row className="contact-row">
                <a href="https://www.linkedin.com/in/samuel-fox-tacoma/" target="_blank"><span className="link-btn">Linked
                        in</span></a>
            </Row>

            <Row className="ontact-row">
                <a href="https://github.com/samuelfox1" target="_blank"><span className="link-btn">GitHub</span></a>
            </Row>

            <Row className="contact-row">

                <SlideToggle
                    duration={1000}
                    collapsed
                    render={({ toggle, setCollapsibleElement }) => (
                        <div>

                            <a
                                onClick={toggle}
                                id="contact-personal"
                            ><span className="link-btn">More</span></a>
                            {/* <div className="divider"></div> */}


                            <div
                                ref={setCollapsibleElement}
                                className="contact-row">
                                <div className="contact-item">
                                    <a href="tel:+2534486572" className="contact-item portfolio-link">☏ (253) 448-6572</a>
                                </div>

                                <div className="contact-item">
                                    <a href="mailto:samueljasonfox@gmail.com" className="contact-item portfolio-link">
                                        ❖ samueljasonfox@gmail.com</a>
                                </div>

                                <div className="contact-item">
                                    <a href="https://drive.google.com/file/d/1tCUOLkL3cPXool2wgQ8vxuJoYEIwJ46h/view?usp=sharing"
                                        target="_blank" className="contact-item portfolio-link">▷ Resume</a>
                                </div>
                            </div>

                        </div>
                    )}
                />
            </Row>
        </Container>
    )
}