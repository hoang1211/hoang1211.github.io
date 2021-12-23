import { Col, Row, Container } from "react-bootstrap";
import { getFilmsById } from "../../db/db";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container className="banner">
      <Row>
        <Col sm={8} xs={12} className="main-banner">
          <Link to={`./${getFilmsById(1).type}/${getFilmsById(1).alias}`}>
            <img src={getFilmsById(1).image} />
          </Link>
        </Col>
        <Col sm={4} xs={12} className="sub-banner">
          <Row>
            <Link to={`./${getFilmsById(2).type}/${getFilmsById(2).alias}`}>
              <img src={getFilmsById(2).image} />
            </Link>
          </Row>
          <Row className="mt-2">
            <Link to={`./${getFilmsById(3).type}/${getFilmsById(3).alias}`}>
              <img src={getFilmsById(3).image} />
            </Link>
          </Row>
          <Row className="mt-2">
            <Link to={`./${getFilmsById(4).type}/${getFilmsById(4).alias}`}>
              <img src={getFilmsById(4).image} />
            </Link>
          </Row>
        </Col>
      </Row>
      <Row className="bottom-banner mt-2">
        <Col xs={3}>
          <Link to={`./${getFilmsById(3).type}/${getFilmsById(3).alias}`}>
            <img src={getFilmsById(3).image} />
          </Link>
        </Col>
        <Col xs={3}>
          <Link to={`./${getFilmsById(2).type}/${getFilmsById(2).alias}`}>
            <img src={getFilmsById(2).image} />
          </Link>
        </Col>
        <Col xs={3}>
          <Link to={`./${getFilmsById(3).type}/${getFilmsById(3).alias}`}>
            <img src={getFilmsById(3).image} />
          </Link>
        </Col>
        <Col xs={3}>
          <Link to={`./${getFilmsById(1).type}/${getFilmsById(1).alias}`}>
            <img src={getFilmsById(1).image} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
