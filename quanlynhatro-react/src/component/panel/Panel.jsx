import { Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../public/logo/logo-sm.svg";
import { BsHouse, BsPeople, BsWater, BsBarChartLine } from "react-icons/bs";
import { SiSocketdotio } from "react-icons/si";
import { BiTask } from "react-icons/bi";

const Panel = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <div className="logo-wrapper">
            <span className="logo-lg">
              <img src={logo}></img>
              <span className="logo-txt">Chung cư mini</span>
            </span>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-title">Menu</li>
            <li className="menu-items">
              <NavLink to="/" className="menu-link">
                <BsHouse className="menu-icon" />
                <span className="menu-item">Home</span>
              </NavLink>
            </li>
          </ul>
          <ul className="menu-list">
            <li className="menu-title">Apps</li>
            <li className="menu-items">
              <span className="menu-link menu-arrow">
                <BsBarChartLine className="menu-icon" />
                <span className="menu-item">Danh sách phòng</span>
              </span>
              <ul className="sub-menu">
                <li>
                  <NavLink to="/house/P202">P202</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P301">P301</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P302">P302</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P401">P401</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P402">P402</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P501">P501</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P502">P502</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P601">P601</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P602">P602</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P701">P701</NavLink>
                </li>
                <li>
                  <NavLink to="/house/P702">P702</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-items">
              <NavLink to="/housemanager" className="menu-link">
                <BsPeople className="menu-icon" />
                <span className="menu-item">Quản lý người thuê</span>
              </NavLink>
            </li>
            <li className="menu-items">
              <NavLink to="/electric" className="menu-link">
                <SiSocketdotio className="menu-icon" />
                <span className="menu-item">Quản lý điện</span>
              </NavLink>
            </li>
            <li className="menu-items">
              <NavLink to="/water" className="menu-link">
                <BsWater className="menu-icon" />
                <span className="menu-item">Quản lý nước</span>
              </NavLink>
            </li>
            <li className="menu-items">
              <NavLink to="/income" className="menu-link">
                <BiTask className="menu-icon" />
                <span className="menu-item">Quản lý dịch vụ</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Panel;
