import React from 'react'
import { A, Div, P } from '../Elements/Elements'

export default function CardBody({ data }) {
    return (
        <Div className="card-content">
            <P className="card-text" text={data.description}>
                <A className="portfolio-link" href={data.repo} target="_blank" text=' GitHub Repo' />
            </P>
            <br />
            <A className="link-btn z-depth-3" href={data.deployed} target="_blank" text='Deployed App' />
            <br />
        </Div>
    )
}
