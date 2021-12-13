import Banner from "../component/banner/Banner";
import "./Home.css";
import ShowNewFilms from "../component/newsFilm/ShowNewFilms";
import { TinAnime } from "../component/tinAnime/tinAnime";
const Home = () => {
  return (
    <>
      <div className="main">
        <Banner />
        <ShowNewFilms />
        <TinAnime />
      </div>
    </>
  );
};
export default Home;
