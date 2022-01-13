import { Col, Row, Container, Button } from "react-bootstrap";
import style from "style-component";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import HouseItem from "./HouseItem";
import { db } from "../../firebase-config";

const HouseComponent = (props) => {
  const [r202, setR202] = useState([]);
  const [show, setShow] = useState("");

  const handleShow = (t) => {
    if (t === "hide") {
      setShow("");
    } else {
      setShow("show-" + `${t}`);
    }
  };

  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + `${props.room}`);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);

  return (
    <Container>
      <div className="wrap-room">
        <h1>{props.room}</h1>
        <Row>
          <Col xs="3" sm="2">
            <Button onClick={() => handleShow(props.room)}>Hiển thị</Button>
          </Col>
          <Col xs="2" sm="1">
            <Button onClick={() => handleShow("hide")}>Ẩn </Button>
          </Col>
        </Row>
        <div className={`${show}` + " wrap-table"}>
          <Container>
            {r202.map((i, index) => {
              return (
                <HouseItem
                  key={index}
                  stt={index}
                  thang={i.thang}
                  diensodau={i.diensodau}
                  diensocuoi={i.diensocuoi}
                  nuocsodau={i.nuocsodau}
                  nuocsocuoi={i.nuocsocuoi}
                  wifi={i.wifi}
                  vesinh={i.vesinh}
                  thangmay={i.thangmay}
                  tienphong={i.tienphong}
                  tienhotro={i.tienhotro}
                  maygiat={i.maygiat}
                />
              );
            })}
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default HouseComponent;
