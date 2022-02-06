import React from 'react'
import { Image } from '../Elements/Elements'
import './style.css'

export default function Shield({ data }) {
    return (
        <Image
            className="z-depth-3 shield waves-effect waves-light"
            src={data.src}
            alt={data.alt} />

    )
}
