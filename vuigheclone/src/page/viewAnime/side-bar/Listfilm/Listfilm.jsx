import { getAllFilms } from "../../../../db/db";
import { ListGroup, Col, Row } from "react-bootstrap";
import "./Listfilm.css";
import { Link } from "react-router-dom";

const listAnime = getAllFilms();
const Listfilms = (props) => {
  return (
    <ListGroup className={"list-films " + `${props.display}`}>
      {listAnime.map((f) => {
        return (
          <ListGroup.Item key={f.id}>
            <Link to={`/anime/` + f.alias}>
              <Row>
                <Col xs={6}>
                  <img src={f.image} />
                </Col>
                <Col xs={6}>
                  <span className="films-name">{f.name}</span>
                </Col>
              </Row>
            </Link>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Listfilms;
