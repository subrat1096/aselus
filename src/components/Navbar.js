import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Logo from "../images/logo-removebg-preview.png";

function NavScroll() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="" width={"48px"} />
          Aselus Enterprises
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/brand">
              Brand
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/Career">
              Career
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
