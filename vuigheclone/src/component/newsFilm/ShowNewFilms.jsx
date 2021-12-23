import { NewFilms } from "./NewFilms";
import { getAllFilms } from "../../db/db";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

const ShowNewFilms = (props) => {
  const [film, setFilm] = useState(getAllFilms());
  return (
    <Container>
      <div className="new-epsion">
        {props.title} {">"}
      </div>
      <Row>
        {film.map((f) => {
          return (
            <Col xs={6} sm={3} key={f.id}>
              <NewFilms
                link={`/` + f.type + `/` + f.alias}
                name={f.name}
                image={f.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default ShowNewFilms;
