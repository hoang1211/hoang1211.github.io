import Comic from "./Comic";
import { getAllComic } from "../../db/db";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { dbRef, db } from "../../firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";

const ComicDb = getAllComic();

const Comics = () => {
  const [comi, setComi] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "comics");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setComi(data);
    });
  }, []);

  
  return (
    <>
      <Container>
        <div className="new-epsion">Truyện mới nhất {">"}</div>
      </Container>
      <Container>
        <Row>
          {comi.map((c) => {
            return (
              <Col sm={4} xs={12} key={c.mid}>
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
