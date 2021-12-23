import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBarMobile.css";
import { Dropdown } from "react-bootstrap";

const NavBarMobile = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="navbar-mobile">
      <Dropdown>
        <Dropdown.Toggle className="btn-menu">Menu</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.ItemText>
            <div className="navbar-search">
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
          </Dropdown.ItemText>
          <Dropdown.Item className="navbar-menu-item">
            <NavLink to="/anime">Anime</NavLink>
          </Dropdown.Item>
          <Dropdown.Item className="navbar-menu-item">
            <NavLink to="/video">Video</NavLink>
          </Dropdown.Item>
          <Dropdown.Item className="navbar-menu-item">
            <NavLink to="/tintuc">Tin Tức</NavLink>
          </Dropdown.Item>
          <Dropdown.Item className="navbar-menu-item">
            <NavLink to="/truyen">Truyện</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavBarMobile;
