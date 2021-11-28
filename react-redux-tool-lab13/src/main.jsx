import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Prover } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

ReactDOM.render(
  <React.StrictMode>
    <Prover store={store}>
      <BrowserRouter></BrowserRouter>
    </Prover>
  </React.StrictMode>,
  document.getElementById("root")
);
