import { Container, Col, Row } from "react-bootstrap";
import { getAllTinAnime } from "../../db/db";
import { TinAnimeComponent } from "./TinAnimeComponent";

const TinAnimeDb = getAllTinAnime();

export const TinAnime = () => {
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
                <TinAnimeComponent
                  src={t.src}
                  image={t.image}
                  content={t.content}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
