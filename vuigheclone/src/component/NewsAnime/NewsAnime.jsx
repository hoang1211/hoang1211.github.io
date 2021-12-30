import { Container, Col, Row } from "react-bootstrap";
import NewAnimeShow from "./NewsAnimeShow";
import { db } from "../../firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const NewAnime = () => {
  const [tinAnimeDb, setTinAnimeDb] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "tinAnime");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setTinAnimeDb(data);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="new-epsion">Tin anime {">"}</div>
      </Container>
      <Container>
        <Row>
          {tinAnimeDb.map((t) => {
            return (
              <Col sm={3} xs={12} key={t.tid}>
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
