import React from 'react'
import { Link } from "gatsby"
import logo from '../images/gatsby-icon.png'

export default function Logo() {
    return (
        <Link className="flex-center p-2" to="/">
            <h1 className="text-sm mr-2 font-light text-indigo-800">Powered by</h1>
            <img className="w-12 h-12" src={logo} alt="logo" />
        </Link>
    )
}