import { searchFilmsByChar } from "../../db/db";
import { useParams } from "react-router-dom";
import { NewFilms } from "../../component/newsFilm/NewFilms";
import { Container, Col, Row } from "react-bootstrap";

const Search = () => {
  const searchParam = useParams();
  const filmsSearch = searchFilmsByChar(searchParam.searchChar);
  return (
    <Container>
      <div className="main-content">
        <div className="new-epsion">kết quả</div>
        <Container>
          <Row>
            {filmsSearch.map((f) => {
              return (
                <Col sm={3} xs={12} key={f.id}>
                  <NewFilms
                    link={`/` + f.type + `/` + f.alias}
                    name={f.name}
                    image={f.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </Container>
  );
};
export default Search;
