import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../firebase-config";
import WaterItem from "./WaterItem";
import "./Water.css";

const TitleElectric = styled.h1`
  text-align: center;
`;
const LableForm = styled.label`
  margin-right: 10px;
`;
const TitleRoom = styled.h1``;

const BtnSubmit = styled.input``;

const WaterComponent = (props) => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [nuocsodau, setNuocsodau] = useState();
  const [nuocsocuoi, setNuocsocuoi] = useState();
  const [showWater, setShowWater] = useState("");

  const handleShow = (t) => {
    if (t === "hide") {
      setShowWater("");
    } else {
      setShowWater("show-" + `${t}`);
    }
  };

  const handleSubmit = (r) => {
    let temp = l;
    r202.map((i, index) => {
      if (i.thang === thang) {
        temp = index;
      }
    });
    if (temp === l) {
      set(ref(db, "phongchothue/" + `${props.room}` + temp), {
        nuocsodau: nuocsodau,
        nuocsocuoi: nuocsocuoi,
        thang: thang,
      })
        .then(() => {
          alert(
            "Thêm thành công số nước phòng: " + r + " " + "thang: " + thang
          );
          setThang();
          setNuocsocuoi();
          setNuocsodau();
        })
        .catch((err) => {
          alert("Gặp lỗi " + err + " , chưa thêm thành công");
        });
    } else {
      update(ref(db, "phongchothue/" + `${props.room}` + temp), {
        nuocsodau: nuocsodau,
        nuocsocuoi: nuocsocuoi,
      })
        .then(() => {
          alert(
            "Thêm thành công số nước phòng: " + r + " " + "thang: " + thang
          );
          setThang();
          setNuocsocuoi();
          setNuocsodau();
        })
        .catch((err) => {
          alert("Gặp lỗi " + err + " , chưa thêm thành công");
        });
    }
  };

  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + `${props.room}`);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);

  let l = r202.length;
  return (
    <Container>
      <div>
        <div className="wrap-room">
          <Container>
            <Row>
              <Col xs="3" sm="12">
                <TitleRoom>{props.room}</TitleRoom>
              </Col>
              <Col xs="3" sm="1">
                <Button onClick={() => handleShow(props.room)}>Hiển thị</Button>
              </Col>
              <Col xs="2" sm="1">
                <Button onClick={() => handleShow("hide")}>Ẩn </Button>
              </Col>
            </Row>
            <div className={`${showWater}` + " wrap-table"}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tháng</th>
                    <th>Số Đầu</th>
                    <th>Số cuối</th>
                    <th>Tiêu thụ</th>
                    <th colSpan={2}>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {r202.map((i, index) => {
                    return (
                      <WaterItem
                        key={index}
                        index={index}
                        thang={i.thang}
                        nuocsodau={i.nuocsodau}
                        nuocsocuoi={i.nuocsocuoi}
                        room={props.room}
                      />
                    );
                  })}
                </tbody>
              </Table>
              <form onSubmit={() => handleSubmit(props.room)}>
                <Row>
                  <Col sm={3}>
                    <LableForm>Tháng</LableForm>
                    <input
                      type="month"
                      value={thang}
                      onChange={(e) => setThang(e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Nước số đầu</LableForm>
                    <input
                      type="text"
                      value={nuocsodau}
                      onChange={(e) => setNuocsodau(e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Nước số cuối</LableForm>
                    <input
                      type="text"
                      value={nuocsocuoi}
                      onChange={(e) => setNuocsocuoi(e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <BtnSubmit type="submit" value="Thêm" />
                  </Col>
                </Row>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default WaterComponent;
