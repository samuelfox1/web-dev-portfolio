import React from 'react';
import { Col, Row } from 'react-materialize';
import Shield from '../../../components/Shield';
import Shields from "../../../utils/shieldList.json"


const Skills = () => {
    return (
        <Row className="skills-container center-align">
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos="fade"
            >
                <ul>
                    <li><h5 >❯ skills ❮</h5></li>
                    <li><div className="divider"></div></li>
                    <li className='skill' >▷ Creative Problem Solving</li>
                    <li className='skill' >▷ Attention to Detail</li>
                    <li className='skill' >▷ Critical Thinking</li>
                    <li className='skill' >▷ Engineering</li>
                    <li className='skill' >▷ Workflow</li>
                    <li className='skill' >▷ CI & CD</li>
                    <li className='skill' >▷ UI & Ux</li>
                    <li className='skill' >▷ AWS S3</li>
                    <li className='skill' >▷ AWS Route53</li>
                    <li className='skill' >▷ AWS CloudFront</li>
                    {/* <li className='skill' >▷ </li> */}
                </ul>
            </Col>
            <Col s={12} m={6} l={6}
                className="skills-card"
                data-aos="fade"
            >
                <h5>❯ Technologies ❮</h5>
                <div className="divider"></div>
                {Shields.map((x, idx) => <Shield key={idx} data={x} />)}
            </Col>
        </Row >
    );
};

export default Skills;
