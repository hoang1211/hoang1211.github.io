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
            className="search-box-text"
          ></input>
          <BsSearch className="icon icon-search" />
        </div>
        {/* <div className="search-result activated" id="search-result">
          <div
            className="result-body ps-container ps-theme-default"
            data-ps-id="2f49d6c8-498c-e7a0-8415-fe8df2eac42d"
          />
          <div className="result-noitem">Nhập tên anime để tìm kiếm</div>
          <div className="loading hidden" />
        </div> */}
      </div>
    </div>
  );
};
export default NavBarLeft;
