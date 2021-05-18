import React, { useEffect } from "react"
import { Container, Row, Col } from "react-materialize"
import Shields from "../utils/shieldList.json"
import Shield from "../components/Shield"
import "aos/dist/aos.css"
import { A, Div, H1, H5, Image, Li, P, Ul } from "../components/Elements/Elements"

export default function Home({ aos }) {
    return (

        <Container>
            <Row className="about-container center-align">
                <Col s={12} m={12} l={12} >
                    <H1
                        id="hello"
                        className="left-align"
                        dataAos={aos.hello}
                        text='Hello!'
                    >
                    </H1>
                    <br />
                    <Image
                        src="https://i.imgur.com/zEvf4P4m.jpg"
                        className="rounded portrait z-depth-5"
                        alt="profile picture" />
                    <br />
                    < H5 text='My name is Sam.' />
                    <P
                        text="Graduate of the University of Washington's"
                        text2="web development Coding Bootcamp."
                    >
                        <A
                            href="https://bootcamp.uw.edu/coding/"
                            className="portfolio-link hover"
                            text=' Fullstack Flex ' />

                    </P>


                    <P text='Pursuing a Bachelors Degree in Computer Science.' />
                </Col>
            </Row>
            <Row className="skills-container center-align">
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <Ul>
                        <Li><H5 text='❯ Skills ❮' /></Li>
                        <Li><Div className="divider"></Div></Li>
                        <Li className='skill' text='▷ Creative Problem Solving' />
                        <Li className='skill' text='▷ Attention to Detail' />
                        <Li className='skill' text='▷ Critical Thinking' />
                        <Li className='skill' text='▷ UI & Ux Design' />
                        <Li className='skill' text='▷ Engineering' />
                        <Li className='skill' text='▷ Mechanics' />
                        <Li className='skill' text='▷ Workflow' />
                    </Ul>
                </Col>
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <H5 text='❯ Technologies ❮' />
                    <Div className="divider"></Div>
                    {Shields.map((x, idx) => <Shield key={idx} data={x} />)}
                </Col>
            </Row >
        </Container >
    )
}