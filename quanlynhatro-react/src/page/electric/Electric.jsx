import { Col, Row, Container, Table, Button } from "react-bootstrap";
import style from "style-component";
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
} from "firebase/database";
import { db } from "../../firebase-config";
import ElectricItem from "./ElectricItem";

const Electric = () => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [diensodau, setDiensodau] = useState();
  const [diensocuoi, setDiensocuoi] = useState();

  const handleSubmit = (r) => {
    set(ref(db, "P202/" + l), {
      diensodau: diensodau,
      diensocuoi: diensocuoi,
      thang: thang,
    });
    alert("Them thanh cong so dien phong: " + r + " " + "thang: " + thang);
    setThang();
    setDiensocuoi();
    setDiensodau();
  };

  const [r301, setR301] = useState([]);
  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + "P202");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);

  console.log(r202);
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
      <h1>Quản lý điện</h1>
      <div>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan={4}>P202</th>
              </tr>
              <tr>
                <th>Tháng</th>
                <th>Số Đầu</th>
                <th>Số cuối</th>
                <th>Tiêu thụ</th>
              </tr>
            </thead>
            <tbody>
              {r202.map((i, index) => {
                return (
                  <ElectricItem
                    key={index}
                    thang={i.thang}
                    diensodau={i.diensodau}
                    diensocuoi={i.diensocuoi}
                  />
                );
              })}
            </tbody>
          </Table>
          <form onSubmit={() => handleSubmit("P202")}>
            <Row>
              <Col xs={3}>
                <label>Tháng</label>
                <input
                  type="date"
                  value={thang}
                  onChange={(e) => setThang(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <label>Điện số đầu</label>
                <input
                  type="text"
                  value={diensodau}
                  onChange={(e) => setDiensodau(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <label>Điện số cuối</label>
                <input
                  type="text"
                  value={diensocuoi}
                  onChange={(e) => setDiensocuoi(e.target.value)}
                ></input>
              </Col>
              <Col xs={3}>
                <input type="submit" value="Thêm" className="btn-submit" />
              </Col>
            </Row>
          </form>
        </Container>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan={4}>P301</th>
              </tr>
              <tr>
                <th>Tháng</th>
                <th>Số Đầu</th>
                <th>Số cuối</th>
                <th>Tiêu thụ</th>
              </tr>
            </thead>
            <tbody>
              {r301.map((i, index) => {
                return (
                  <ElectricItem
                    key={index}
                    thang={i.thang}
                    diensodau={i.diensodau}
                    diensocuoi={i.diensocuoi}
                  />
                );
              })}
            </tbody>
          </Table>
          <Button>Thêm</Button>
        </Container>
      </div>
    </Container>
  );
};

export default Electric;
