import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavMenu from "./navmenu/NavMenu";

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: red;
`;
const TitleHouse = styled.h2`
  text-align: center;
  margin-bottom: 70px;
  font-style: italic;
`;
const Header = () => {
  const location = useLocation();
  if (location.pathname == "/") {
    return (
      <Container>
        <Title>Quản Lý Phòng Trọ</Title>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>Quản Lý Phòng Trọ</Title>
        <TitleHouse>Chung cư thảo nguyên</TitleHouse>
        <NavMenu></NavMenu>
      </Container>
    );
  }
};

export default Header;
