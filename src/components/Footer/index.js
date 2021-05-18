import React from 'react'
import { Container, Row, Col } from "react-materialize"
import { Div, Footer, H2, H6 } from '../Elements/Elements'
import ContactUl from './ContactUl'


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
                            <ContactUl />
                        </Col>
                    </Row>
                </Container>
            </Footer>
            <Div className="divider"></Div>
            <H6 className="center-align" text='2021' />
        </>
    )
}
