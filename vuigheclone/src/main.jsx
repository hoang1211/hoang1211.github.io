import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Anime from "./page/anime/Anime";
import ViewAnime from "./page/viewAnime/ViewAnime";
import Video from "./page/video/Video";
import Tintuc from "./page/tintuc/Tintuc";
import Truyen from "./page/truyen/Truyen";
import ViewMorePage from "./page/viewmorepage/ViewMorePage";
import Search from "./page/searchResult/Search";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="/anime" element={<Anime />}></Route>
            <Route path="/video" element={<Video />}></Route>
            <Route path="/tintuc" element={<Tintuc />}></Route>
            <Route path="/truyen" element={<Truyen />}></Route>
            <Route path="/listfilm" element={<ViewMorePage />}></Route>
            <Route path="/search/:searchChar" element={<Search />}></Route>
            <Route path="/anime/:alias" element={<ViewAnime />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
