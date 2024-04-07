import styles from "./Sidebar.module.css"

function Alert() {
  return (
    <div className={styles.alert}>
      <button>
        <i className="ph ph-x-circle"></i>
      </button>
      <span>Produtos com baixa unidade no estoque</span>
    </div>
  );
}

export default Alert;
