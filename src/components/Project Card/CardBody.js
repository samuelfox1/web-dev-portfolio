import React from 'react'
import { A, Div, P } from '../Elements/Elements'

export default function CardBody({ data }) {
    return (
        <Div className="card-content">
            <P className="card-text">
                {data.description}
            </P>
            <A className="portfolio-link hover" href={data.repo} target="_blank" text=' GitHub Repo' />
            <br />
            <br />
            <A className="link-btn z-depth-3 hover" href={data.deployed} target="_blank" text='Deployed App' />
            <br />
        </Div>
    )
}
