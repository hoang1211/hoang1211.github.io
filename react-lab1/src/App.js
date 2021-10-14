import logo from "./logo.svg";
import "./App.css";
import Headermenu from "./component/Header";
import { ContentDisplay } from "./component/Content";

function App() {
  return (
    <div className="App">
      <>
        <Headermenu />
      </>
      <div style={{ border: "1px solid red" }}>
        <ContentDisplay />
      </div>
    </div>
  );
}

export default App;
