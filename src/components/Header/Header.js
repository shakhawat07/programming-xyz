import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="fs-2">Programming XYZ</Navbar.Brand>
                <Nav className="p-3 d-flex align-items-end justify-content-end fs-4">
                    <NavLink className="me-3"
                        activeStyle={activeStyle}
                        to="/home">Home
                    </NavLink>
                    <NavLink className="me-3"
                        activeStyle={activeStyle}
                        to="/courses">Courses
                    </NavLink>
                    <NavLink className="me-3"
                        activeStyle={activeStyle}
                        to="/about">About
                    </NavLink>
                    {/* <NavLink
                activeStyle={activeStyle}
                to="/about/culture">Culture
            </NavLink> */}


                </Nav>
            </Container>
        </Navbar>
        // <nav className="navbar navbar-dark bg-dark text-whitey">

        // </nav>
    );
};

export default Header;