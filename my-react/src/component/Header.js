import "./Header.css";
import { Envelope, Phone } from "phosphor-react";

const Header = () => {
  return (
    <div className="wrap-header">
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="top-right">
              <ul className="info">
                <li className="email">
                  <a href="mailto:http//rovpc1211@gmail.com">
                    <span className="icon">
                      <Envelope size={16} />
                    </span>
                    rovpc1211@gmail.com
                  </a>
                </li>
                <li className="phone">
                  <a href="tel:0374889957">
                    <span className="icon">
                      <Phone size={16} />
                    </span>
                    0374889957
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
