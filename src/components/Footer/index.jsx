import React from 'react'
import { Container, Row, Col } from "react-materialize"
import { aosOptions } from '../../utils/aosConfig'
import ContactUl from './ContactUl'
import './style.css'

const { fade } = aosOptions


export default function index({ aos }) {
    return (

        <>
            <h3
                id="contact"
                className="footer-title"
                data-aos={fade}
            >Contact
                <div className="divider"></div>
            </h3>

            <footer className="page-footer bg-transparent" data-aos={fade}>
                <Container>
                    <Row >
                        <Col s={12} l={4}>
                            <ContactUl />
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="divider"></div>
            <h6 className="center-align" >2021</h6>
        </>
    )
}
