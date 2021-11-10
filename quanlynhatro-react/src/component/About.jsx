import { Container, Row, Col } from "react-bootstrap";
import { useTitle } from "../hooks/useTitle";

export default () => {
  useTitle("About 1");
  return (
    <Container>
      <Row>
        <Col>
          <h1>About</h1>
        </Col>
      </Row>
    </Container>
  );
};
