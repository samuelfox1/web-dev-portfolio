import React from 'react'
import { Image } from '../Elements/Elements'

export default function Shield({ data }) {
    return (

        <Image
            className="z-depth-3 shield"
            src={data.src}
            alt={data.alt} />

    )
}
