import React, { useContext } from 'react'
import { Container, Row } from 'react-materialize'
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
        <ul className='contact-ul'>
            <ContactLi
                href={gitHub}
                icon='fab fa-github-square'
                text='GitHub'
            />
            <ContactLi
                href={linkedIn}
                icon='fab fa-linkedin'
                text='LinkedIn'
            />
            <ContactLi
                href={resume}
                icon='fas fa-file-alt'
                text='Resume'
            />
            <ContactLi
                href='#root'
                icon='fas fa-level-up'
                text='Top'
            />
        </ul>
    )
}
