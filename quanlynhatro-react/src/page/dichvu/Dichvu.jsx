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
    </Container>
  );
};

export default Dichvu;
