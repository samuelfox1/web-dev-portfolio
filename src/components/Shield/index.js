import React from 'react'

export default function Shield({ data }) {
    return (

        <img
            className="z-depth-3 shield"
            src={data.src}
            alt={data.alt} />

    )
}
