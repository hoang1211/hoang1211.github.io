import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../firebase-config";
import DichvuItem from "./DichvuItem";

const TitleElectric = styled.h1`
  text-align: center;
`;

const LableForm = styled.label`
  margin-right: 10px;
`;

const TitleRoom = styled.h1``;

const BtnSubmit = styled.input``;

const DichvuComponent = (props) => {
  const [r202, setR202] = useState([]);
  const [thang, setThang] = useState();
  const [maygiat, setMaygiat] = useState();
  const [tienhotro, setTienhotro] = useState(0);
  const [tienphong, setTienphong] = useState();
  const [show, setShow] = useState("");

  const handleShow = (t) => {
    if (t === "hide") {
      setShow("");
    } else {
      setShow("show-" + `${t}`);
    }
  };
  let l = r202.length;

  const handleSubmit = (r) => {
    let temp = l;
    r202.map((i, index) => {
      if (i.thang === thang) {
        temp = index;
      }
    });
    if (temp === l) {
      set(ref(db, "phongchothue/" + `${props.room}` + "/" + temp), {
        wifi: 100000,
        vesinh: 50000,
        maygiat: maygiat,
        thangmay: 50000,
        tienhotro: tienhotro,
        tienphong: tienphong,
        thang: thang,
      })
        .then(() => {
          alert(
            "Thêm thành công số điện phòng: " + r + " " + "thang: " + thang
          );
          setThang();
          setMaygiat(0);
          setTienhotro(0);
          setTienphong(0);
        })
        .catch((err) => {
          alert("Gặp lỗi " + err + " , chưa thêm thành công");
        });
    } else {
      update(ref(db, "phongchothue/" + `${props.room}` + "/" + temp), {
        wifi: 100000,
        vesinh: 50000,
        maygiat: maygiat,
        thangmay: 50000,
        tienhotro: tienhotro,
        tienphong: tienphong,
      })
        .then(() => {
          alert(
            "Thêm thành công số điện phòng: " + r + " " + "thang: " + thang
          );
          setThang();
          setMaygiat(0);
          setTienhotro(0);
          setTienphong(0);
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
                    <th>Wifi</th>
                    <th>Vệ Sinh</th>
                    <th>Máy giặt</th>
                    <th>Thang máy</th>
                    <th>Tiền hỗ trợ</th>
                    <th>Tiền phòng</th>
                    <th colSpan={2}>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {r202.map((i, index) => {
                    return (
                      <DichvuItem
                        key={index}
                        index={index}
                        thang={i.thang}
                        tienhotro={i.tienhotro}
                        wifi={i.wifi}
                        vesinh={i.vesinh}
                        maygiat={i.maygiat}
                        thangmay={i.thangmay}
                        tienphong={i.tienphong}
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
                    <LableForm>Máy giặt</LableForm>
                    <input
                      type="number"
                      value={maygiat}
                      onChange={(e) => setMaygiat(parseInt(e.target.value, 10))}
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Tiền hỗ trợ</LableForm>
                    <input
                      type="number"
                      value={tienhotro}
                      onChange={(e) =>
                        setTienhotro(parseInt(e.target.value, 10))
                      }
                    ></input>
                  </Col>
                  <Col sm={3}>
                    <LableForm>Tiền phòng</LableForm>
                    <input
                      type="number"
                      value={tienphong}
                      onChange={(e) =>
                        setTienphong(parseInt(e.target.value, 10))
                      }
                    ></input>
                  </Col>
                  <Col xs={3}>
                    <Button type="submit">Thêm </Button>
                    {/* <BtnSubmit type="submit" value="Thêm" /> */}
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

export default DichvuComponent;
