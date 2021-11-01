import { useState } from "react";
import "./App.css";
import Homepage from "./page/Homepage";
import Address from "./component/Address";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Address />
    </div>
  );
}

export default App;
