import React from "react";
import { Alert, Item } from ".";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const Register = [
    {
      description: "Ingredientes",
      route: "ingredientes",
    },
    {
      description: "Receitas",
      route: "receitas",
    },
    {
      description: "Livros",
      route: "livros",
    },
    {
      description: "Pedidos",
      route: "pedidos",
    },
    {
      description: "Fornecedores",
      route: "fornecedores",
    },
  ];

  return (
    <aside>
      <div>
        <ul>
          <span className={styles.info}>Sistema</span>
          <li className={styles.active}>
            <span>Overview</span>
          </li>
          <span className={styles.info}>Cadastros</span>
          {Register.map((link, index) => (
            <React.Fragment key={index}>
              <Item description={link.description} route={link.route} />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Alert />
    </aside>
  );
}

export default Sidebar;
