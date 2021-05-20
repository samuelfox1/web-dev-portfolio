import React from 'react'
import { Container, Row, Col } from "react-materialize"
import { Div, Footer, H3, H6 } from '../Elements/Elements'
import ContactUl from './ContactUl'


export default function index({ aos }) {
    return (

        <>
            <H3
                id="contact"
                className="footer-title"
                dataAos={aos.footer}
            >Contact
            <Div className="divider"></Div>
            </H3>

            <Footer className="page-footer bg-transparent" dataAos={aos.footerContainer}>
                <Container>
                    <Row >
                        <Col s={12} l={4}>
                            <ContactUl />
                        </Col>
                    </Row>
                </Container>
            </Footer>
            <Div className="divider"></Div>
            <H6 className="center-align" >2021</H6>
        </>
    )
}
