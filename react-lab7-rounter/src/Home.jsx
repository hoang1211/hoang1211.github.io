import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default ({ products }) => {
  console.log(products);
  return (
    <div className="product-list">
      <Row>
        {products.map(({ id, title, price }) => {
          return (
            <Col lg={3} key={id}>
              <div className="product">
                <Link to={`/product/${id}`}>
                  <div className="product-thump">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                  </div>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
