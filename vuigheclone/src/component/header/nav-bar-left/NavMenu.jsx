import { NavLink } from "react-router-dom";
import "./NavBarLeft.css";

const NavMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-menu-item">
        <NavLink to="/">Anime</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/">Video</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/">Tin Tức</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/">Truyện</NavLink>
      </div>
      <div className="navbar-menu-item">
        <NavLink to="/">BXH</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
