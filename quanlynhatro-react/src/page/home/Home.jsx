import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const House = styled.div`
  text-align: center;
  height: 200px;
  width: 200px;
  background-color: gray;
  padding-top: 20px;
  cursor: pointer;
  border: 1px solid;
`;
const Name = styled.p`
  font-weight: bold;
  color: blue;
`;
const Adress = styled.p`
  color: black;
`;
const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Link to="/house">
            <House>
              <Name>Chung cư Thảo Nguyên</Name>
              <Adress>Ngõ 250/60 Phan Trọng Tuệ</Adress>
            </House>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
