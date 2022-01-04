import { ListGroup, Col, Row } from "react-bootstrap";
import "./Listfilm.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, query } from "firebase/database";
import { db } from "../../../../firebase-config";

const Listfilms = (props) => {
  const [listAnime, setListAnime] = useState([]);
  useEffect(() => {
    const dataRef = ref(db, "films");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setListAnime(data);
    });
  }, []);
  return (
    <ListGroup className={"list-films " + `${props.display}`}>
      {listAnime.map((f) => {
        return (
          <ListGroup.Item key={f.fid}>
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
