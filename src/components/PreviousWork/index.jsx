import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import SectionHeader from '../SectionHeader';
import Carousel from './Carousel';

const PreviousWork = () => {
    const { projects: { other } } = useContext(AppContext)
    return (
        <div id="previous-work" className='my-3'>
            <SectionHeader>Previous Work</SectionHeader>
            <Carousel projects={other} />
        </div>
    );
};

export default PreviousWork;
