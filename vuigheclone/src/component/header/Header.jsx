import { Container, Navbar } from "react-bootstrap";
import Logo from "/logo/logo_v8.png";
import { Link } from "react-router-dom";
import "./Header.css";
import NavHeaderUser from "./nav-header-user/NavHeaderUser";
import NavBarLeft from "./nav-bar-left/NavBarLeft";

const Header = () => {
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
          <NavHeaderUser />
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
