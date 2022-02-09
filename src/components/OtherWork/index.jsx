import React, { useContext } from 'react';
import { Divider } from 'react-materialize';
import { AppContext } from '../../context/AppProvider';
import { aosOptions } from '../../utils/aosConfig';
import SectionHeader from '../SectionHeader';
import Carousel from './Carousel';
const { fade } = aosOptions

const OtherWork = () => {
    const { projects: { other } } = useContext(AppContext)
    return (
        <div id="previous-work">
            <SectionHeader>Previous Work</SectionHeader>
            <Carousel projects={other} />
        </div>
    );
};

export default OtherWork;
