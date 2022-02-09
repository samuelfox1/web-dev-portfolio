import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-materialize'
import { AppContext } from '../../../context/AppProvider'
import ContactLi from './ContactLi'
import './style.css'


export default function ContactUl() {
    const {
        about: {
            gitHub,
            linkedIn,
            resume
        }
    } = useContext(AppContext)

    return (
        <Container >
            <Row >
                <ul>
                    <ContactLi href={gitHub} >
                        GitHub
                        <i className="fab fa-github-square"></i>
                    </ContactLi>
                    <ContactLi href={linkedIn} >
                        LinkedIn
                        <i className="fab fa-linkedin"></i>
                    </ContactLi>
                    <ContactLi href={resume} >
                        Resume
                        <i className="fas fa-file-alt"></i>
                    </ContactLi>
                    <ContactLi href='#root' >
                        To The Top
                        <i className="fas fa-level-up"></i>
                    </ContactLi>
                </ul>
            </Row>
        </Container>
    )
}
