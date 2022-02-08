import React from 'react'
import { Icon } from 'react-materialize'


export default function ContactUl() {
    return (
        <ul>
            <li>
                <a
                    className='contact-row hover'
                    href='https://github.com/samuelfox1'
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub
                    <img
                        className='contact-link'
                        src='./logo/github/GitHub-Mark-Light-32px.png'
                        alt='gitgub icon' />
                </a>
            </li>

            <li>
                <a
                    className='contact-row hover'
                    href='https://www.linkedin.com/in/samuel-fox-tacoma/'
                    target='_blank'
                    rel='noreferrer'
                >
                    Linkedin
                    <img
                        width='32'
                        className='contact-link'
                        src='./logo/linkedin/LI-In-Bug.png'
                        alt='gitgub icon' />
                </a>
            </li>

            <li>
                <a
                    className='contact-row hover'
                    href='https://docs.google.com/document/d/e/2PACX-1vQ6fPlacPr0qKjQBI300n0Dk8TU6UDYxGyK5KLDD5nlxcL94B409jr2MCK3nVCw5f0Zu2OLdwbXidEe/pub'
                    target='_blank'
                    rel='noreferrer'
                >
                    Resume
                    <Icon className='contact-icon'>list_alt</Icon>
                </a>
            </li>

            <li>
                <a
                    className='contact-row hover'
                    href='#root'
                    text='Top of Page'
                >
                    <Icon className='contact-icon'>arrow_upward</Icon>
                </a>
            </li>
        </ul>
    )
}
