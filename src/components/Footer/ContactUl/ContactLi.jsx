import React from 'react';

const ContactLi = ({ children, href }) => {
    const getTarget = () => (href.startsWith('#') ? '' : '_blank');

    return (
        <li>
            <a
                href={href}
                target={getTarget()}
                rel="noreferrer"
                className="hover"
            >
                {children}
            </a>
        </li>
    );
};

export default ContactLi;
