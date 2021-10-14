import React from "react";

export default function Headermenu() {
  return (
    <div className="header-menu" style={{ border: "1px solid red" }}>
      <ul className="menu-items">
        <li className="item" id="homePage">
          Home page
        </li>
        <li className="item" id="about">
          About
        </li>
        <li className="item" id="life">
          Life
        </li>
        <li className="item" id="photolog">
          Photolog
        </li>
        <li className="item" id="traveling">
          Traveling
        </li>
      </ul>
    </div>
  );
}
