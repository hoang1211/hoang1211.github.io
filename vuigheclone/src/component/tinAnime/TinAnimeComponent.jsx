import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TinAnime.css";

export const TinAnimeComponent = (props) => {
  return (
    <div>
      <Link to={props.src} className="tinanime-item">
        <Row>
          <Col className="image">
            <img src={props.image} />
          </Col>
          <Col className="content">{props.content}</Col>
        </Row>
      </Link>
    </div>
  );
};
