import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
