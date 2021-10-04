import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato"
    };
    return (
        <Navbar sticky="top" bg="black" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-5">Programming XYZ</Navbar.Brand>
                <Nav className="d-flex align-items-end justify-content-end">
                    <NavLink className="nav"
                        activeStyle={activeStyle}
                        to="/home">Home
                    </NavLink>
                    <NavLink className="nav"
                        activeStyle={activeStyle}
                        to="/courses">Courses
                    </NavLink>
                    <NavLink className="nav"
                        activeStyle={activeStyle}
                        to="/about">About
                    </NavLink>
                    <NavLink className="nav"
                        activeStyle={activeStyle}
                        to="/login">Login
                    </NavLink>


                </Nav>
            </Container>
        </Navbar>
        // <nav className="navbar navbar-dark bg-dark text-whitey">

        // </nav>
    );
};

export default Header;