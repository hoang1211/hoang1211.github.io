import { getFilmsByAlias } from "../../db/db";
import ReactPlayer from "react-player";
import "./ViewAnime.css";
import { useParams } from "react-router-dom";

const ViewAnime = () => {
  const filmPrama = useParams();
  const films = getFilmsByAlias(filmPrama.alias);
  return (
    <div className="player-area">
      <ReactPlayer url={films.src} />
    </div>
  );
};

export default ViewAnime;
