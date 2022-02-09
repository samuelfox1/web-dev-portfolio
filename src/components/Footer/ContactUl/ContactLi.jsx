import React from 'react';

const ContactLi = ({ href, text, icon }) => {

    const getTarget = () => href.startsWith('#') ? '' : '_blank'

    return (
        <li >
            <a
                href={href}
                target={getTarget()}
                rel='noreferrer'
                className='hover'
            >
                {text}
                <i className={`ml-1 ${icon}`}></i>
            </a>
        </li>
    );
};

export default ContactLi;
