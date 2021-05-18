import React from 'react'
import { Container, Row, Col, Icon } from "react-materialize"
import { A, Div, Footer, H2, H4, H6, Image, Li, Ul } from '../Elements/Elements'


export default function index({ aos }) {
    return (

        <>
            <H2
                id="contact"
                className="footer-title"
                dataAos={aos.footer}
                text='Contact'
            />
            <Div className="divider"></Div>

            <Footer className="page-footer bg-transparent" dataAos={aos.footerContainer}>
                <Container>
                    <Row >
                        <Col s={12} l={4}>
                            <Ul>
                                <Li>
                                    <A
                                        className="contact-row hover"
                                        href="https://github.com/samuelfox1"
                                        target="_blank"
                                        text='GitHub'
                                    >
                                        <Image className="contact-link" src="./logo/github/GitHub-Mark-Light-32px.png" />
                                    </A>
                                </Li>

                                <Li>
                                    <A
                                        className="contact-row hover"
                                        href="https://www.linkedin.com/in/samuel-fox-tacoma/"
                                        text='Linkedin'
                                    >
                                        <Image width="32" className="contact-link" src="./logo/linkedin/LI-In-Bug.png" />
                                    </A>
                                </Li>

                                <Li>
                                    <A
                                        className="contact-row hover"
                                        href="https://drive.google.com/file/d/1lnfsiRNEH_fBLvzMBDKLqZJ4T7OapdqO/view?usp=sharing" target="about_blank"
                                        text='Resume'
                                    >
                                        <Icon className="contact-icon">list_alt</Icon>
                                    </A>
                                </Li>

                                <Li>
                                    <A
                                        className="contact-row hover"
                                        href="#hello"
                                        text='Top of Page'
                                    >
                                        <Icon className="contact-icon">arrow_upward</Icon>
                                    </A>
                                </Li>
                            </Ul>
                        </Col>
                    </Row>
                </Container>
            </Footer>

            <Div className="divider"></Div>
            <H6 className="center-align" text='2021' />
        </>
    )
}
