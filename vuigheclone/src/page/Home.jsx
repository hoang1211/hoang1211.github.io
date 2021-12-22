import Banner from "../component/banner/Banner";
import "./Home.css";
import ShowNewFilms from "../component/newsFilm/ShowNewFilms";
import NewsAnime from "../component/NewsAnime/NewsAnime";
import Comics from "../component/comics/Comics";
const Home = () => {
  return (
    <>
      <div className="main">
        <Banner />
        <ShowNewFilms title="Tập mới nhất" />
        <NewsAnime />
        <Comics />
      </div>
    </>
  );
};
export default Home;
