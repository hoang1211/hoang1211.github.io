import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import House from "./page/house/House";
import HouseManager from "./page/housemanager/HouserManager";
import InputPerson from "./page/inputdata/InputPerson";
import Electric from "./page/electric/Electric";
import Water from "./page/water/Water";
import NguoiTungThue from "./page/nguoitungthue/NguoiTungThue";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="/house" element={<House />}></Route>
          <Route path="/housemanager" element={<HouseManager />}></Route>
          <Route path="/addperson" element={<InputPerson />}></Route>
          <Route path="/electric" element={<Electric />}></Route>
          <Route path="/water" element={<Water />}></Route>
          <Route path="/nguoitungthue" element={<NguoiTungThue />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
