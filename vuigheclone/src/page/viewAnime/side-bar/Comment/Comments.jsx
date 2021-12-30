import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../../../firebase-config";
import { ListGroup, Col, Row } from "react-bootstrap";
import "./Comments.css";

const Comments = (props) => {
  const [listCmt, setlistCmt] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "comments");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setlistCmt(data);
    });
  }, []);
  return (
    <ListGroup className={"list-cmt " + `${props.display}`}>
      {listCmt.map((c) => {
        return (
          <ListGroup.Item key={c.cid}>
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
