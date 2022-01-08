import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  get,
  getDatabase,
  ref,
  onValue,
  query,
  equalTo,
  child,
  set,
  update,
} from "firebase/database";
import { db } from "../../firebase-config";
import ElectricItem from "./ElectricItem";

const TitleElectric = styled.h1`
  text-align: center;
`;
const LableForm = styled.label`
  margin-right: 10px;
`;
const dbRef = ref(db);
const BtnSubmit = styled.input``;
const Electric = () => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [diensodau, setDiensodau] = useState();
  const [diensocuoi, setDiensocuoi] = useState();

  const handleSubmit = (r) => {
    let temp = l;
    r202.map((i, index) => {
      if (i.thang === thang) {
        temp = index;
      }
    });
    if (temp === l) {
      set(ref(db, "phongchothue/P202/" + temp), {
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
      update(ref(db, "phongchothue/P202/" + temp), {
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
    const dataRef = ref(db, "phongchothue/" + "P202");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);

  let l = r202.length;
  return (
    <Container>
      <TitleElectric>Quản lý điện</TitleElectric>
      <div>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan={7}>P202</th>
              </tr>
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
                    room="P202"
                  />
                );
              })}
            </tbody>
          </Table>
          <form onSubmit={() => handleSubmit("P202")}>
            <Row>
              <Col xs={3}>
                <LableForm>Tháng</LableForm>
                <input
                  type="month"
                  value={thang}
                  onChange={(e) => setThang(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <LableForm>Điện số đầu</LableForm>
                <input
                  type="text"
                  value={diensodau}
                  onChange={(e) => setDiensodau(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <LableForm>Điện số cuối</LableForm>
                <input
                  type="text"
                  value={diensocuoi}
                  onChange={(e) => setDiensocuoi(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <BtnSubmit type="submit" value="Thêm" />
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </Container>
  );
};

export default Electric;
