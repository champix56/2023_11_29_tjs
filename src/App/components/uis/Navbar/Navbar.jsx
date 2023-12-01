import React from "react";

import styles from "./Navbar.module.css";
//import { Container, Nav,Navbar as NavBar } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/">
            <NavBar.Brand>Home</NavBar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/thumbnail">
              <Nav.Link>Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new">
              <Nav.Link>new</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/editor/1">
              <Nav.Link>new</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
