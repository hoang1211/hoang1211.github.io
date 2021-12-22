import Banner from "../component/banner/Banner";
import "./Home.css";
import ShowNewFilms from "../component/newsFilm/ShowNewFilms";
import NewAnime from "../component/NewAnime/NewAnime";
import Comics from "../component/comics/Comics";
const Home = () => {
  return (
    <>
      <div className="main">
        <Banner />
        <ShowNewFilms title="Tập mới nhất" />
        <NewAnime />
        <Comics />
      </div>
    </>
  );
};
export default Home;
