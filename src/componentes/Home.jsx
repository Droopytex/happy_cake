import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <Container className="box">
      <div>
        <h1> Una Happy Cake te espera!!</h1>

        <div>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rainbow_cake_20402_16x9.jpg"
                rounded
              />
            </Col>
          </Row>
          <h4>
            Ven a disfrutar de nuestras ricas tortas y pasteles. Hacemos
            preparaciones a pedido.
          </h4>
        </div>
      </div>
    </Container>
  );
}

export default Home;
