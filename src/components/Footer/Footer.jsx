import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => (
  <Navbar as="footer" bg="dark" variant="dark" className="py-0 footer">
    <Navbar.Text className="text-center mx-auto">
      © 2019 haifa:dev community (non-profit). View this website's source code
      <a href="https://github.com/haifa-dev/haifa-dev-website"> here</a>.
    </Navbar.Text>
  </Navbar>
);

export default Footer;
