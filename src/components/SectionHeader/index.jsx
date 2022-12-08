import React from 'react';
import { Divider } from 'react-materialize';

import './style.css';

const SectionHeader = ({ children, className }) => {
    return (
        <div className="section-header pt-1">
            {/* padding-top 2em used for nav button click focus */}
            <h3 className={`left-align my-0 ${className || ''}`}>{children}</h3>
            <Divider />
        </div>
    );
};

export default SectionHeader;
