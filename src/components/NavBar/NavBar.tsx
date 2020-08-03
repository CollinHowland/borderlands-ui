import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarProps } from './NavBar.types'

export const NavBar: React.FunctionComponent<NavBarProps> = props => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/build'>Create a Build</Link>
                </li>
            </ul>
        </nav>
    )
}