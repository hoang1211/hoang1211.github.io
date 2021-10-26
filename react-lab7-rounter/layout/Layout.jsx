import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

export default (props) => {
  return (
    <Container>
      <Row>
        <Col xs>
          <header>
            <Link to="/">Home page</Link>
          </header>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>SideBar</Col>
        <Col lg={9}>{props.children}</Col>
      </Row>
    </Container>
  );
};
