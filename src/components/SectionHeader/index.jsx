import React from 'react';
import { Divider } from 'react-materialize';
import { aosOptions } from '../../utils/aosConfig';
const { fade } = aosOptions

const SectionHeader = ({ children, className }) => {
    return (
        <div data-aos={fade}>
            {/* padding-top 2em used for nav button click focus */}
            <h3 className={`left-align pt-2 ${className}`}>
                {children}
            </h3>
            <Divider />
        </div>

    );
};

export default SectionHeader;
