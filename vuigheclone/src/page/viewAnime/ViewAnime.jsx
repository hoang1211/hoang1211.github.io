import { getFilmsByAlias } from "../../db/db";
import ReactPlayer from "react-player";
import "./ViewAnime.css";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./side-bar/Sidebar";
import InformationFilm from "./information/InformationFilm";
import ShowNewFilms from "../../component/newsFilm/ShowNewFilms";
import NewsAnime from "../../component/NewsAnime/NewsAnime";

const ViewAnime = () => {
  const filmPrama = useParams();
  const films = getFilmsByAlias(filmPrama.alias);
  return (
    <div className="player-area">
      <Container>
        <Row>
          <Col xs={8}>
            <ReactPlayer url={films.src} width="100%" height="480px" />
          </Col>
          <Col xs={4}>
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
