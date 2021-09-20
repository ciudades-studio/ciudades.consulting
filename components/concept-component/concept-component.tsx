import { IConceptBullets } from "../../fixtures/concept-component.fixture";
import bullets from "../../fixtures/concept-component.fixture";
import styles from "./concept-component.module.scss";

const ConceptWrapp = ({...bulletItems}: IConceptBullets) => {
  return (
    <div className={styles["concept-wrapp"]}>
      <h2 className={styles["concept-text"]}>\\ {bulletItems.concept}:</h2>
    </div>
  );
}

const SearchtWrapp = ({...bulletItems}: IConceptBullets) => {
  return (
    <ul className={styles["search-wrapp"]}>
      {bulletItems.bullets.map((bullet, index) => <li key={index} className={styles["search-text"]}>{bullet}</li>)}
    </ul>
  );
}

const ConceptComponent = () => {
  return (
    <div className={styles["concept-grid"]}>
      <ConceptWrapp concept={"Concept"} bullets={[]} />
      <SearchtWrapp concept={""} bullets={["Bullet"]}  />
    </div>
  );
}

export default ConceptComponent;