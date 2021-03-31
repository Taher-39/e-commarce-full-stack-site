import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="success" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">Hat-Bazer</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/">
                            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/admin">
                            <ReactBootStrap.Nav.Link href="#admin">Admin</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/orders">
                            <ReactBootStrap.Nav.Link href="#orders">Orders</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/login">
                            <ReactBootStrap.Nav.Link href="#login">{loggedInUser.email ? <h6>{loggedInUser.name || loggedInUser.email}</h6> : "Log In"}</ReactBootStrap.Nav.Link>
                            
                        </Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    );
};

export default Header;