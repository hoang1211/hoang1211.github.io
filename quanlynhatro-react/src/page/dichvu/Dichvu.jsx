import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import DichvuComponent from "./DichvuComponent";

const TitleElectric = styled.h1`
  text-align: center;
`;

const Dichvu = () => {
  return (
    <Container>
      <TitleElectric>Quản lý dịch vụ</TitleElectric>
      <DichvuComponent room="P202" />
      <DichvuComponent room="P301" />
      <DichvuComponent room="P302" />
      <DichvuComponent room="P401" />
      <DichvuComponent room="P402" />
      <DichvuComponent room="P501" />
      <DichvuComponent room="P502" />
      <DichvuComponent room="P601" />
      <DichvuComponent room="P602" />
      <DichvuComponent room="P701" />
      <DichvuComponent room="P702" />
    </Container>
  );
};

export default Dichvu;
