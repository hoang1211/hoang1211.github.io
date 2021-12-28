import { Col, Row } from "react-bootstrap";
import "./NewsAnime.css";

const NewAnimeShow = (props) => {
  return (
    <div className="items">
      <a href={props.src} className="tinanime-item">
        <Row>
          <Col sm={8} xs={8} className="image">
            <img src={props.image} />
          </Col>
          <Col sm={4} xs={4} className="content">
            {props.content}
          </Col>
        </Row>
      </a>
    </div>
  );
};
export default NewAnimeShow;
