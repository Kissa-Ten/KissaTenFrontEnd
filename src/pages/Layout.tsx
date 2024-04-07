import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <nav>
        <div className="logo">
          <span>KissaTen</span>
          <span className="dot">.</span>
        </div>
        <div>
          <span>Geovana Horodeski</span>
        </div>
      </nav>
      <div id="app">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
