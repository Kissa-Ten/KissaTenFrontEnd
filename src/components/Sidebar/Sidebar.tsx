import React from "react";
import { Alert, Item } from ".";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const Register = [
    {
      description: "Ingredientes",
    },
    {
      description: "Receitas",
    },
    {
      description: "Livros",
    },
    {
      description: "Pedidos",
    },
    {
      description: "Fornecedores",
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
              <Item description={link.description} />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Alert />
    </aside>
  );
}

export default Sidebar;
