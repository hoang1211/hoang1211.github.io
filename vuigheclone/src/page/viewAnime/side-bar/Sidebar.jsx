import { Container, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import { getAllFilms } from "../../../db/db";
import "./Sidebar.css";

const dbFilms = getAllFilms();
const Sidebar = () => {
  return (
    <Container>
      <div className="side-bar">
        <Row className="header">
          <Col xs={6}>
            <span className="list">Danh sách các tập</span>
          </Col>
          <Col xs={6}>
            <span className="commend">Bình Luận</span>
          </Col>
        </Row>
        <Row className="list-detail">
          <ListGroup>
            {/* {dbFilms.map((f) => {
              return (
                <ListGroup.Item key={f.id}>
                  <span>{f.name}</span>
                </ListGroup.Item>
              );
            })} */}
            <ListGroupItem>A</ListGroupItem>
          </ListGroup>
        </Row>
      </div>
    </Container>
  );
};
export default Sidebar;
