import { Col, Row, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import HouseComponent from "./HouseComponent";

const TitleRoom = styled.h1`
  text-align: center;
`;

const House = () => {
  return (
    <Container>
      <TitleRoom>Danh sách phòng</TitleRoom>
      <ul>
        <li>
          <HouseComponent room="P202" />
        </li>
        <li>
          <HouseComponent room="P301" />
        </li>
      </ul>
    </Container>
  );
};
export default House;
