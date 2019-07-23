import React from "react";

import "../css/style.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header(props) {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Graça Doces</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-dark" href="#home">
              Início
            </Nav.Link>
            <Nav.Link className="text-dark" href="#link">
              Quem somos
            </Nav.Link>
            <NavDropdown
              className="text-dark"
              title="Produtos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="text-dark" href="#action/3.1">
                Bolos
              </NavDropdown.Item>
              <NavDropdown.Item className="text-dark" href="#action/3.2">
                Doces
              </NavDropdown.Item>
              <NavDropdown.Item className="text-dark" href="#action/3.3">
                Bolos Personalizados
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
