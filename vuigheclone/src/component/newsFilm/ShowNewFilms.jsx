import { NewFilms } from "./NewFilms";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const ShowNewFilms = (props) => {
  const [film, setFilm] = useState([]);

  const dbRef = ref(db);
  useEffect(() => {
    get(child(dbRef, `films`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFilm(snapshot.val());
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   const dataRef = ref(db, "films");
  //   onValue(dataRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setFilm(data);
  //   });
  // }, []);

  return (
    <Container>
      <div className="new-epsion">
        {props.title} {">"}
      </div>
      <Row>
        {film.map((f) => {
          return (
            <Col xs={6} sm={3} key={f.fid}>
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
