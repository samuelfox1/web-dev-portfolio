import React from 'react';

const ContactLi = ({ children, href }) => {
    return (
        <li>
            <a
                className='contact-row hover'
                href={href}
                target='_blank'
                rel='noreferrer'
            >
                {children}
            </a>
        </li>
    );
};

export default ContactLi;
