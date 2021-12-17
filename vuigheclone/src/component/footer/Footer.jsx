import { Link } from "react-router-dom";
import "./footer.css";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container className="d-flex justify-content-center">
        <Link to="/listfilm" className="footer-btn">
          Xem thêm
        </Link>
      </Container>
    </div>
  );
};

export default Footer;
