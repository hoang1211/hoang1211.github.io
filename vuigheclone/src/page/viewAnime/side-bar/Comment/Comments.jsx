import { getAllComments } from "../../../../db/db";
import { ListGroup, Col, Row } from "react-bootstrap";
import "./Comments.css";

const listCmt = getAllComments();
const Comments = (props) => {
  return (
    <ListGroup className={"list-cmt " + `${props.display}`}>
      {listCmt.map((c) => {
        return (
          <ListGroup.Item key={c.id}>
            <Row>
              <span className="cmt-name">{c.name}</span>
              <span className="cmt-content">{c.content}</span>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Comments;
