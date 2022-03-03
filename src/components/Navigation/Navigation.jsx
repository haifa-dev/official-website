import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand
          href="#home"
          as={Link}
          to={{ pathname: "/", hash: "#home", state: "home" }}
        >
          <span style={{ color: "green" }} className="logo">
            haifa
          </span>
          <span className="logo">:dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 pr-1">
            <Nav.Link
              href="#home"
              as={Link}
              to={{ pathname: "/", hash: "#home", state: "home" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              as={Link}
              to={{ pathname: "/", hash: "#about", state: "about" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#contact"
              as={Link}
              to={{ pathname: "/", hash: "#contact", state: "contact" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#team"
              as={Link}
              to={{ pathname: "/", hash: "#team", state: "team" }}
            >
              Our Team
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/Portfolio" }}>
              Portfolio
            </Nav.Link>
            {/* <Nav.Link as={Link} to={{ pathname: "/ProjectRequest"}} className={styles.standOutNavItem}>Request a project</Nav.Link> */}
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/groups/haifadev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.facebook.com/images/fb_icon_325x325.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png"
                  alt="WhatsApp"
                />
              </a>
              <a
                href="https://www.meetup.com/Haifa-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png"
                  alt="Meetup"
                />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
