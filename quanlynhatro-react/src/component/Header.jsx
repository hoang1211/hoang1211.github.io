import { Container, Row, Col } from "react-bootstrap";
import { useTitle } from "../hooks/useTitle";

export default () => {
  useTitle("Homepage 1");
  return (
    <Container>
      <Row>
        <Col>
          <h1>Homepage</h1>
        </Col>
      </Row>
    </Container>
  );
};
