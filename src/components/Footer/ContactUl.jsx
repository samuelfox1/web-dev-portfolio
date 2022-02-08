import React, { useContext } from 'react'
import { Icon } from 'react-materialize'
import { AppContext } from '../../context/AppProvider'


export default function ContactUl() {
    const { about: { gitHub, linkedIn, resume } } = useContext(AppContext)
    return (
        <ul>
            <li>
                <a
                    className='contact-row hover'
                    href={gitHub}
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub
                    <img
                        className='contact-icon'
                        src='./logo/github/GitHub-Mark-Light-32px.png'
                        alt='gitgub icon' />
                </a>
            </li>

            <li>
                <a
                    className='contact-row hover'
                    href={linkedIn}
                    target='_blank'
                    rel='noreferrer'
                >
                    Linkedin
                    <img
                        width='32'
                        className='contact-icon'
                        src='./logo/linkedin/LI-In-Bug.png'
                        alt='gitgub icon' />
                </a>
            </li>

            <li>
                <a
                    className='contact-row hover'
                    href={resume}
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
                    To The Top
                    <Icon className='contact-icon'>arrow_upward</Icon>
                </a>
            </li>
        </ul>
    )
}
