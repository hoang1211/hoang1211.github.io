import { Col, Row, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import HouseComponent from "./HouseComponent";
import { useParams } from "react-router-dom";

const House = () => {
  const roomParam = useParams();
  const roomName = roomParam.housename;
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="font-size-18">Phòng : {roomName}</h4>
          </div>
          <HouseComponent room={roomName} />
        </Col>
      </Row>
    </Container>
  );
};
export default House;
