import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Header";
import Todo from "./component/Todo";

function App() {
  let ref = useRef();
  console.log(ref);
  let otherRef = useRef();
  console.log(otherRef);

  return (
    <Router>
      <header ref={ref}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" ref={otherRef}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <Todo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
