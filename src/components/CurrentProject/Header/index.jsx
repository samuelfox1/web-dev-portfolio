import React from 'react';
import { aosOptions } from '../../../utils/aosConfig';
const { fade } = aosOptions

const Header = () => {
    return (
        <div data-aos={fade}>
            <h3 className="left-align pt-2">
                Current Work
            </h3>
            <div className="divider"></div>
        </div>

    );
};

export default Header;
