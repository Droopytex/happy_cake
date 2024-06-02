import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Home() {
  return (
    <>
      <Container className="box">
        <div>
          <h1>Es broma no?</h1>

          <div>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://s3.envato.com/files/264241839/DSCF8701.JPG"
                  rounded
                />
              </Col>
            </Row>
            <h6>lo que buscas no existe</h6>
          </div>
        </div>
      </Container>
    </>
  );
}
