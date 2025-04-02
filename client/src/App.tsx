import { Outlet } from "react-router-dom";
import NavRoot from "./components/NavRoot/NavRoot";
import FooterRoot from "./components/FooterRoot/FooterRoot";
import "./App.css";

function App () {
  return (
    <div className="App">
      <NavRoot />
      <Outlet />
      <FooterRoot />
    </div>
  );
}

export default App;
