import React from "react"
import { Columns, Container } from "react-bulma-components"
import SlideToggle from "react-slide-toggle"
import { A, Div, H5 } from "../Elements/Elements"
import CardBody from "./CardBody"
import CardTop from "./CardTop"

// SlideToggle https://codesandbox.io/s/react-slide-toggle-y3tpn?file=/src/index.js

export default function ProjectCard({ aos, data, idx }) {

    let transition = aos.projectCard1
    // if (idx === 0 || idx % 2 === 0) { transition = aos.projectCard2 }

    return (
        <Container >
            <Columns
                className="project-card center-align"
                data-aos={transition}
            >
                <Columns.Column>
                    <H5 >{data.title}</H5>
                    <Div className="divider" />

                    <SlideToggle
                        duration={800}
                        collapsed
                        render={({ toggle, setCollapsibleElement }) => (
                            <Div className="card bg-transparent">
                                <A onClick={toggle}>
                                    <CardTop data={data} />
                                </A>
                                <Div reference={setCollapsibleElement}>
                                    <CardBody data={data} />
                                </Div>
                            </Div>
                        )}
                    />
                </Columns.Column>
            </Columns>
        </Container>
    )
}