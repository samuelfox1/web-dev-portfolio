import React from 'react'
import { Columns, Container } from 'react-bulma-components'
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
                    <Columns >
                        <Columns.Column>
                            <ContactUl />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Footer>
            <Div className="divider"></Div>
            <H6 className="center-align" >2021</H6>
        </>
    )
}
