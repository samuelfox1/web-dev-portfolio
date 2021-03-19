import React from "react"
import { Container, Row } from "react-materialize"
import SlideToggle from "react-slide-toggle"

// SlideToggle is modified from https://codesandbox.io/s/react-slide-toggle-y3tpn?file=/src/index.js

export default function ProjectCard({ aos, data, idx }) {

    let transition = aos.projectCard1
    // if (idx === 0 || idx % 2 === 0) { transition = aos.projectCard2 }

    return (
        <Container >
            <Row className="project-card center-align"
                data-aos={transition}
            >

                <h5>{data.title}</h5>
                <div className="divider"></div>

                <SlideToggle
                    duration={800}
                    collapsed
                    render={({ toggle, setCollapsibleElement }) => (
                        // element to activate toggle
                        <div className="card bg-transparent">

                            <a onClick={toggle}>
                                <div className="card-img-top card-image">
                                    <img className="project-img z-depth-5" src={data.img} />
                                    <span className="card-title right-align">
                                        <i className="material-icons project-icon z-depth-3 p1">
                                            touch_app
                                    </i>
                                    </span>

                                </div>
                            </a>

                            <div className=""
                                ref={setCollapsibleElement}>

                                {/* content that is toggled */}
                                <div className="card-content">

                                    <p className="card-text">{data.description} <a className="portfolio-link" href={data.repo} target="_blank">Learn More</a></p>
                                    <br />
                                    <a className="link-btn active z-depth-3"
                                        href={data.deployed} target="_blank">
                                        App
                                </a>
                                    <br />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </Row>
        </Container>
    )
}