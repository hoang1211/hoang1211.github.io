import { NavLink } from "react-router-dom";
import "./NavBarLeft.css";

const NavMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-menu-item">
        <NavLink to="/anime">Anime</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/video">Video</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/tintuc">Tin Tức</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/truyen">Truyện</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/bxh">BXH</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
