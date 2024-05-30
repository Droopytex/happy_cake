// elementos de React- Bootstrap
import Container from "react-bootstrap/Container";
// import  Nav  from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar className="bg-danger" variant="dark">
      <Container className="justify-content-start">
        <Navbar.Brand>Happy Cake</Navbar.Brand>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          Contacto
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
