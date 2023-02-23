import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Logo = () => {
  return (
    <Navbar bg="primary" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>Drink Store</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Logo;
