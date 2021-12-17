import { Col, Row } from "react-bootstrap";
import "./Comic.css";

const Comic = (props) => {
  return (
    <div className="comic-item">
      <a href={props.link} className="comic-link">
        <Row>
          <Col className="comic-pic">
            <img src={props.src} />
          </Col>
          <Col>
            <Row>
              <span className="comic-name">{props.name}</span>
            </Row>
            <Row>
              <p className="comic-detail">{props.detail}</p>
            </Row>
          </Col>
        </Row>
      </a>
    </div>
  );
};
export default Comic;
