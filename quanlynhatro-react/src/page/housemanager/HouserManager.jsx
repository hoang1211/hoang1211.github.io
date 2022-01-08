import { Col, Row, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import HouseManagerItem from "./HouseManagerItem";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const TableWrap = styled.div`
  padding-top: 10px;
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
            </tr>
          </thead>
          <tbody>
            {person.map((p, index) => {
              return (
                <HouseManagerItem
                  key={index}
                  stt={index}
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
                  ngayhetdanhopdong={p.ngayhethanhopdong}
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
