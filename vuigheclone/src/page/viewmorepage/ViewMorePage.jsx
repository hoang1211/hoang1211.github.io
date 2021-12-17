import "./ViewMorepage.css";
import ShowNewFilms from "../../component/newsFilm/ShowNewFilms";
import { TinAnime } from "../../component/tinAnime/tinAnime";
import Comics from "../../component/comics/Comics";
const ViewMorePage = () => {
  return (
    <>
      <div className="main-content">
        <ShowNewFilms title="Anime" />
        <TinAnime />
        <Comics />
      </div>
    </>
  );
};
export default ViewMorePage;
