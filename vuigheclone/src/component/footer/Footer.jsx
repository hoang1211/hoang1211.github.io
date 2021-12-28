import { Link } from "react-router-dom";
import "./footer.css";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/listfilm") {
    return null;
  } else {
    return (
      <div className="footer">
        <Container className="d-flex justify-content-center">
          <Link to="/listfilm" className="footer-btn">
            Xem thêm
          </Link>
        </Container>
      </div>
    );
  }
};

export default Footer;
