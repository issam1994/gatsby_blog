import React from 'react'

export default function Logo({path}) {
    return(
        <svg viewBox="0 0 22 22">
            <path d={path} />
        </svg>
    )
}