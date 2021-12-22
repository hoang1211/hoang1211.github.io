import { Col, Row } from "react-bootstrap";
import "./NewAnime.css";

const NewAnimeShow = (props) => {
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
export default NewAnimeShow;
