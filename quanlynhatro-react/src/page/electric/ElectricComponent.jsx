import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../firebase-config";
import ElectricItem from "./ElectricItem";
import "./Electric.css";

const TitleElectric = styled.h1`
  text-align: center;
`;

const LableForm = styled.label`
  margin-right: 10px;
`;

const TitleRoom = styled.h1``;

const BtnSubmit = styled.input``;

const ElectricComponent = (props) => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [diensodau, setDiensodau] = useState();
  const [diensocuoi, setDiensocuoi] = useState();
  const [show, setShow] = useState("");

  const handleShow = (t) => {
    if (t === "hide") {
      setShow("");
    } else {
      setShow("show-" + `${t}`);
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
      set(ref(db, "phongchothue/" + `${props.room}` + "/" + temp), {
        diensodau: diensodau,
        diensocuoi: diensocuoi,
        thang: thang,
      })
        .then(() => {
          alert(
            "Thêm thành công số điện phòng: " + r + " " + "thang: " + thang
          );
          setThang();
          setDiensocuoi();
          setDiensodau();
        })
        .catch((err) => {
          alert("Gặp lỗi " + err + " , chưa thêm thành công");
        });
    } else {
      update(ref(db, "phongchothue/" + `${props.room}` + "/" + temp), {
        diensodau: diensodau,
        diensocuoi: diensocuoi,
      })
        .then(() => {
          alert(
            "Thêm thành công số điện phòng: " + r + " " + "thang: " + thang
          );
          setDiensocuoi();
          setDiensodau();
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
            <div className={`${show}` + " wrap-table"}>
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
                      <ElectricItem
                        key={index}
                        index={index}
                        thang={i.thang}
                        diensodau={i.diensodau}
                        diensocuoi={i.diensocuoi}
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
                    <LableForm>Điện số đầu</LableForm>
                    <input
                      type="number"
                      value={diensodau}
                      onChange={(e) =>
                        setDiensodau(parseInt(e.target.value, 10))
                      }
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Điện số cuối</LableForm>
                    <input
                      type="number"
                      value={diensocuoi}
                      onChange={(e) =>
                        setDiensocuoi(parseInt(e.target.value, 10))
                      }
                    ></input>
                  </Col>
                  <Col xs={3}>
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

export default ElectricComponent;
