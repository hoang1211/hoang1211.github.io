import { Outlet } from "react-router-dom";
import "./App.css";
import Panel from "./component/panel/Panel";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Be Vietnam Pro", "Material Icons"],
      },
    });
  });
  return (
    <>
      <Panel />
      <div className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
