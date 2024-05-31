// elementos de React- Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">
              Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/" className="link-home">
          <Navbar.Brand href="#">Happy Cake</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
