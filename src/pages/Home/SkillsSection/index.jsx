import React, { useContext } from 'react';
import { Row, } from 'react-materialize';
import { v4 } from 'uuid';

import ListOfItems from '../../../components/ListOfItems';
import Shield from '../../../components/Shield';

import { AppContext } from '../../../context/AppProvider';

import './style.css'

const SkillsSection = () => {
    const { skills, myTechnologies } = useContext(AppContext)
    return (
        <Row className="skills-container">
            <ListOfItems title='Technologies'>
                {Object
                    .values(myTechnologies)
                    .map((technology) => (
                        <Shield key={v4()} technology={technology} />
                    ))
                }
            </ListOfItems>

            <ListOfItems title='Skills'>
                {skills
                    .map(skill => (
                        <li key={v4()} className='skill'>
                            {skill}
                        </li>
                    ))
                }
            </ListOfItems>

        </Row >
    );
};

export default SkillsSection;
