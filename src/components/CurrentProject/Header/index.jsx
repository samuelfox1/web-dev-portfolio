import React from 'react';

const Header = ({ aos }) => {
    return (
        <div data-aos={aos.project}>
            <h3 className="left-align pt-2">
                What am I working on now?
            </h3>
            <div className="divider"></div>
        </div>

    );
};

export default Header;
