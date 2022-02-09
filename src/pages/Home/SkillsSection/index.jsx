import React, { useContext } from 'react';
import { Col, Divider, Row } from 'react-materialize';
import { v4 } from 'uuid';
import Shield from '../../../components/Shield';
import { AppContext } from '../../../context/AppProvider';
import { aosOptions } from '../../../utils/aosConfig';

const { fade } = aosOptions
const Skill = ({ children }) => <li className='skill'>{`▷ ${children}`}</li>

const SkillsSection = () => {
    const { skills, myTechnologies } = useContext(AppContext)
    return (
        <Row className="skills-container center-align">
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos={fade}
            >
                <ul>
                    <li><h5 >❯ skills ❮</h5></li>
                    <li><Divider /></li>
                    {skills.map(skill => <Skill key={v4()}>{skill}</Skill>)}
                </ul>
            </Col>
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos={fade}
            >
                <h5>❯ Technologies ❮</h5>
                <Divider />
                {Object.values(myTechnologies).map((technology) => <Shield key={v4()} technology={technology} />)}
            </Col>
        </Row >
    );
};

export default SkillsSection;
