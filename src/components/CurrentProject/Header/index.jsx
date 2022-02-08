import React from 'react';
import { aosOptions } from '../../../utils/aosConfig';
const { flipUp } = aosOptions

const Header = () => {
    return (
        <div data-aos={flipUp}>
            <h4 className="left-align pt-2">
                Current Work
            </h4>
            <div className="divider"></div>
        </div>

    );
};

export default Header;
