import React from 'react'
import './style.css'

export default function Shield({ data }) {
    const { href, src, alt } = data
    return (
        <a href={href} target='_blank' rel='noreferrer'>

            <img
                className="z-depth-3 shield waves-effect waves-light"
                src={src}
                alt={alt} />
        </a>

    )
}
