import "./NavBarLeft.css";
import { BsSearch } from "react-icons/bs";
import NavMenu from "./NavMenu";

const NavBarLeft = () => {
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
          ></input>
          <BsSearch className="icon icon-search" />
        </div>
      </div>
    </div>
  );
};
export default NavBarLeft;
