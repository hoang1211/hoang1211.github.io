import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBarMobile.css";
import NavHeaderUser from "../nav-header-user/NavHeaderUser";
import { FaFilm, FaVideo, FaNewspaper, FaBookOpen } from "react-icons/fa";

const NavBarMobile = (props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={props.display}>
      <div className="navbar-mobile">
        <ul className="menu-mobile">
          <li>
            <div className="navbar-search-mobile">
              <div className="search-box">
                <input
                  type="text"
                  name="search-box"
                  placeholder="Tìm kiếm anime"
                  autoComplete="off"
                  className="search-box-text"
                  value={search}
                  onChange={handleSearch}
                ></input>
                <Link to={`/search/` + search}>
                  <BsSearch className="icon icon-search" />
                </Link>
              </div>
            </div>
          </li>
          <li className="menu-mobile-item">
            <NavLink to="/anime">
              <FaFilm /> Anime
            </NavLink>
          </li>
          <li className="menu-mobile-item">
            <NavLink to="/video">
              <FaVideo /> Video
            </NavLink>
          </li>
          <li className="menu-mobile-item">
            <NavLink to="/tintuc">
              <FaNewspaper /> Tin Tức
            </NavLink>
          </li>
          <li className="menu-mobile-item">
            <NavLink to="/truyen">
              <FaBookOpen /> Truyện
            </NavLink>
          </li>
          <li className="menu-mobile-item">
            <NavHeaderUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarMobile;
