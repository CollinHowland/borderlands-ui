import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBarProps } from './NavBar.types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const NavBar: React.FunctionComponent<NavBarProps> = (props) => {

    const history = useHistory()

    const navigate = (route: string) => {
        history.push(route)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand onClick={() => navigate('/')}>Builderlands</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/build-list')}>Builds</Nav.Link>
                    <Nav.Link onClick={() => navigate('/create-build')}>Create Build</Nav.Link>
                    <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}