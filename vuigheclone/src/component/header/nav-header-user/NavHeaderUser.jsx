import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { Col, Row } from "react-bootstrap";

const NavHeaderUser = () => {
  return (
    <div className="navbar-header-user">
      <Row>
        <Col xs={6}>
          <div className="user-login user-avatar" id="user-avatar">
            <BsPersonCircle className="icon" />
          </div>
        </Col>
        <Col xs={6}>
          <div className="user-theme hidden-320" id="user-theme">
            <MdOutlineWbSunny className="icon" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default NavHeaderUser;
