import React from "react";
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Container,
  FormControl,
  Button
} from "react-bootstrap";
import "./DefaultLayout.css";

export default function DefaultHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Evenfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
