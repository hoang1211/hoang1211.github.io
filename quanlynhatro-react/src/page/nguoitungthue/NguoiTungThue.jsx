import { Col, Row, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import NguoiItem from "./NguoiItem";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const TableWrap = styled.div`
  padding-top: 10px;
`;

const TitleElectric = styled.h1`
  text-align: center;
`;

const NguoiTungThue = () => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "nguoitungthue");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setTemp(data);
    });
  }, []);
  if (temp === null) {
    return (
      <Container>
        <TitleElectric>Danh sách từng thuê</TitleElectric>
      </Container>
    );
  }
  return (
    <Container>
      <TitleElectric>Danh sách từng thuê</TitleElectric>
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
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {temp.map((p, index) => {
              return (
                <NguoiItem
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
                />
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
    </Container>
  );
};
export default NguoiTungThue;
