import { Container, Col, Row } from "react-bootstrap";
import { getAllTinAnime } from "../../db/db";
import NewAnimeShow from "./NewsAnimeShow";

const TinAnimeDb = getAllTinAnime();

const NewAnime = () => {
  return (
    <>
      <Container>
        <div className="new-epsion">Tin anime {">"}</div>
      </Container>
      <Container>
        <Row>
          {TinAnimeDb.map((t) => {
            return (
              <Col xs={3} key={t.id}>
                <NewAnimeShow src={t.src} image={t.image} content={t.content} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default NewAnime;
