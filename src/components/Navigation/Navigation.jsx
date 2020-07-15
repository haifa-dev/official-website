import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" as={Link} to={{ pathname: "/", hash: "#home", state: "home" }}>
          <span style={{color: "green"}}>Haifa</span>
          <span>:Dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home" as={Link} to={{ pathname: "/", hash: "#home", state: "home" }}>Home</Nav.Link>
          <Nav.Link href="#about" as={Link} to={{ pathname: "/", hash: "#about", state: "about" }}>About Us</Nav.Link>
          <Nav.Link href="#contact" as={Link} to={{ pathname: "/", hash: "#contact", state: "contact" }}>Contact</Nav.Link>
          <Nav.Link href="#team" as={Link} to={{ pathname: "/", hash: "#team", state: "team" }}>Our Team</Nav.Link>
          <Nav.Link href="#team" as={Link} to={{ pathname: "/Projects"}}>Projects</Nav.Link>
          <Nav.Link href="#team" as={Link} to={{ pathname: "/ProjectRequest"}}>Request project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;