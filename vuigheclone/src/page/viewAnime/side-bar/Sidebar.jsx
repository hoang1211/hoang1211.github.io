import { Col, Row } from "react-bootstrap";
import "./Sidebar.css";
import Listfilms from "./Listfilm/Listfilm";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("listF");

  return (
    <div className="side-bar">
      <Row className="header">
        <Col xs={6}>
          <span
            onClick={() => {
              setActive("listF");
            }}
            className={
              "list " + `${active == "listF" ? "active-click-link" : ""}`
            }
          >
            Danh sách các tập
          </span>
        </Col>
        <Col xs={6}>
          <span
            onClick={() => {
              setActive("comments");
            }}
            className={
              "commend " +
              `${active == "comments" ? "active-click-commend" : ""}`
            }
          >
            Bình Luận
          </span>
        </Col>
      </Row>
      <div className="show-detail">
        <Listfilms display={`${active == "listF" ? "display-list" : ""}`} />
      </div>
    </div>
  );
};
export default Sidebar;
