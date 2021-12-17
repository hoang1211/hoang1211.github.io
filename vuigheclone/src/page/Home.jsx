import Banner from "../component/banner/Banner";
import "./Home.css";
import ShowNewFilms from "../component/newsFilm/ShowNewFilms";
import { TinAnime } from "../component/tinAnime/tinAnime";
import Comics from "../component/comics/Comics";
const Home = () => {
  return (
    <>
      <div className="main">
        <Banner />
        <ShowNewFilms title="Tập mới nhất" />
        <TinAnime />
        <Comics />
      </div>
    </>
  );
};
export default Home;
