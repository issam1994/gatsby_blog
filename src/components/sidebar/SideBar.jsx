import React from 'react'
import Tags from './Tags'
import { Link } from 'gatsby'

const EmailMe = () => (
    <div className="my-4">
        <span className="mx-1"><span role="img">✉️</span> Questions?</span>
        <a className="mx-1 text-indigo-700 font-semibold text-sm" href="mailto:issamaitouahmane@gmail.com">Email me!</a>
    </div>
)

const GoHome = () => (
    <div className="my-4 text-indigo-700 font-semibold">
        <Link to="/" className=""><span role="img">🏠</span> Go Home !</Link>
    </div>
)

export default function SideBar({ showGoHome }) {
    return (
        <div className="w-full md:w-64 order-last md:order-first">
            {showGoHome && <GoHome />}
            <EmailMe />
            <Tags />
        </div>
    )
}