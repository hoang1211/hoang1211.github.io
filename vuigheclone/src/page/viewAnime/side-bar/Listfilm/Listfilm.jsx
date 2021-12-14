import { getAllFilms } from "../../../../db/db";
import { ListGroup } from "react-bootstrap";

const listAnime = getAllFilms();
const Listfilms = () => {
  return (
    <ListGroup>
      {listAnime.map((f) => {
        return (
          <ListGroup.Item key={f.id}>
            <span>{f.name}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Listfilms;
