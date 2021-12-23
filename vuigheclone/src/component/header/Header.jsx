import { Container, Navbar, Row, Col } from "react-bootstrap";
import Logo from "/logo/logo_v8.png";
import { Link } from "react-router-dom";
import "./Header.css";
import NavHeaderUser from "./nav-header-user/NavHeaderUser";
import NavBarLeft from "./nav-bar-left/NavBarLeft";
import NavBarMobile from "./nav-bar-mobile/NavBarMobile";

const Header = () => {
  return (
    <Container>
      <Navbar fixed="top" className="navbar">
        <Container className="navbar-container">
          <NavBarMobile />
          <div className="navbar-header">
            <div className="navbar-brand tet">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
          </div>
          <NavBarLeft />
          <div className="menu-user">
            <NavHeaderUser />
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
