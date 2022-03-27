import { Col, Row, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import HouseManagerItem from "./HouseManagerItem";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { NavLink } from "react-router-dom";

const TableWrap = styled.div`
  padding-top: 10px;
`;

const TitleElectric = styled.h1`
  text-align: center;
`;

const HouseManager = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "person");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setPerson(data);
    });
  }, []);
  return (
    <Container>
      <Row className="line-2">
        <Col xs={6} sm={2}>
          <NavLink to="/addperson" className="nav-bar-link">
            Thêm người thuê
          </NavLink>
        </Col>
        <Col xs={6} sm={2}>
          <NavLink to="/nguoitungthue" className="nav-bar-link">
            Người từng thuê
          </NavLink>
        </Col>
      </Row>
      <TitleElectric>Danh sách người thuê</TitleElectric>
      <TableWrap>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Phòng</th>
              <th>Tên người ở</th>
              <th>Năm sinh</th>
              <th>Điện thoại</th>
              <th>Quê quán</th>
              <th>Số CCCD</th>
              <th>Nghề nghiệp</th>
              <th>Biển xe</th>
              <th>Ngày đến</th>
              <th>Ngày ký hđ</th>
              <th>Ngày hết hđ</th>
              <th>Cọc</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {person.map((p, index) => {
              return (
                <HouseManagerItem
                  key={index}
                  index={index}
                  room={p.room}
                  name={p.name}
                  namsinh={p.namsinh}
                  phone={p.phone}
                  quequan={p.quequan}
                  cccd={p.CCCD}
                  nghenghiep={p.nghenghiep}
                  bienxe={p.bienxe}
                  ngayden={p.ngayden}
                  ngaykyhopdong={p.ngaykyhopdong}
                  ngayhethopdong={p.ngayhethopdong}
                  tiencoc={p.tiencoc}
                />
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
    </Container>
  );
};
export default HouseManager;
