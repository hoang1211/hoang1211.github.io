import { Col, Row } from "react-bootstrap";
import "./Sidebar.css";
import Listfilms from "./Listfilm/Listfilm";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Row className="header">
        <Col xs={6}>
          <span className="list">Danh sách các tập</span>
        </Col>
        <Col xs={6}>
          <span className="commend">Bình Luận</span>
        </Col>
      </Row>
      <div>
        <Listfilms />
      </div>
    </div>
  );
};
export default Sidebar;
