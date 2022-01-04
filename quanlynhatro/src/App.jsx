import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default App;
