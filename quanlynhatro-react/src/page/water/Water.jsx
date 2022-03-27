import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../firebase-config";
import WaterComponent from "./WaterComponent";
import "./Water.css";

const TitleElectric = styled.h1`
  text-align: center;
`;
const LableForm = styled.label`
  margin-right: 10px;
`;
const TitleRoom = styled.h1``;

const BtnSubmit = styled.input``;
const Water = (props) => {
  return (
    <Container>
      <TitleElectric>Quản lý nước</TitleElectric>
      <WaterComponent room="P202" />
      <WaterComponent room="P301" />
      <WaterComponent room="P302" />
      <WaterComponent room="P401" />
      <WaterComponent room="P402" />
      <WaterComponent room="P501" />
      <WaterComponent room="P502" />
      <WaterComponent room="P601" />
      <WaterComponent room="P602" />
      <WaterComponent room="P701" />
      <WaterComponent room="P702" />
    </Container>
  );
};

export default Water;
