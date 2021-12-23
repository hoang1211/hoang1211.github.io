import { Container, Navbar, Row, Col } from "react-bootstrap";
import Logo from "/logo/logo_v8.png";
import { Link } from "react-router-dom";
import "./Header.css";
import NavHeaderUser from "./nav-header-user/NavHeaderUser";
import NavBarLeft from "./nav-bar-left/NavBarLeft";
import NavBarMobile from "./nav-bar-mobile/NavBarMobile";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const ToggleActive = () => {
    setActive(!active);
  };
  return (
    <Container>
      <Navbar fixed="top" className="navbar">
        <Container className="navbar-container">
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
          <button
            className={active ? "btn-active-menu" : "btn-noactive-menu"}
            onClick={ToggleActive}
          >
            <AiOutlineMenu />
          </button>
        </Container>
      </Navbar>
      <NavBarMobile display={active ? "active" : "noactive"} />
    </Container>
  );
};

export default Header;
