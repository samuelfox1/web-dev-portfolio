import React, { useEffect } from "react"
import { Container, Row, Col } from "react-materialize"
import Shields from "../utils/shieldList.json"
import Shield from "../components/Shield"
import "aos/dist/aos.css"
import { A, Div, H1, H5, Image, Li, P, Ul } from "../components/Elements/Elements"


export default function Home({ aos }) {
    return (

        <Container id="hello"
        >
            <Row className="about-container center-align">
                <Col s={12} m={12} l={12} >

                    <br />
                    <Image
                        src="https://i.imgur.com/zEvf4P4m.jpg"
                        className="rounded portrait z-depth-5"
                        alt="profile picture" />
                    <H1
                        dataAos={aos.hello}
                    > Hello !
                    </H1>
                    < H5 >My name is Sam.</H5>
                    <P>Graduate of the University of Washington's
                        <A
                            href="https://bootcamp.uw.edu/coding/"
                            className="portfolio-link hover"
                            target="_blank"
                            text=' Fullstack ' />
                        web development Coding Bootcamp.
                    </P>


                    <P>Pursuing a Bachelors Degree in Computer Science.</P>
                </Col>
            </Row>
            <Row className="skills-container center-align">
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <Ul>
                        <Li><H5 >❯ Hard Skills ❮</H5></Li>
                        <Li><Div className="divider"></Div></Li>
                        <Li className='skill' >▷ Creative Problem Solving</Li>
                        <Li className='skill' >▷ Attention to Detail</Li>
                        <Li className='skill' >▷ Critical Thinking</Li>
                        <Li className='skill' >▷ Engineering</Li>
                        <Li className='skill' >▷ Workflow</Li>
                        <Li className='skill' >▷ CI & CD</Li>
                        <Li className='skill' >▷ UI & Ux</Li>
                        <Li className='skill' >▷ IAM</Li>
                        <Li className='skill' >▷ AWS S3</Li>
                        <Li className='skill' >▷ AWS Route53</Li>
                        <Li className='skill' >▷ AWS CloudFront</Li>
                        {/* <Li className='skill' >▷ </Li> */}
                    </Ul>
                </Col>
                {/* <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <Ul>
                        <Li><H5 >❯ Soft Skills ❮</H5></Li>
                        <Li><Div className="divider"></Div></Li>
                        <Li className='skill' >▷ </Li>
                        <Li className='skill' >▷ </Li>
                        <Li className='skill' >▷ </Li>
                        <Li className='skill' >▷ </Li>
                        <Li className='skill' >▷ </Li>
                        <Li className='skill' >▷ </Li>
                    </Ul>
                </Col> */}
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <H5>❯ Technologies ❮</H5>
                    <Div className="divider"></Div>
                    {Shields.map((x, idx) => <Shield key={idx} data={x} />)}
                </Col>
            </Row >
            {/* <Row>
                <Col s={12} m={6} l={6}
                    className="skills-card"
                    data-aos="fade"
                >
                    <H5>❯ Technologies ❮</H5>
                    <Div className="divider"></Div>
                    {Shields.map((x, idx) => <Shield key={idx} data={x} />)}
                </Col>
            </Row> */}

        </Container >
    )
}