import styles from "./concept-component.module.scss";

const ConceptComponent = () => {
  return (
    <div className={styles["concept-grid"]}>
      <div className={styles["concept-wrapp"]}>
        <h2 className={styles["concept-text"]}>\\ Concepto:</h2>
      </div>
      <ul className={styles["search-wrapp"]}>
        <li className={styles["search-text"]}>Buscar</li>
      </ul>
    </div>
  );
}

export default ConceptComponent;