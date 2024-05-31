// elementos de React- Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { LuCake } from "react-icons/lu";
import { BiSolidHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">
              {<BiSolidHome />} Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              {<GrContact />}Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/" className="link-home">
          <Navbar.Brand href="#">{<LuCake />}</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
