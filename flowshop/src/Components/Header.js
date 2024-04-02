import React, { Component } from "react";
import { Button, Container, Form, FormControl, Navbar, Nav } from "react-bootstrap";
import logo from "./logo192.png"

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="">Home</Nav.Link>
                            </Nav>

                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                            </Form>
                            <Button variant="outline-info">Searh</Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}