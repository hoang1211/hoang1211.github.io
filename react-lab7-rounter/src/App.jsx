import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Layout from "../layout/Layout";
import server from "./Sever";

server();
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      });
    // .catch((error) => {
    //   setError(error);
    // });
  }, []);
  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="success">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Layout>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/product/:productId">
          <Product products={products} />
        </Route>
        <Route path="/">
          <Home products={products} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
