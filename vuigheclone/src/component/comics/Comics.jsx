import Comic from "./Comic";
import { getAllComic } from "../../db/db";
import { Container, Col, Row } from "react-bootstrap";

const ComicDb = getAllComic();

const Comics = () => {
  return (
    <>
      <Container>
        <div className="new-epsion">Truyện mới nhất {">"}</div>
      </Container>
      <Container>
        <Row>
          {ComicDb.map((c) => {
            return (
              <Col sm={4} xs={12} key={c.id}>
                <Comic
                  src={c.src}
                  name={c.name}
                  detail={c.detail}
                  link={c.link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Comics;
