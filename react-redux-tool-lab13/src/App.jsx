import { useState } from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
