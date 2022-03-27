import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css";
import { db } from "../../firebase-config";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { BsPeople } from "react-icons/bs";

let roomList = new Array();
let roomC = new Array();
const Home = () => {
  const [person, setPerson] = useState();
  const [room, setRoom] = useState([]);
  useEffect(() => {
    const dataRef = ref(db, "person");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setPerson(data.length);
      setRoom(data);
    });
  }, []);

  if (person > 0) {
    for (let i = 0; i < person; i++) {
      if (room[i] !== undefined) {
        if (roomList.length < person) {
          roomList.push(room[i].room);
        }
      }
    }
  }

  if (roomList.length > 0) {
    roomC = new Set(roomList);
  }

  console.log(roomList.length - roomC.size);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="font-size-18">Welcome !</h4>
          </div>
          <Row>
            <Col xl={3} md={6}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        <Link to="/house">Chung cư Thảo Nguyên </Link>
                      </span>
                      <h4 className="mb-3">
                        <span>
                          Số người thuê {person} <BsPeople />
                        </span>
                      </h4>
                      <div className="text-no-wrap">
                        <span className="badge badge-p">
                          Đã thuê : {roomC.size}
                        </span>
                        <span className="badge badge-s">
                          Phòng trống : {11 - roomC.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
