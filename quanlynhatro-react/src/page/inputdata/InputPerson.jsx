import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "../../firebase-config";
import "./InputPerson.css";

const InputPerson = () => {
  const [ten, setTen] = useState("");
  const [namsinh, setNamSinh] = useState("");
  const [phone, setPhone] = useState(0);
  const [quequan, setQueQuan] = useState("");
  const [cccd, setCccd] = useState(0);
  const [nghenghiep, setNgheNghiep] = useState("");
  const [bienxe, setBienXe] = useState("");
  const [ngayden, setNgayDen] = useState("");
  const [ngaykyhopdong, setNgayKyHopDong] = useState("");
  const [ngayhethanhopdong, setNgayHetHanHopDong] = useState("");
  const [tiencoc, setTienCoc] = useState(0);
  const [room, setRoom] = useState("");
  const [person, setPerson] = useState([]);
  useEffect(() => {
    const dataRef = ref(db, "person");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setPerson(data);
    });
  }, []);
  let l = person.length;
  console.log(l);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    set(ref(db, "person/" + l), {
      name: ten,
      namsinh: namsinh,
      phone: phone,
      quequan: quequan,
      CCCD: cccd,
      nghenghiep: nghenghiep,
      bienxe: bienxe,
      ngayden: ngayden,
      ngaykyhopdong: ngaykyhopdong,
      ngayhethanhopdong: ngayhethanhopdong,
      tiencoc: tiencoc,
      room: room,
    });
    alert("Them thanh cong nguoi thue: " + ten);
    setTen("");
    setNamSinh("");
    setPhone("");
    setQueQuan("");
    setCccd("");
    setNgheNghiep("");
    setBienXe("");
    setNgayDen("");
    setNgayKyHopDong("");
    setNgayHetHanHopDong("");
    setTienCoc("");
    setRoom("");
  };

  return (
    <Container>
      <h1 className="input-title">Thêm người thuê</h1>
      <form onSubmit={handleSubmit} className="form-input">
        <Row>
          <Col xs={6}>
            <label className="lbl">Tên:</label>
            <input
              className="input-text"
              type="text"
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Năm sinh:</label>
            <input
              className="input-text"
              type="date"
              value={namsinh}
              onChange={(e) => setNamSinh(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <label className="lbl">Phone:</label>
            <input
              className="input-text"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Quê quán:</label>
            <input
              className="input-text"
              type="text"
              value={quequan}
              onChange={(e) => setQueQuan(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <label className="lbl">CCCD:</label>
            <input
              className="input-text"
              type="text"
              value={cccd}
              onChange={(e) => setCccd(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Nghề nghiệp:</label>
            <input
              className="input-text"
              type="text"
              value={nghenghiep}
              onChange={(e) => setNgheNghiep(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <label className="lbl">Biển xe:</label>
            <input
              className="input-text"
              type="text"
              value={bienxe}
              onChange={(e) => setBienXe(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Ngày đến:</label>
            <input
              className="input-text"
              type="date"
              value={ngayden}
              onChange={(e) => setNgayDen(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <label className="lbl">Ngày ký hợp đồng:</label>
            <input
              className="input-text"
              type="date"
              value={ngaykyhopdong}
              onChange={(e) => setNgayKyHopDong(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Ngày hết hạn hợp đồng:</label>
            <input
              className="input-text"
              type="date"
              value={ngayhethanhopdong}
              onChange={(e) => setNgayHetHanHopDong(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <label className="lbl">Tiền cọc:</label>
            <input
              className="input-text"
              type="text"
              value={tiencoc}
              onChange={(e) => setTienCoc(e.target.value)}
            />
          </Col>
          <Col xs={6}>
            <label className="lbl">Phòng:</label>
            <input
              className="input-text"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </Col>
        </Row>
        <input type="submit" value="Submit" className="btn-submit" />
      </form>
    </Container>
  );
};
export default InputPerson;
