import "./NavBarLeft.css";
import { BsSearch } from "react-icons/bs";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarLeft = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="navbar-left">
      <NavMenu />
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
    </div>
  );
};
export default NavBarLeft;
