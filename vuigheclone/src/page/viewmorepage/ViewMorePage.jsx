import "./ViewMorepage.css";
import ShowNewFilms from "../../component/newsFilm/ShowNewFilms";
import NewsAnime from "../../component/NewsAnime/NewsAnime";
import Comics from "../../component/comics/Comics";
const ViewMorePage = () => {
  return (
    <>
      <div className="main-content">
        <ShowNewFilms title="Anime" />
        <NewsAnime />
        <Comics />
      </div>
    </>
  );
};
export default ViewMorePage;
