import "./assets/styles/global.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
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
      <Sidebar />
      <main></main>
    </>
  );
}

export default App;
