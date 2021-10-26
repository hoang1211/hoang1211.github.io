import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
export default ({ products }) => {
  const { productId } = useParams();
  const { image, title, description, price, category, rating } = products.find(
    (p) => p.id == productId
  );
  return (
    <Row>
      <Col lg={3}>
        <img src={image} />
      </Col>
      <Col lg={9}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating.rate}</p>
        <p>{rating.count}</p>
      </Col>
    </Row>
  );
};
