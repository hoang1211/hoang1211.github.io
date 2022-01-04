import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import "./NavMenu.css";

const MenuItem = styled.div`
  border: 1px solid;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const NavMenu = () => {
  return (
    <Container className="nav-bar-menu">
      <Row>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/housemanager" className="nav-bar-link">
              Quản lý phòng
            </NavLink>
          </MenuItem>
        </Col>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/electric" className="nav-bar-link">
              Quản lý điện
            </NavLink>
          </MenuItem>
        </Col>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/water" className="nav-bar-link">
              Quản lý nước
            </NavLink>
          </MenuItem>
        </Col>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/income" className="nav-bar-link">
              Quản lý thu chi
            </NavLink>
          </MenuItem>
        </Col>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/house" className="nav-bar-link">
              Danh sách phòng
            </NavLink>
          </MenuItem>
        </Col>
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/" className="nav-bar-link">
              Trang chủ
            </NavLink>
          </MenuItem>
        </Col>
      </Row>
      <Row className="line-2">
        <Col xs={6} sm={2}>
          <MenuItem>
            <NavLink to="/addperson" className="nav-bar-link">
              Thêm người thuê
            </NavLink>
          </MenuItem>
        </Col>
      </Row>
    </Container>
  );
};

export default NavMenu;
