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
const Water = () => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [nuocsodau, setDiensodau] = useState();
  const [nuocsocuoi, setDiensocuoi] = useState();
  const [showWater, setShowWater] = useState("");

  const handleShow = (t) => {
    if (t === "202") {
      setShowWater("show-" + `${t}`);
    } else {
      setShowWater("");
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
      set(ref(db, "phongchothue/P202/" + temp), {
        nuocsodau: nuocsodau,
        nuocsocuoi: nuocsocuoi,
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
      update(ref(db, "phongchothue/P202/" + temp), {
        nuocsodau: nuocsodau,
        nuocsocuoi: nuocsocuoi,
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
    }
  };

  const [r301, setR301] = useState([]);
  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + "P202");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);

  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + "P301");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR301(data);
    });
  }, []);

  let l = r202.length;
  return (
    <Container>
      <TitleElectric>Quản lý nước</TitleElectric>
      <div>
        <div className="wrap-room">
          <Container>
            <Row>
              <Col xs="3" sm="12">
                <TitleRoom>P202</TitleRoom>
              </Col>
              <Col xs="3" sm="1">
                <Button onClick={() => handleShow("202")}>Hiển thị</Button>
              </Col>
              <Col xs="2" sm="1">
                <Button onClick={() => handleShow("n")}>Ẩn </Button>
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
                        room="P202"
                      />
                    );
                  })}
                </tbody>
              </Table>
              <form onSubmit={() => handleSubmit("P202")}>
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
                      onChange={(e) => setDiensodau(e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Nước số cuối</LableForm>
                    <input
                      type="text"
                      value={nuocsocuoi}
                      onChange={(e) => setDiensocuoi(e.target.value)}
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

export default Water;
