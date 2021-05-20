import React from 'react'
import { Div, I, Image, Span } from '../Elements/Elements'

export default function CardTop({ data }) {
    return (
        <Div className="card-img-top card-image">
            <Image className="project-img z-depth-5" src={data.img} />
            <Span className="card-title right-align">
                <I className="material-icons project-icon z-depth-3 p1">touch_app</I>
            </Span>
        </Div>
    )
}
