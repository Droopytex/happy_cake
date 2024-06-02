import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { LuCake } from "react-icons/lu";

function Contacto() {
  return (
    <>
      <div className="box mt-4">
        <LuCake size={100} />
        <Form.Label htmlFor="basic-url">
          Estamos listos para que atenderte
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Hola</InputGroup.Text>
          <Form.Control placeholder="Ingrese su mail" />
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>Cuál es su Happy Pedido?</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <div>
          <Button className="mt-4">Enviar</Button>
        </div>
      </div>
    </>
  );
}

export default Contacto;
