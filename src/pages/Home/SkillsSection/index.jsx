import React from 'react';
import { Col, Row } from 'react-materialize';
import { v4 } from 'uuid';
import Shield from '../../../components/Shield';
import { aosOptions } from '../../../utils/aosConfig';
import Shields from "../../../utils/shieldList.json"

const { fade } = aosOptions
const skills = ['Creative Problem Solving', 'Attention to Detail', 'Critical Thinking', 'Engineering', 'Workflow', 'CI & CD', 'UI & Ux', 'AWS S3', 'AWS Route53', 'AWS CloudFront']
const Skill = ({ children }) => <li className='skill'>{`▷ ${children}`}</li>

const SkillsSection = () => {
    return (
        <Row className="skills-container center-align">
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos={fade}
            >
                <ul>
                    <li><h5 >❯ skills ❮</h5></li>
                    <li><div className="divider"></div></li>
                    {skills.map(skill => <Skill key={v4()}>{skill}</Skill>)}
                </ul>
            </Col>
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos={fade}
            >
                <h5>❯ Technologies ❮</h5>
                <div className="divider"></div>
                {Shields.map((technology) => <Shield key={v4()} technology={technology} />)}
            </Col>
        </Row >
    );
};

export default SkillsSection;
