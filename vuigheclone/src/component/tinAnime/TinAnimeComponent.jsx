import { Col, Row } from "react-bootstrap";
import "./TinAnime.css";

export const TinAnimeComponent = (props) => {
  return (
    <div>
      <a href={props.src} className="tinanime-item">
        <Row>
          <Col className="image">
            <img src={props.image} />
          </Col>
          <Col className="content">{props.content}</Col>
        </Row>
      </a>
    </div>
  );
};
