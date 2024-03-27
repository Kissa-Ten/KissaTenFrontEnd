import "./assets/styles/global.css";

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
      <aside>
        <div>
          <ul>
            <span className="info">Sistema</span>
            <li className="active">
              <span>Overview</span>
            </li>
            <hr />
            <span className="info">Cadastros</span>
            <li>
              <span>Ingredientes</span>
            </li>
            <li>
              <span>Receita</span>
            </li>
            <li>
              <span>Fornecedor</span>
            </li>
          </ul>
        </div>
      </aside>
      <main></main>
    </>
  );
}

export default App;
