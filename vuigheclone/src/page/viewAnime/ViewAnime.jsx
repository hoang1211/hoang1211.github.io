import { getFilmsByAlias } from "../../db/db";
import ReactPlayer from "react-player";
import "./ViewAnime.css";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./side-bar/Sidebar";

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
      </Container>
    </div>
  );
};

export default ViewAnime;
