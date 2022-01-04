import ReactPlayer from "react-player";
import "./ViewAnime.css";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import Sidebar from "./side-bar/Sidebar";
import InformationFilm from "./information/InformationFilm";
import ShowNewFilms from "../../component/newsFilm/ShowNewFilms";
import NewsAnime from "../../component/NewsAnime/NewsAnime";
import {
  get,
  getDatabase,
  ref,
  onValue,
  query,
  equalTo,
  orderByChild,
} from "firebase/database";
import { useEffect, useState } from "react";
import { db, getF } from "../../firebase-config";
import { getFilmsByAlias } from "../../db/db";

const ViewAnime = () => {
  const filmPrama = useParams();
  const films = getFilmsByAlias(filmPrama.alias);
  const [f, setF] = useState([]);
  useEffect(() => {
    const dataQue = query(
      ref(db, "films"),
      orderByChild("alias"),
      equalTo(filmPrama.alias)
    );
    get(dataQue).then((snapshot) => {
      let dataF = [];
      snapshot.forEach((childSnapshot) => {
        dataF.push(childSnapshot.val());
      });
      setF(dataF);
    });
  }, []);

  console.log(films);
  return (
    <div className="player-area">
      <Container>
        <Row>
          <Col sm={8} xs={12}>
            <ReactPlayer url={films.src} width="100%" height="480px" />
          </Col>
          <Col sm={4} xs={12}>
            <Sidebar />
          </Col>
        </Row>
        <Row>
          <InformationFilm
            name={films.name}
            like={films.like}
            follow={films.follow}
          />
        </Row>
      </Container>
      <div className="viewmore-area">
        <ShowNewFilms title="Phim mới" />
        <NewsAnime />
      </div>
    </div>
  );
};

export default ViewAnime;
