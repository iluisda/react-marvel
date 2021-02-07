import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./style.css";
const Header = ({ data, logo }) => {
  return (
      <Navbar fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              className="d-inline-block align-top img-fluid"
              alt="Rosbaco Logo"
            ></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;
