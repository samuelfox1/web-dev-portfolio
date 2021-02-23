import React from "react"
import SlideToggle from "react-slide-toggle"

// SlideToggle is modified from https://codesandbox.io/s/react-slide-toggle-y3tpn?file=/src/index.js

export default function ProjectCard({ data }) {
    return (
        <div className="col s12 m5 center-align rounded m2 project-card">
            <h5>{data.title}</h5>
            <hr />

            <SlideToggle
                duration={800}
                collapsed
                render={({ toggle, setCollapsibleElement }) => (
                    // element to activate toggle
                    <div className="card bg-color-light rounded">

                        <a onClick={toggle}>
                            <div className="card-image card-img-top rounded">
                                <img className="rounded z-depth-5" src={data.img} />
                                <span className="card-title right-align"><i className="material-icons bg-color-dark rounded z-depth-3 p1">touch_app</i></span>

                            </div>
                        </a>

                        <div className="rounded"
                            ref={setCollapsibleElement}>

                            {/* content that is toggled */}
                            <div className="card-content bg-color-light rounded">

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
        </div>
    )
}