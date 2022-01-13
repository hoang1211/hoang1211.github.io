import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import ElectricComponent from "./ElectricComponent";
import "./Electric.css";

const TitleElectric = styled.h1`
  text-align: center;
`;

const LableForm = styled.label`
  margin-right: 10px;
`;

const TitleRoom = styled.h1``;

const BtnSubmit = styled.input``;

const Electric = () => {
  return (
    <Container>
      <TitleElectric>Quản lý điện</TitleElectric>
      <ElectricComponent room="P202" />
      <ElectricComponent room="P301" />
    </Container>
  );
};

export default Electric;
