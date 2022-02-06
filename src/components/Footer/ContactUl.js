import React from 'react'
import { Icon } from "react-materialize"

import { A, Image, Li, Ul } from '../Elements/Elements'

export default function ContactUl() {
    return (
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
                    target="_blank"
                    text='Linkedin'
                >
                    <Image width="32" className="contact-link" src="./logo/linkedin/LI-In-Bug.png" />
                </A>
            </Li>

            <Li>
                <A
                    className="contact-row hover"
                    href="https://docs.google.com/document/d/e/2PACX-1vQ6fPlacPr0qKjQBI300n0Dk8TU6UDYxGyK5KLDD5nlxcL94B409jr2MCK3nVCw5f0Zu2OLdwbXidEe/pub" target="about_blank"
                    target="_blank"
                    text='Resume'
                >
                    <Icon className="contact-icon">list_alt</Icon>
                </A>
            </Li>

            <Li>
                <A
                    className="contact-row hover"
                    href="#root"
                    stayOnPage={true}
                    text='Top of Page'
                >
                    <Icon className="contact-icon">arrow_upward</Icon>
                </A>
            </Li>
        </Ul>
    )
}
