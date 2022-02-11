import React from 'react'
import { Col, Row } from 'react-materialize'
import { aosOptions } from '../../utils/aosConfig';

import './style.css'

const { fade } = aosOptions

const Section = ({ className, children }) => {
    return (
        <Row className={`custom-section ${className}`}>
            <Col
                data-aos={fade}
                s={12} m={12} l={12}
            >
                {children}
            </Col>
        </Row>
    )
}

export default Section